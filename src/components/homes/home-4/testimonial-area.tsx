import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import Link from 'next/link';

const testimonial_contents = {
  subtitle: 'Отзывы',
  title: 'Почему клиенты ',
  highlight_text: 'выбирают нас',
  btn_text: 'Смотреть все отзывы',
  testimonial_data: [
    {
      id: 1,
      brand: '/assets/img/testimonial/testi-brands-1.png',
      ratings: [1, 2, 3, 4, 5],
      desc: 'Восхищена профессионализмом и креативностью, которые помогли моей компании достичь новых высот в области репутации.',
      user: '/assets/img/hittpr/persona-female.png',
      name: 'Наталья Андреина',
      title: '@nataly.coach',
      videoId: 'Vue7dxJwfJw',
      delay: '.3s'
    },
    {
      id: 2,
      brand: '/assets/img/testimonial/testi-brands-2.png',
      ratings: [1, 2, 3, 4, 5],
      desc: 'Отличный подход и эффективная коммуникация сделали сотрудничество невероятно приятным и успешным.',
      user: '/assets/img/hittpr/persona-female.png',
      name: 'Виктория Бекиева',
      title: '@center_psy_viktoria_bekieva',
      videoId: 'jvDr0ZKGzRw',
      delay: '.5s'
    },
    {
      id: 3,
      brand: '/assets/img/testimonial/testi-brands-2.png',
      ratings: [1, 2, 3, 4, 5],
      desc: 'Работа была безупречной: от индивидуального подхода до высококачественного контента и медийной экспозиции.',
      user: '/assets/img/hittpr/persona-male.png',
      name: 'Исмайл Силлах',
      title: '@ismaylsillah',
      videoId: 'PgWKdggMIn4',
      delay: '.7s'
    },
    {
      id: 4,
      brand: '/assets/img/testimonial/testi-brands-2.png',
      ratings: [1, 2, 3, 4, 5],
      desc: 'HITTPR действительно знает, как привлечь внимание к бренду и создать положительное впечатление.',
      user: '/assets/img/hittpr/persona-female.png',
      name: 'Anna Chekalkina',
      videoId: 'yUxUvQaXKD0',
      delay: '.9s'
    }
  ]
};

const { btn_text, highlight_text, subtitle, testimonial_data, title } =
  testimonial_contents;

interface TestimonialAreaProps {
  home_6?: boolean;
  style_2?: boolean;
}

const TestimonialArea = ({ home_6, style_2 = false }: TestimonialAreaProps) => {
  const [sliderLoop, setSliderLoop] = React.useState(false);
  React.useEffect(() => setSliderLoop(true), []);
  return (
    <div
      className={`tp-testimonial-area ${
        style_2 ? 'pb-130' : 'pt-130 pb-130'
      } p-relative`}
    >
      <div
        className={`${
          home_6 ? 'bs-testi-shape-1' : 'ce-testi-shape'
        } d-none d-lg-block`}
      ></div>
      <div className="container">
        <div className="row">
          <div className="col-xl-12">
            <div className="tp-testi-wrapper d-flex pb-70 justify-content-between align-items-end">
              <div className="tp-testimonial-title-box ">
                <h5 className="tp-subtitle">{subtitle}</h5>
                <h2 className="tp-title-sm">
                  {title}
                  <span className="tp-section-highlight">
                    {highlight_text}
                    <svg
                      width="212"
                      height="11"
                      viewBox="0 0 212 11"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M0 0L212 11H0V0Z" fill="#FFDC60" />
                    </svg>
                  </span>
                </h2>
              </div>
              <div className="tp-testi-button-right-side">
                <Link href="/testimonials">
                  <span
                    className={`${
                      home_6 || style_2 ? 'tp-btn-yellow' : 'tp-btn'
                    }`}
                  >
                    {btn_text}
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="tp-testimonial-slider-section-four">
          <Swiper
            loop={sliderLoop}
            slidesPerView={3}
            spaceBetween={20}
            centeredSlides={true}
            centeredSlidesBounds={true}
            className="swiper-container testi-slider-active-five"
            breakpoints={{
              1200: {
                slidesPerView: 3
              },
              992: {
                slidesPerView: 3
              },
              768: {
                slidesPerView: 1
              },
              576: {
                slidesPerView: 1
              },
              0: {
                slidesPerView: 1
              }
            }}
          >
            {testimonial_data.map(item => {
              const { id, desc, user, name, ratings, title } = item;
              return (
                <SwiperSlide key={id}>
                  <div className="tp-testimonial-item-four">
                    <div
                      className="tp-testimonial-item-four__meta d-flex justify-content-between 
                    align-items-center mb-60"
                    >
                      <div className="tp-testimonial-item-four__rating">
                        {ratings.map(r => (
                          <span key={r}>
                            <i className="fas fa-star"></i>
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="tp-testi-paragraph pb-40">
                      <p>{desc}</p>
                    </div>
                    <div className="tp-testimonial-item-four__client d-flex align-items-center">
                      <div className="mr-20">
                        <img src={user} alt="" style={{ width: '60px' }} />
                      </div>
                      <div className="tp-testimonial-item-four__position">
                        <h4 className="m-0">{name}</h4>
                        <span>{title}</span>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default TestimonialArea;
