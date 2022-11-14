import { FC } from 'react';
import BannerHero from '../components/elements/BannerHero';
import Layout from '../components/layout/Layout';
import LinkList from '../components/LinkList';
import { prContent } from '../util/pr-content';

const PressPr: FC = () => {
  return (
    <Layout>
      <section className="section-box">
        <BannerHero
          title="PR в СМИ"
          subtitle="Продвижение бизнеса современными инструментами рекламы,
          маркетинга и PR"
        />
      </section>

      <section className="section-box mt-80">
        <div className="container">
          {Object.values(prContent).map(item => {
            return (
              <div className="mb-40">
                <h4 className="mb-20">{item.title}</h4>
                <LinkList links={item.links} />
              </div>
            );
          })}
        </div>
      </section>
    </Layout>
  );
};

export default PressPr;
