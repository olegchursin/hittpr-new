import Cta from '../components/elements/Cta';
import Hero from '../components/elements/Hero';
import Layout from '../components/layout/Layout';
import Services from '../components/elements/Services';
import WorkPhilosophy from '../components/elements/WorkPhilosophy';

function Homepage() {
  return (
    <Layout>
      <Hero />
      <Services />
      <WorkPhilosophy />
      <Cta />
    </Layout>
  );
}

export default Homepage;
