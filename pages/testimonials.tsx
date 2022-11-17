import { FC } from 'react';
import BannerHero from '../components/elements/BannerHero';
import Layout from '../components/layout/Layout';

const Testimonials: FC = () => {
  return (
    <Layout>
      <section className="section-box">
        <BannerHero
          title="Отзывы"
          subtitle="Продвижение бизнеса современными инструментами рекламы,
        маркетинга и PR"
        />
      </section>

      <section className="section-box mt-80">
        <div className="container">testimonials</div>
      </section>
    </Layout>
  );
};

export default Testimonials;
