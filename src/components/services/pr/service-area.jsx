import Link from 'next/link';
import React from 'react';

const services_items = [
  {
    id: 'sport',
    duration: '.3s',
    delay: '.5s',
    img: '/assets/img/service/service4.5.png',
    title: 'Спорт',
    border_effect: '',
    text_1:
      'At Collax we specialize in designing, building, shipping and scaling beautiful, usable products with blazing-fast',
    home_4: true,
    service_p: true
  },
  {
    id: 'fashion',
    duration: '.5s',
    delay: '.7s',
    img: '/assets/img/service/service4.6.png',
    title: 'Fashion',
    border_effect: 'sv-border-effect-1',
    text_1:
      'At Collax we specialize in designing, building, shipping and scaling beautiful, usable products with blazing-fast',
    home_4: true,
    service_p: true
  },
  {
    id: 'personal-brand',
    duration: '.7s',
    delay: '.9s',
    img: '/assets/img/service/service4.2.png',
    title: 'Личный бренд',
    border_effect: 'sv-border-effect-2',
    text_1:
      'At Collax we specialize in designing, building, shipping and scaling beautiful, usable products with blazing-fast',
    home_4: true,
    service_p: true
  },
  {
    id: 'psychology',
    duration: '.9s',
    delay: '1s',
    img: '/assets/img/service/service4.3.png',
    title: 'Психология',
    border_effect: 'sv-border-effect-3',
    text_1:
      'At Collax we specialize in designing, building, shipping and scaling beautiful, usable products with blazing-fast',
    home_4: true,
    service_p: true
  }
];

const ServiceArea = () => {
  return (
    <>
      <div className="tp-service-area pt-110 pb-130">
        <div className="container">
          <div className="row">
            {services_items.map((service, i) => {
              const { delay, duration, id, img, title, border_effect } =
                service;
              return (
                <div
                  key={id}
                  className="col-xl-3 col-lg-4 col-md-6 wow tpfadeUp"
                  data-wow-duration={duration}
                  data-wow-delay={delay}
                >
                  <div className={`tp-sv-border-effect ${border_effect}`}>
                    <div
                      className={`tp-service-item-four sv-1-border 
                  ${i + 1 === 8 ? 'sv-color-1' : `sv-color-${i + 1}`} mb-30`}
                    >
                      <div className="tp-service-item-four__img  mb-40">
                        <img src={img} alt="" />
                      </div>
                      <div className="tp-service-item-four__title">
                        <h3 className="tp-sv-sm-title">
                          <Link legacyBehavior href={`/pr/${id}`}>
                            <a>{title}</a>
                          </Link>
                        </h3>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default ServiceArea;
