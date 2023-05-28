import Brands from '../components/elements/Brands';
import Cta from '../components/elements/Cta';
import Hero from '../components/elements/Hero';
import HhnyCta from '../components/elements/HhnyCta';
import Layout from '../components/layout/Layout';
import Services from '../components/elements/Services';
import WorkPhilosophy from '../components/elements/WorkPhilosophy';

function Homepage() {
  return (
    <Layout>
      <Hero />
      <Brands />
      <Services />
      <HhnyCta />
      <WorkPhilosophy />
      <Cta />
    </Layout>
  );
}

export default Homepage;
