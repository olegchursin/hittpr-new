/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';
import Layout from '../components/layout/Layout';
import { HOME_ROUTE } from '../util/routes';

function Error() {
  return (
    <>
      <Layout>
        <section className="section-box mt-100">
          <div className="container">
            <div className="row">
              <div className="col-lg-12 text-center mt-40">
                <img
                  className="img-responsive"
                  src="assets/imgs/template/404.png"
                  alt="Agon"
                />
                <h2 className="text-heading-1 color-gray-900 mb-20 mt-50">
                  Ой-ой! Данная страница отсутствует.
                </h2>
                <p className="text-heading-5 color-gray-600 mt-30 mb-70">
                  Нам не удалось найти запрошенную страницу
                </p>

                <div className="text-center mb-50">
                  <Link href={HOME_ROUTE}>
                    <a className="btn btn-black icon-arrow-left">
                      Вернуться на главную
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
}

export default Error;
