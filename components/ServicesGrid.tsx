import { FC } from 'react';
import Link from 'next/link';
import {
  PR_FASHION_ROUTE,
  PR_PERSONAL_BRAND_ROUTE,
  PR_PSYCHOLOGY_ROUTE,
  PR_SPORT_ROUTE
} from '../util/routes';

const services = [
  {
    id: 'sport-pr',
    title: 'Спорт PR',
    description: 'Все, что нужно знать о PR в профессиональном спорте',
    featured: true,
    bulletPoints: [
      {
        id: 'sport-brand',
        text: 'Спортивный бренд'
      },
      {
        id: 'sport-personal-brand',
        text: 'PR спортсмена'
      },
      {
        id: 'sport-club-brand',
        text: 'PR спортивного клуба'
      }
    ],
    cta: {
      label: 'Подробнее',
      url: PR_SPORT_ROUTE
    }
  },
  {
    id: 'fashion',
    title: 'Fashion',
    description: 'Как работает PR в Fashion индустрии',
    featured: false,
    bulletPoints: null,
    cta: {
      label: 'Подробнее',
      url: PR_FASHION_ROUTE
    }
  },
  {
    id: 'personal-brand',
    title: 'Личный бренд',
    description: 'Как позиционировать себя в медиа-пространстве',
    featured: false,
    bulletPoints: null,
    cta: {
      label: 'Подробнее',
      url: PR_PERSONAL_BRAND_ROUTE
    }
  },
  {
    id: 'psychology',
    title: 'Психология',
    description: 'Современная психология в работе индустрии PR',
    featured: false,
    bulletPoints: null,
    cta: {
      label: 'Подробнее',
      url: PR_PSYCHOLOGY_ROUTE
    }
  }
];

const getBulletPoints = list => {
  return (
    <ul className="list-package-feature">
      {list.map(item => {
        return <li key={item.id}>{item.text}</li>;
      })}
    </ul>
  );
};

const ServicesGrid: FC = () => {
  return (
    <div className="block-pricing block-pricing-2 mt-40">
      <div className="row">
        <div className="col-xl-12 col-lg-12">
          <div className="row">
            {services.map(service => {
              const bulletPoints = !!service.bulletPoints
                ? getBulletPoints(service.bulletPoints)
                : null;

              return (
                <div
                  key={service.id}
                  className="col-xl-3 col-lg-6 col-md-6 wow animate__animated animate__fadeIn"
                  data-wow-delay=".1s"
                >
                  <div
                    className={`box-pricing-item hover-up 
                    ${service.featured ? 'active' : ''}`}
                  >
                    <div className="line-bd-bottom">
                      <h4 className="text-heading-5 mb-15">{service.title}</h4>
                      <p className="text-body-small color-gray-400">
                        {service.description}
                      </p>
                    </div>

                    {bulletPoints}

                    <div>
                      <Link href={service.cta.url}>
                        <div className="btn btn-black text-body-lead icon-arrow-right-white">
                          {service.cta.label}
                        </div>
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesGrid;
