import { FC } from 'react';
import BannerHero from '../../components/elements/BannerHero';
import Layout from '../../components/layout/Layout';
import ServicesGrid from '../../components/ServicesGrid';

const PR: FC = () => {
  return (
    <Layout>
      <section className="section-box">
        <BannerHero
          title="PR"
          subtitle="Продвижение бизнеса современными инструментами рекламы,
          маркетинга и PR"
        />
      </section>

      <section className="section-box mt-80">
        <div className="container">
          <ServicesGrid />
        </div>
      </section>
    </Layout>
  );
};

export default PR;
