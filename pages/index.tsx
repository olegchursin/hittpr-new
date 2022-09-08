import Cta from '../components/elements/Cta';
import Hero from '../components/elements/Hero';
import Layout from '../components/layout/Layout';
import Services from '../components/elements/Services';
import Testimonials from '../components/elements/Testimonials';
import WorkPhilosophy from '../components/elements/WorkPhilosophy';

function Homepage() {
  return (
    <Layout>
      <Hero />
      <Services />
      <Testimonials />
      <WorkPhilosophy />
      <Cta />
    </Layout>
  );
}

export default Homepage;
