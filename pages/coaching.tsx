import BannerHero from '../components/elements/BannerHero';
import CoachingCta from '../components/elements/CoachingCta';
import Layout from '../components/layout/Layout';

function Coaching() {
  return (
    <Layout>
      <section className="section-box">
        <BannerHero
          title="Коучинг"
          subtitle="Профессиоанльный индивидуальный коучинг"
        />
      </section>

      <section className="section-box">
        <CoachingCta />
      </section>
    </Layout>
  );
}
export default Coaching;
