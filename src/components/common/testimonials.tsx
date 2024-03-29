import { useEffect, useState } from 'react';
import Link from 'next/link';
import { I18N_NS } from '../../utils/i18n-utils';
import { useTranslation } from 'react-i18next';

const testimonial_contents = {
  subtitle: 'common.testimonials',
  title: 'common.whyUs',
  btn_text: 'common.testimonialsAll',
  testimonial_data: [
    {
      id: 1,
      brand: '/assets/img/testimonial/testi-brands-1.png',
      ratings: [1, 2, 3, 4, 5],
      desc: 'testimonials.andreina.description',
      user: '/assets/img/hittpr/persona-female.png',
      name: 'testimonials.andreina.name',
      title: '@nataly.coach',
      videoId: 'Vue7dxJwfJw',
      delay: '.3s'
    },
    {
      id: 2,
      brand: '/assets/img/testimonial/testi-brands-2.png',
      ratings: [1, 2, 3, 4, 5],
      desc: 'testimonials.bekieva.description',
      user: '/assets/img/hittpr/persona-female.png',
      name: 'testimonials.bekieva.name',
      title: '@center_psy_viktoria_bekieva',
      videoId: 'jvDr0ZKGzRw',
      delay: '.5s'
    },
    {
      id: 3,
      brand: '/assets/img/testimonial/testi-brands-2.png',
      ratings: [1, 2, 3, 4, 5],
      desc: 'testimonials.sillah.description',
      user: '/assets/img/hittpr/persona-male.png',
      name: 'testimonials.sillah.name',
      title: '@ismaylsillah',
      videoId: 'PgWKdggMIn4',
      delay: '.7s'
    }
  ]
};

const Testimonials = () => {
  const { t } = useTranslation(I18N_NS);
  const [info, setInfo] = useState({} as any);
  useEffect(() => {
    setInfo(testimonial_contents);
  }, []);

  return (
    <div className={`tp-testimonial-area pt-130 pb-130 p-relative`}>
      <div className="container">
        <div className="row">
          <div className="col-xl-12">
            <div className="tp-testi-wrapper d-flex pb-70 justify-content-between align-items-end">
              <div className="tp-testimonial-title-box ">
                <h5 className="tp-subtitle">{t(info.subtitle)}</h5>
                <h2 className="tp-title-sm">{t(info.title)}</h2>
              </div>
              <div className="tp-testi-button-right-side">
                <Link legacyBehavior href="/testimonials">
                  <a className={'tp-btn'}>{t(info.btn_text)}</a>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="d-flex align-items-center gap-4 tp-testi-wrapper">
          {info?.testimonial_data?.map(item => {
            const { id, desc, user, name, ratings, title } = item;
            return (
              <div key={id} className="tp-testimonial-item-four">
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
                  <p>{t(desc)}</p>
                </div>
                <div className="tp-testimonial-item-four__client d-flex align-items-center">
                  <div className="mr-20">
                    <img src={user} alt="" style={{ width: '60px' }} />
                  </div>
                  <div className="tp-testimonial-item-four__position">
                    <h4 className="m-0">{t(name)}</h4>
                    <span>{t(title)}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
