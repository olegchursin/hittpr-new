import Link from 'next/link';
import { I18N_NS } from '../../utils/i18n-utils';
import { useTranslation } from 'react-i18next';

const SingleServiceTwo = ({ service, border = '' }) => {
  const { t } = useTranslation(I18N_NS);

  return (
    <div className="col-lg-6 col-md-12 col-12">
      <div
        className="tp-sv-box wow tpfadeUp"
        data-wow-duration={service.duration}
        data-wow-delay={service.delay}
      >
        <div className={`tp-service-item ${border ? border : ''} d-flex mb-30`}>
          <div className="tp-sv-content pl-60">
            <h3 className="tp-sv-title mb-35">
              <Link href={service.href}>{t(service.title)}</Link>
            </h3>
            <p className="mb-30">{t(service.text_1)}</p>
            <p>{t(service.text_2)}</p>
            <div className="tp-sv-link mt-35">
              <Link href={service.href}>
                <i className="far fa-arrow-right"></i> {t('common.learnMore')}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleServiceTwo;
