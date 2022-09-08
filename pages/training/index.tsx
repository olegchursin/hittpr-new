import Layout from '../../components/layout/Layout';
import Link from 'next/link';
import { courses } from '../../util/courses';

function Training() {
  return (
    <Layout>
      <section className="section-box">
        <div className="banner-hero banner-breadcrums">
          <div className="container text-center">
            <h1 className="text-heading-2 color-gray-1000 mb-20">Тренинги</h1>
            <p className="text-body-text color-gray-500">
              Делаем бизнес привлекательным для партнеров и инвесторов.
            </p>
          </div>
        </div>
      </section>

      <section className="section-box">
        <div className="container">
          <div className="row">
            <div className="col-lg-2 col-sm-1 col-12" />
            <div className="col-lg-8 col-sm-10 col-12 text-center mt-100">
              <h2 className="text-heading-1 color-gray-900">
                Индивидуальные и групповые тренинги
              </h2>
              <p className="text-body-lead-large color-gray-600 mt-20">
                Поможем разобраться, на какие сильные стороны компании или
                персоны стоит делать акцент в продвижении.
              </p>
            </div>
            <div className="col-lg-2 col-sm-1 col-12" />
          </div>
        </div>

        <div className="container mt-70">
          <div className="row">
            {courses.map(course => {
              const { title, subtitle, description, id, href, bgColor } =
                course;

              return (
                <div key={id} className="col-lg-4 col-sm-12">
                  <div className={`card-grid-1 ${bgColor} hover-up`}>
                    <h3 className="text-heading-3 mt-10">{title}</h3>
                    <h5 className="mt-10 color-gray-600">{subtitle}</h5>
                    <p className="text-body-excerpt mt-20">{description}</p>
                    <div className="mt-30">
                      <Link href={href}>
                        <a className="btn btn-default btn-white icon-arrow-right">
                          Узнать детали
                        </a>
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </Layout>
  );
}

export default Training;
