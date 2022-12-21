import Cta from '../components/elements/Cta';
import Hero from '../components/elements/Hero';
import Layout from '../components/layout/Layout';
import Services from '../components/elements/Services';
import WorkPhilosophy from '../components/elements/WorkPhilosophy';
import Brands from '../components/elements/Brands';

function Homepage() {
  return (
    <Layout>
      <Hero />
      <Brands />
      <Services />
      <WorkPhilosophy />
      <Cta />
    </Layout>
  );
}

export default Homepage;
