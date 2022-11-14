import { FC } from 'react';
import BannerHero from '../../components/elements/BannerHero';
import Layout from '../../components/layout/Layout';
import LinkList from '../../components/LinkList';
import { prContent } from '../../util/pr-content';

const { title, links } = prContent.sport;

const Sport: FC = () => {
  return (
    <Layout>
      <section className="section-box">
        <BannerHero
          title="PR - Спорт"
          subtitle="Продвижение бизнеса современными инструментами рекламы,
          маркетинга и PR"
        />
      </section>

      <section className="section-box mt-80">
        <div className="container">
          <h4 className="mb-20">{title}</h4>
          <LinkList links={links} />
        </div>
      </section>
    </Layout>
  );
};

export default Sport;
