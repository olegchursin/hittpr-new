import { FC } from 'react';
import BannerHero from '../components/elements/BannerHero';
import Layout from '../components/layout/Layout';
import ModalVideo from '../components/elements/ModalVideo';
import styles from './testimonials.module.css';

const testimonials = [
  {
    id: 'andreina',
    title: 'Наталья Андреина',
    at: '@nataly.coach',
    url: 'https://www.youtube.com/embed/Vue7dxJwfJw',
    videoId: 'Vue7dxJwfJw'
  },
  {
    id: 'bekieva',
    title: 'Виктория Бекиева',
    at: '@center_psy_viktoria_bekieva',
    url: 'https://www.youtube.com/embed/jvDr0ZKGzRw',
    videoId: 'jvDr0ZKGzRw'
  },
  {
    id: 'sillakh',
    title: 'Исмайл Силлах',
    at: '@ismaylsillah',
    url: 'https://www.youtube.com/embed/PgWKdggMIn4',
    videoId: 'PgWKdggMIn4'
  },
  {
    id: 'chekalkina',
    title: 'Anna Chekalkina',
    url: 'https://www.youtube.com/embed/yUxUvQaXKD0',
    videoId: 'yUxUvQaXKD0'
  },

  {
    id: 'belan',
    title: 'Анастасия Белан',
    url: 'https://www.youtube.com/embed/V_rv0ao9oU0',
    videoId: 'V_rv0ao9oU0'
  },
  {
    id: 'borisenko',
    title: 'Евгения Борисенко',
    url: 'https://www.youtube.com/embed/j7sXxcV8GPc',
    videoId: 'j7sXxcV8GPc'
  },
  {
    id: 'teiban',
    title: 'Екатерина Тейбан',
    url: 'https://www.youtube.com/embed/NDA-FLsCDE0',
    videoId: 'NDA-FLsCDE0'
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
            {testimonials.map(testimonial => {
              return (
                <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12">
                  <div
                    className={`product-item-2 product-item-3 ${styles.card}`}
                  >
                    <div>
                      <h3 className="text-body-lead color-gray-900">
                        {testimonial.title}
                      </h3>

                      <div className="mt-10">
                        <div className="box-prices">
                          <span>{testimonial.at}</span>
                        </div>
                      </div>
                    </div>

                    <ModalVideo
                      iconSize="3em"
                      channel="youtube"
                      videoId={testimonial.videoId}
                    />
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
