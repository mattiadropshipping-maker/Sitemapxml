import { Hono } from "npm:hono";
import { cors } from "npm:hono/cors";
import { logger } from "npm:hono/logger";
import * as kv from "./kv_store.tsx";
const app = new Hono();

// Enable logger
app.use('*', logger(console.log));

// Enable CORS for all routes and methods
app.use(
  "/*",
  cors({
    origin: "*",
    allowHeaders: ["Content-Type", "Authorization"],
    allowMethods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    exposeHeaders: ["Content-Length"],
    maxAge: 600,
  }),
);

// Health check endpoint
app.get("/make-server-8b62266e/health", (c) => {
  return c.json({ status: "ok" });
});

// Contact form endpoint
app.post("/make-server-8b62266e/contact", async (c) => {
  console.log("📧 Endpoint /contact recibió una solicitud");
  
  try {
    const body = await c.req.json();
    console.log("📝 Datos recibidos:", body);
    
    const { nombre, email, empresa, telefono, servicio, mensaje } = body;

    // Validación básica
    if (!nombre || !email || !servicio || !mensaje) {
      console.log("❌ Validación fallida - campos faltantes");
      return c.json({ error: "Faltan campos obligatorios" }, 400);
    }

    console.log("✅ Validación exitosa");

    // Guardar en KV store para respaldo
    const timestamp = new Date().toISOString();
    const contactId = `contact_${Date.now()}`;
    
    console.log("💾 Guardando en KV store con ID:", contactId);
    await kv.set(contactId, {
      nombre,
      email,
      empresa,
      telefono,
      servicio,
      mensaje,
      timestamp,
    });
    console.log("✅ Guardado en KV store exitoso");

    // Enviar email usando Resend
    const RESEND_API_KEY = Deno.env.get("RESEND_API_KEY");
    
    if (!RESEND_API_KEY) {
      console.error("❌ RESEND_API_KEY no está configurada en las variables de entorno");
      return c.json({ 
        error: "Configuración de email no disponible. El mensaje fue guardado y nos pondremos en contacto contigo pronto." 
      }, 500);
    }

    console.log("🔑 RESEND_API_KEY encontrada");

    const emailBody = `
      <!DOCTYPE html>
      <html>
      <head>
        <style>
          body { font-family: Arial, sans-serif; line-height: 1.6; color: #333333; }
          .container { max-width: 600px; margin: 0 auto; padding: 20px; }
          .header { background-color: #003366; color: white; padding: 30px; text-align: center; border-radius: 10px 10px 0 0; }
          .header h1 { margin: 0; font-size: 24px; }
          .content { background-color: #ffffff; padding: 30px; border: 1px solid #e5e7eb; }
          .field { margin-bottom: 20px; }
          .field-label { font-weight: bold; color: #003366; margin-bottom: 5px; }
          .field-value { color: #333333; }
          .message-box { background-color: #f4f7f9; padding: 15px; border-radius: 5px; margin-top: 10px; }
          .footer { background-color: #f4f7f9; padding: 20px; text-align: center; border-radius: 0 0 10px 10px; }
          .footer p { margin: 5px 0; font-size: 12px; color: #666666; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1>📧 Nuevo Mensaje de Contacto</h1>
            <p>GEO Marketing IA</p>
          </div>
          <div class="content">
            <div class="field">
              <div class="field-label">👤 Nombre:</div>
              <div class="field-value">${nombre}</div>
            </div>
            <div class="field">
              <div class="field-label">📧 Email:</div>
              <div class="field-value"><a href="mailto:${email}">${email}</a></div>
            </div>
            ${empresa ? `
            <div class="field">
              <div class="field-label">🏢 Empresa:</div>
              <div class="field-value">${empresa}</div>
            </div>` : ''}
            ${telefono ? `
            <div class="field">
              <div class="field-label">📱 Teléfono:</div>
              <div class="field-value"><a href="tel:${telefono}">${telefono}</a></div>
            </div>` : ''}
            <div class="field">
              <div class="field-label">🎯 Servicio de Interés:</div>
              <div class="field-value">${servicio}</div>
            </div>
            <div class="field">
              <div class="field-label">💬 Mensaje:</div>
              <div class="message-box">${mensaje.replace(/\n/g, '<br>')}</div>
            </div>
          </div>
          <div class="footer">
            <p>📅 Recibido el: ${new Date().toLocaleString('es-ES', { 
              weekday: 'long', 
              year: 'numeric', 
              month: 'long', 
              day: 'numeric',
              hour: '2-digit',
              minute: '2-digit'
            })}</p>
            <p>🌐 www.geomarketingia.com</p>
          </div>
        </div>
      </body>
      </html>
    `;

    console.log("📧 Enviando email a Resend API...");
    
    const resendResponse = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from: "Contatti Sito <form@geomarketingia.com>",
        to: ["info@geomarketingia.com"],
        reply_to: email, // Email del cliente dal form per rispondere direttamente
        subject: `🔔 Nuevo Contacto: ${nombre} - ${servicio}`,
        html: emailBody,
      }),
    });

    const resendData = await resendResponse.json();
    console.log("📨 Respuesta de Resend:", resendData);

    if (!resendResponse.ok) {
      console.error("❌ Error al enviar email con Resend:", resendData);
      return c.json({ 
        error: "Error al enviar el email, pero tu mensaje fue guardado. Nos pondremos en contacto pronto.",
        details: resendData
      }, 500);
    }

    console.log("✅ Email enviado correctamente con ID:", resendData.id);
    
    return c.json({ 
      success: true, 
      message: "Mensaje enviado correctamente",
      emailId: resendData.id 
    });

  } catch (error) {
    console.error("❌ Error en el endpoint de contacto:", error);
    return c.json({ error: "Error al procesar el mensaje. Por favor, intenta de nuevo.", details: String(error) }, 500);
  }
});

Deno.serve(app.fetch);