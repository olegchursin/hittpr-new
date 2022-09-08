import Layout from '../components/layout/Layout';

function Contact() {
  return (
    <>
      <Layout>
        <section className="section-box">
          <div className="banner-hero banner-breadcrums">
            <div className="container text-center">
              <h1 className="text-heading-2 color-gray-1000 mb-20">
                Свяжитесь с нами
              </h1>
              <p className="text-body-text color-gray-500">
                Мы открыты для общения и готовы к полному контакту.
              </p>
            </div>
          </div>
        </section>
        <section className="section-box">
          <div className="container mb-20 mt-60">
            <div className="bdrd-58 box-gray-100 icon-wave">
              <div className="row">
                <div className="col-lg-12 mb-60">
                  <span className="text-body-capitalized text-uppercase">
                    Наши контакты
                  </span>
                  <h2 className="text-heading-3 color-gray-900 mt-10">
                    Давайте работать вместе
                  </h2>
                  <p className="text-body-text color-gray-600 mt-20">
                    Оставьте свои контакты, чтобы получить&nbsp;
                    <br className="d-lg-block d-none" />
                    индивидуальную консультацию.
                  </p>
                </div>
                <div className="col-lg-4 mb-40">
                  <h4 className="text-heading-6 color-gray-900 icon-home mb-10 mt-10">
                    hittpr
                  </h4>
                  <p className="text-body-text color-gray-600">
                    154 Grand Street
                    <br />
                    SoHo, New York 10013 USA
                  </p>
                  <hr />
                  <p className="text-body-text color-gray-600">
                    Марина Хитт
                    <br />
                    marina@hittpr.com
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
}

export default Contact;
