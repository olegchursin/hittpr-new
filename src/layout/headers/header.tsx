import Link from 'next/link';
import MobileMenu from './mobile-menu';
import NavMenus from './nav-menus';
import React from 'react';
import useSticky from '../../hooks/use-sticky';
import { I18N_NS } from '../../utils/i18n-utils';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useRouter } from 'next/router';
import { useTranslation } from 'next-i18next';

import type { GetStaticProps, InferGetStaticPropsType } from 'next';

type Props = {
  // Add custom props here
};

const Header = (_props: InferGetStaticPropsType<typeof getStaticProps>) => {
  const { headerSticky } = useSticky();
  const router = useRouter();
  const { t, i18n } = useTranslation(I18N_NS);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const onToggleLanguageClick = (newLocale: string) => {
    const { pathname, asPath, query } = router;
    router.push({ pathname, query }, asPath, { locale: newLocale });
  };
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const clientSideLanguageChange = (newLocale: string) => {
    i18n.changeLanguage(newLocale);
  };
  const changeTo = router.locale === 'ru' ? 'en' : 'ru';

  return (
    <>
      <header className="d-none d-lg-block">
        <div
          id="header-sticky"
          className={`tp-header-area-two tp-header-bs-area header-space-three
         pt-35 ${headerSticky ? 'header-sticky' : ''}`}
        >
          <div className="container-fluid">
            <div className="row align-items-center">
              <div className="col-xxl-3 col-xl-3 col-lg-3">
                <div className="tp-logo text-start">
                  <Link href={'/'}>
                    <a>
                      <img src="/assets/img/logo/hittpr-logo.png" alt="" />
                    </a>
                  </Link>
                </div>
              </div>
              <div className="col-xxl-5 col-xl-6 col-lg-6">
                <div className="tp-main-menu tp-menu-black tp-bs-menu text-center z-index-1">
                  <nav id="mobile-menu">
                    <NavMenus />
                  </nav>
                </div>
              </div>
              <div className="col-xxl-4 col-xl-3 col-lg-3">
                <div className="tp-header-left d-flex align-items-center justify-content-end">
                  <button onClick={() => onToggleLanguageClick(changeTo)}>
                    <span className="language_switch">
                      <i className="far fa-language"></i>{' '}
                      {changeTo === 'ru' ? 'EN' : 'РУ'}
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <MobileMenu logo={'hittpr-logo.png'} transparent={false} />
    </>
  );
};

export const getStaticProps: GetStaticProps<Props> = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale ?? 'ru', [I18N_NS]))
  }
});

export default Header;
