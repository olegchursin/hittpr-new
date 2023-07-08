import Link from 'next/link';
import React from 'react';
import { services_data } from '../../../data';
import SingleServiceTwo from '../../common/single-service-2';

const services_contents = {
  shape_img: '/assets/img/service/service-shape.png',
  subtitle: 'PR',
  title: 'Маркетинг и PR',
  btn_text: 'Подробнее'
};

const { shape_img, title, subtitle, btn_text } = services_contents;
const services_items = [
  {
    id: 1,
    duration: '.5s',
    delay: '.8s',
    img: '/assets/img/service/service-1.png',
    title: 'Личный Бренд',
    text_1: 'Как позиционировать себя в медиа-пространстве',
    href: '/pr/personal-brand',
    home: true,
    service_p_2: true
  },
  {
    id: 2,
    duration: '.7s',
    delay: '1s',
    img: '/assets/img/service/service-icon-9.1.png',
    title: 'Спорт PR',
    text_1: 'Все о PR в профессиональном спорте',
    href: '/pr/sport',
    home: true,
    service_p_2: true
  },
  {
    id: 3,
    duration: '.9s',
    delay: '1.2s',
    img: '/assets/img/service/service-3.png',
    title: 'Fashion',
    text_1: 'Как работает маркетинг PR в Fashion индустрии',
    href: '/pr/fashion',
    home: true,
    service_p_2: true
  }
];

const ServicesArea = () => {
  return (
    <div className="tp-service-area pt-190 pb-100 grey-bg p-relative fix">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-md-12 col-12">
            <div
              className="tp-service-section-box mb-30 wow tpfadeUp"
              data-wow-duration=".3s"
              data-wow-delay=".6s"
            >
              <h5 className="tp-subtitle pb-10">{subtitle}</h5>
              <h2 className="tp-title">{title}</h2>
              <Link href="/pr">
                <a className="tp-btn">{btn_text}</a>
              </Link>
            </div>
          </div>
          {services_items.map((service, i) => (
            <SingleServiceTwo key={i} service={service} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServicesArea;
