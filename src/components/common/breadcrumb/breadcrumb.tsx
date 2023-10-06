import Link from 'next/link';
import { I18N_NS } from '../../../utils/i18n-utils';
import { useTranslation } from 'react-i18next';
import { useEffect, useState } from 'react';

const Breadcrumb = ({ title, back_home = false, renderCTA = true }) => {
  const { t } = useTranslation(I18N_NS);
  const [labels, setLabels] = useState({} as any);
  useEffect(() => {
    setLabels({ contactUs: 'common.contactUs', backHome: 'common.backHome' });
  }, []);

  return (
    <section
      className="breadcrumb__area breadcrumb__pt-310 include-bg p-relative"
      style={{ background: '#f7f8fd' }}
    >
      <div className="container">
        <div className="row">
          <div className="col-xxl-12">
            <div className="breadcrumb__content p-relative z-index-1">
              <h3 className="breadcrumb__title">{title}</h3>
              {!back_home && renderCTA && (
                <Link href="/contact">
                  <a className="tp-btn-white-border">
                    {t(labels.contactUs)} <i className="far fa-arrow-right"></i>
                  </a>
                </Link>
              )}
              {back_home && (
                <Link href="/">
                  <a className="tp-btn-white-border">
                    {t(labels.backHome)} <i className="far fa-arrow-right"></i>
                  </a>
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Breadcrumb;
