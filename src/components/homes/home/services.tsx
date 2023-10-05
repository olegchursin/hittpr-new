import Link from 'next/link';
import { DEFAULT_LOCALE, I18N_NS } from '../../../utils/i18n-utils';
import { getServicesItems } from '../../../data/service-data';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

import type { GetStaticProps, InferGetStaticPropsType } from 'next';

type Props = {
  // Add custom props here
};

export default function index(
  _props: InferGetStaticPropsType<typeof getStaticProps>
) {
  const { t } = useTranslation(I18N_NS);
  const [services_items, setServicesItems] = useState([]);
  const [meta, setMeta] = useState({} as any);
  useEffect(() => {
    const meta = {
      title: t('common.infoProducts'),
      subtitle: t('common.workAreas')
    };
    const items = getServicesItems(t);
    setMeta(meta);
    setServicesItems(items);
  }, []);

  return (
    <>
      <div className="tp-service-area-two p-relative black-bg pt-125 pb-145 z-index-1">
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <div className="tp-service-section-box-two text-center">
                <h5 className="tp-subtitle pb-10">{meta.subtitle}</h5>
                <h2 className="tp-title tp-white-text pb-35">{meta.title}</h2>
              </div>
            </div>
          </div>
          <div className="row gx-12">
            {services_items.map(service => {
              const { delay, duration, id, href, text_1, title, color } =
                service;
              return (
                <div
                  key={id}
                  className="col-xl-6  col-lg-6 col-md-6 wow tpfadeUp"
                  data-wow-duration={duration}
                  data-wow-delay={delay}
                >
                  <div className={`tp-sv-item-two ${color} mb-30`}>
                    <div className="tp-sv-content-tow mt-20">
                      <h3 className="tp-sv-product-design">{title}</h3>
                      <p>{text_1}</p>
                    </div>
                    <div className="tp-sv-icon-two">
                      <Link href={`/training/${href}`}>
                        <a>
                          <i className="fas fa-long-arrow-up"></i>
                        </a>
                      </Link>
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
}

export const getStaticProps: GetStaticProps<Props> = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale ?? DEFAULT_LOCALE, [I18N_NS]))
  }
});
