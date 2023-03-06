import { FC } from 'react';
import BannerHero from '../../components/elements/BannerHero';
import Layout from '../../components/layout/Layout';
import LinkList from '../../components/LinkList';
import { PrCategory, prContent } from '../../util/pr-content';

const content = Object.values(prContent).filter(
  content => content.category === PrCategory.FASHION
);

const Fashion: FC = () => {
  return (
    <Layout>
      <section className="section-box">
        <BannerHero
          title="PR - Fashion"
          subtitle="Продвижение бизнеса современными инструментами рекламы,
          маркетинга и PR"
        />
      </section>

      <section className="section-box mt-80">
        <div className="container">
          {content.map(item => {
            return (
              <div className="mb-40">
                <h4 className="mb-20">{item.title}</h4>
                <LinkList links={item.links} pdfs={item.pdfs} />
              </div>
            );
          })}
        </div>
      </section>
    </Layout>
  );
};

export default Fashion;
