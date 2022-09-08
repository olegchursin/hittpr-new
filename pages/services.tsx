import Cta from '../components/elements/Cta';
import Layout from '../components/layout/Layout';
import ServicesSection from '../components/elements/Services';

function Services() {
  return (
    <>
      <Layout>
        <section className="section-box">
          <div className="banner-hero banner-breadcrums">
            <div className="container text-center">
              <h1 className="text-heading-2 color-gray-1000 mb-20">Услуги</h1>
              <p className="text-body-text color-gray-500">
                Услуги нашего PR агентства
              </p>
            </div>
          </div>
        </section>

        <ServicesSection />

        <section className="section-box mt-100">
          <div className="container">
            <div className="row">
              <div className="col-lg-12 col-sm-12 col-12">
                <div className="text-start mb-25">
                  <span className="tag-1 bg-6 color-green-900">Почему мы</span>
                </div>
                <h2 className="text-heading-2 color-gray-900 mb-50">
                  Работая с нами вы получите
                </h2>
              </div>
            </div>
          </div>
          <div className="container mt-20">
            <div className="row">
              <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                <div className="list-icons">
                  <div className="item-icon none-bd">
                    <span className="icon-left">
                      <img
                        src="/assets/imgs/page/services/1/icon-support.svg"
                        alt="Agon"
                      />
                    </span>
                    <h4 className="text-heading-6">
                      Свежий взгляд на продвижение бизнеса
                    </h4>
                    <p className="text-body-text color-gray-600 mt-15">
                      Часто наши клиенты не видят инструментов в их бизнесе,
                      бесплатное внедрение которых в рекламу и в продвижение
                      может привлечь внимание со стороны целевой аудитории.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                <div className="list-icons">
                  <div className="item-icon none-bd">
                    <span className="icon-left">
                      <img
                        src="/assets/imgs/page/services/1/icon-web.svg"
                        alt="Agon"
                      />
                    </span>
                    <h4 className="text-heading-6">
                      Честную и качественную работу
                    </h4>
                    <p className="text-body-text color-gray-600 mt-15">
                      Да, мы тут зарабатываем деньги. Но главное не это, а
                      решение Ваших задач. Мы дорожим своей репутацией, работаем
                      с максимальным проникновением в бизнес.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                <div className="list-icons">
                  <div className="item-icon none-bd">
                    <span className="icon-left">
                      <img
                        src="/assets/imgs/page/services/1/icon-business.svg"
                        alt="Agon"
                      />
                    </span>
                    <h4 className="text-heading-6">
                      Рекомендации по работе с Вашими клиентами
                    </h4>
                    <p className="text-body-text color-gray-500 mt-15">
                      Как вести диалоги с клиентами, чтобы продавать чаще? По
                      каким параметрам оценивать работу рекламы, сотрудников?
                      Ответы на эти и другие вопросы.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <Cta bgColorVariant={7} />
      </Layout>
    </>
  );
}

export default Services;
