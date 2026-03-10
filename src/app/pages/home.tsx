import { Hero } from '../components/hero';
import { SocialProof } from '../components/social-proof';
import { ServicesGrid } from '../components/services-grid';
import { ContentSections } from '../components/content-sections';
import { Stats } from '../components/stats';
import { Testimonials } from '../components/testimonials';
import { FAQ } from '../components/faq';
import { Blog } from '../components/blog';

export function Home() {
  return (
    <>
      <Hero />
      <SocialProof />
      <ServicesGrid />
      <ContentSections />
      <Stats />
      <Testimonials />
      <FAQ />
      <Blog />
    </>
  );
}