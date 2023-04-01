import { FaTelegram } from 'react-icons/fa';

import EmailLink from '../components/elements/EmailLink';
import Layout from '../components/layout/Layout';

function Contact() {
  return (
    <>
      <Layout>
        <section className="section-box">
          <div className="banner-hero banner-breadcrums">
            <div className="container text-center">
              <h1 className="text-heading-2 color-gray-1000 mb-20">Контакты</h1>
              <p className="text-body-text color-gray-500">
                Мы открыты для общения и готовы к полному контакту.
              </p>
            </div>
          </div>
        </section>
        <section className="section-box">
          <div className="container mb-20 mt-60">
            <div className="bdrd-24 box-gray-100 icon-wave">
              <div className="row">
                <div className="col-lg-12 mb-20">
                  <span className="text-body-capitalized text-uppercase">
                    Наши контакты
                  </span>
                  <h2 className="text-heading-3 color-gray-900 mt-10">
                    Свяжитесь с нами
                  </h2>
                  <p className="text-body-text color-gray-600 mt-20">
                    Оставьте свои контакты, чтобы получить&nbsp;
                    <br className="d-lg-block d-none" />
                    индивидуальную консультацию.
                  </p>
                  <div className="text-body-text color-gray-600">
                    <br />
                    <EmailLink />
                  </div>
                </div>
                <div className="col-lg-4">
                  <hr />
                  <div className="text-body-text color-gray-600">
                    <br />
                    <h4>
                      <a href="https://t.me/hitt_pr_nyc">
                        <FaTelegram />
                      </a>
                    </h4>
                  </div>
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
