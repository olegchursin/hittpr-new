import Link from 'next/link';
import { useEffect, useState } from 'react';
import SingleServiceTwo from '../../common/single-service-2';
import { I18N_NS } from '../../../utils/i18n-utils';
import { useTranslation } from 'react-i18next';

const services_contents = {
  shape_img: '/assets/img/service/service-shape.png',
  subtitle: 'PR',
  title: 'PR',
  btn_text: 'common.learnMore'
};

const services_data = [
  {
    id: 1,
    duration: '.5s',
    delay: '.8s',
    img: '/assets/img/service/service-1.png',
    title: 'common.personalBrand',
    text_1: 'services.mediaPositioing',
    href: '/pr/personal-brand',
    home: true,
    service_p_2: true
  },
  {
    id: 2,
    duration: '.7s',
    delay: '1s',
    img: '/assets/img/service/service-icon-9.1.png',
    title: 'common.prSport',
    text_1: 'services.proSport',
    href: '/pr/sport',
    home: true,
    service_p_2: true
  },
  {
    id: 3,
    duration: '.9s',
    delay: '1.2s',
    img: '/assets/img/service/service-3.png',
    title: 'common.fashion',
    text_1: 'services.fashionPr',
    href: '/pr/fashion',
    home: true,
    service_p_2: true
  }
];

const ServicesArea = () => {
  const { t } = useTranslation(I18N_NS);
  const [services_items, setServicesItems] = useState([]);
  const [meta, setMeta] = useState({} as any);
  useEffect(() => {
    setServicesItems(services_data);
    setMeta(services_contents);
  }, []);

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
              <h5 className="tp-subtitle pb-10">{t(meta.subtitle)}</h5>
              <h2 className="tp-title">{t(meta.title)}</h2>
              <Link href="/pr">
                <span className="tp-btn">{t(meta.btn_text)}</span>
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
