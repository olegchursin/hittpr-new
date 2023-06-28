import React from 'react';
import VideoModal from '../common/modals/modal-video';
import useModal from '../../hooks/use-modal';

const testimonial_data = [
  {
    brand: '/assets/img/testimonial/testi-brands-1.png',
    ratings: [1, 2, 3, 4, 5],
    desc: 'Восхищена профессионализмом и креативностью, которые помогли моей компании достичь новых высот в области репутации и видимости на рынке.',
    user: '/assets/img/hittpr/persona-female.png',
    name: 'Наталья Андреина',
    title: '@nataly.coach',
    videoId: 'Vue7dxJwfJw',
    delay: '.3s'
  },
  {
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
    brand: '/assets/img/testimonial/testi-brands-2.png',
    ratings: [1, 2, 3, 4, 5],
    desc: 'HITTPR действительно знает, как привлечь внимание к бренду и создать положительное впечатление.',
    user: '/assets/img/hittpr/persona-female.png',
    name: 'Anna Chekalkina',
    videoId: 'yUxUvQaXKD0',
    delay: '.9s'
  },
  {
    brand: '/assets/img/testimonial/testi-brands-2.png',
    ratings: [1, 2, 3, 4, 5],
    desc: 'Не только HITTPR выполнили все свои обязательства в срок, но и превзошло наши ожидания, предоставив нам идеи и стратегии, которые принесли великолепные результаты.',
    user: '/assets/img/hittpr/persona-female.png',
    name: 'Анастасия Белан',
    videoId: 'V_rv0ao9oU0',
    delay: '1s'
  },
  {
    brand: '/assets/img/testimonial/testi-brands-2.png',
    ratings: [1, 2, 3, 4, 5],
    desc: 'Я бы не смогла себе представить более профессионального и компетентного партнера в области пиара, чья работа была бы настолько эффективной и востребованной.',
    user: '/assets/img/hittpr/persona-female.png',
    name: 'Евгения Борисенко',
    videoId: 'j7sXxcV8GPc',
    delay: '1.1s'
  },
  {
    brand: '/assets/img/testimonial/testi-brands-2.png',
    ratings: [1, 2, 3, 4, 5],
    desc: 'Стратегическое планирование, внимание к деталям и способность навигировать в постоянно меняющейся медиа-среде привели к непревзойденной узнаваемости бренда.',
    user: '/assets/img/hittpr/persona-female.png',
    name: 'Екатерина Тейбан',
    videoId: 'NDA-FLsCDE0',
    delay: '1.1s'
  }
];

const TestimonialArea = () => {
  const video_id = 'Vue7dxJwfJw';
  const video_title = 'Видео отзыв';
  const { isVideoOpen, setIsVideoOpen } = useModal();
  const [curretVideoId, setCurrentVideoId] = React.useState(video_id);
  const handleVideoOpen = id => {
    setCurrentVideoId(id);
    setIsVideoOpen(true);
  };
  return (
    <>
      <div className="tp-testimonial-area pt-130 pb-130 p-relative">
        <div className="container">
          <div className="row">
            {testimonial_data.map((item, i) => {
              const { brand, delay, desc, name, ratings, title, user } = item;
              return (
                <div
                  key={i}
                  className="col-xl-12 wow tpfadeUp"
                  data-wow-duration="1s"
                  data-wow-delay={delay}
                >
                  <div className="tp-testimonial-item-four testimonial-html-space mb-30">
                    <div className="tp-testimonial-item-four__meta d-flex justify-content-between align-items-center mb-60">
                      <div className="tp-testimonial-item-four__rating">
                        {ratings.map(r => (
                          <span key={r}>
                            <i className="fas fa-star"></i>
                          </span>
                        ))}
                      </div>
                      <div className="tp-testimonial-item-four__logo">
                        <div className="tp-hero-paly-button-four">
                          <button
                            onClick={() => handleVideoOpen(item.videoId)}
                            className="popup-video"
                          >
                            <i className="far fa-play"></i>{' '}
                            <span>{video_title}</span>
                          </button>
                        </div>
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
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <VideoModal
        isVideoOpen={isVideoOpen}
        setIsVideoOpen={setIsVideoOpen}
        videoId={curretVideoId}
      />
    </>
  );
};

export default TestimonialArea;
