import { FC } from 'react';
import BannerHero from '../components/elements/BannerHero';
import Layout from '../components/layout/Layout';

const testimonials = [
  {
    id: 'andreina',
    title: 'Наталья Андреина',
    at: '@nataly.coach',
    url: 'https://www.youtube.com/embed/Vue7dxJwfJw'
  },
  {
    id: 'bekieva',
    title: 'Виктория Бекиева',
    at: '@center_psy_viktoria_bekieva',
    url: 'https://www.youtube.com/embed/jvDr0ZKGzRw'
  },
  {
    id: 'chekalkina',
    title: 'Anna Chekalkina',
    at: 'БК “Factory Fight”',
    url: 'https://www.youtube.com/embed/yUxUvQaXKD0'
  },
  {
    id: 'sillakh',
    title: 'Исмайл Силлах',
    at: '@ismaylsillah',
    url: 'https://www.youtube.com/embed/PgWKdggMIn4'
  },
  {
    id: 'belan',
    title: 'Анастасия Белан',
    at: '@mindbelany',
    url: 'https://www.youtube.com/embed/V_rv0ao9oU0'
  },
  {
    id: 'borisenko',
    title: 'Евгения Борисенко',
    url: 'https://www.youtube.com/embed/j7sXxcV8GPc'
  },
  {
    id: 'teiban',
    title: 'Екатерина Тейбан',
    url: 'https://www.youtube.com/embed/NDA-FLsCDE0'
  }
];

const Testimonials: FC = () => {
  return (
    <Layout>
      <section className="section-box">
        <BannerHero
          title="Отзывы"
          subtitle="Продвижение бизнеса современными инструментами рекламы,
        маркетинга и PR"
        />
      </section>

      <section className="section-box mt-80">
        <div className="container">
          <div className="row">
            {testimonials.map(t => {
              return (
                <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12">
                  <div className="product-item-2 product-item-3">
                    <div className="product-image">
                      <iframe
                        key={t.id}
                        src={t.url}
                        height="160px"
                        width="280px"
                        title={t.title}
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      ></iframe>
                    </div>

                    <div className="product-info">
                      <h3 className="text-body-lead color-gray-900">
                        {t.title}
                      </h3>

                      <div className="mt-10">
                        <div className="box-prices">
                          <span>{t.at}</span>
                        </div>
                      </div>
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
};

export default Testimonials;
