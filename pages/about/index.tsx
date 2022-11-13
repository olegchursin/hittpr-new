import BannerHero from '../../components/elements/BannerHero';
import LeadParagraph from '../../components/elements/LeadParagraph';
import Layout from '../../components/layout/Layout';

function About() {
  return (
    <Layout>
      <section className="section-box">
        <BannerHero
          title="Коротко о нас"
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

        <div className="container mt-40">
          <div className="row">
            <div className="col-lg-4 col-md-12 col-sm-12">
              <div className="list-icons mt-50">
                <div className="item-icon none-bd">
                  <span className="icon-left">
                    <img
                      src="/assets/imgs/hittpr/icon-acquis.svg"
                      alt="Hittpr"
                    />
                  </span>
                  <h4 className="text-heading-4">Принципы</h4>
                  <p className="text-body-text color-gray-600 mt-15">
                    Постоянно развиваемся и помогаем расти вам. Погружаемся в
                    специфику вашего бизнеса. Быстро работаем, всегда на связи.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-12 col-sm-12">
              <div className="list-icons mt-50">
                <div className="item-icon none-bd">
                  <span className="icon-left">
                    <img
                      src="/assets/imgs/hittpr/icon-active.svg"
                      alt="Hittpr"
                    />
                  </span>
                  <h4 className="text-heading-4">Как мы работаем</h4>
                  <p className="text-body-text color-gray-600 mt-15">
                    Наша работа основывается на сочетании научных разработок и
                    креативного подхода для реализации задач наших клиентов.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-12 col-sm-12">
              <div className="list-icons mt-50">
                <div className="item-icon none-bd">
                  <span className="icon-left">
                    <img
                      src="/assets/imgs/hittpr/icon-retent.svg"
                      alt="Hittpr"
                    />
                  </span>
                  <h4 className="text-heading-4">Наши цены</h4>
                  <p className="text-body-text color-gray-600 mt-15">
                    Прозрачная ценовая политика дает Вам полное представление о
                    формировании стоимости, а также возможность прогнозировать
                    изменение стоимости проекта в случае изменений Ваших
                    требований.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}

export default About;