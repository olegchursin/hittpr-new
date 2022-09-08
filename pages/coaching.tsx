import CoachingCta from '../components/elements/CoachingCta';
import Layout from '../components/layout/Layout';

function Coaching() {
  return (
    <>
      <Layout>
        <section className="section-box">
          <div className="banner-hero banner-breadcrums">
            <div className="container text-center">
              <h1 className="text-heading-2 color-gray-1000 mb-20">Коучинг</h1>
              <p className="text-body-text color-gray-500">
                Профессиоанльный индивидуальный коучинг
              </p>
            </div>
          </div>
        </section>

        <section className="section-box">
          <CoachingCta />
        </section>
      </Layout>
    </>
  );
}

export default Coaching;
