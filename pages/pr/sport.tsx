import { FC } from 'react';
import BannerHero from '../../components/elements/BannerHero';
import LeadParagraph from '../../components/elements/LeadParagraph';
import Layout from '../../components/layout/Layout';

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
          <div className="col-12 text-center">
            <LeadParagraph
              text="Стратегическое видение и внимание к мельчайшим деталям, отличные
              идеи и их тщательное выполнение – все это помогает нам максимально
              эффективно решать поставленные задачи."
            />
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Sport;
