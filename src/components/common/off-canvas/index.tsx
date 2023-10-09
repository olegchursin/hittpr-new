import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { menuData } from '../../../layout/headers/menu-data';
import { I18N_NS } from '../../../utils/i18n-utils';
import { useTranslation } from 'next-i18next';
import { useRouter } from 'next/router';

const sidebar_contents = {
  title: (
    <>
      Продвижение бизнеса в <br /> новых условиях.
    </>
  ),
  inst_imgs: [
    '/assets/img/offcanvas/insta-1.jpg',
    '/assets/img/offcanvas/insta-2.jpg',
    '/assets/img/offcanvas/insta-4.jpg',
    '/assets/img/offcanvas/insta-4.jpg'
  ]
};
const { inst_imgs, title } = sidebar_contents;

const Sidebar = ({ isOpen, setIsOpen }) => {
  const router = useRouter();
  const { t, i18n } = useTranslation(I18N_NS);
  const onToggleLanguageClick = (newLocale: string) => {
    clientSideLanguageChange(newLocale);
    const { pathname, asPath, query } = router;
    router.push({ pathname, query }, asPath, { locale: newLocale });
  };
  const clientSideLanguageChange = (newLocale: string) => {
    i18n.changeLanguage(newLocale);
  };
  const changeTo = router.locale === 'ru' ? 'en' : 'ru';
  const [navTitle, setNavTitle] = useState('');
  const [data, setData] = useState([]);

  useEffect(() => {
    setData(menuData);
  }, []);

  const openMobileMenu = menu => {
    if (navTitle === menu) {
      setNavTitle('');
    } else {
      setNavTitle(menu);
    }
  };
  return (
    <>
      <div className="tp-offcanvas-area">
        <div className={`tpoffcanvas ${isOpen ? 'opened' : ''}`}>
          <div className="tpoffcanvas__logo">
            <Link href="/">
              <a>
                <img src="/assets/img/logo/hittpr-logo-white.png" alt="" />
              </a>
            </Link>
          </div>
          <div
            className="tpoffcanvas__close-btn"
            onClick={() => setIsOpen(false)}
          >
            <button className="close-btn">
              <i className="fal fa-times-hexagon"></i>
            </button>
          </div>
          <div className="tpoffcanvas__content d-none d-sm-block">
            <p>{title}</p>
          </div>
          <div className="mobile-menu d-lg-none">
            <div className="mm-menu">
              <ul>
                {data?.map((menu, i) =>
                  menu.render ? (
                    <li
                      key={i}
                      className={
                        !menu.has_dropdown
                          ? ''
                          : navTitle === menu?.title
                          ? 'has-droupdown active'
                          : 'has-droupdown'
                      }
                    >
                      {menu.has_dropdown && (
                        <button onClick={() => openMobileMenu(menu.title)}>
                          {t(menu.title)}{' '}
                        </button>
                      )}
                      <ul
                        className={
                          navTitle === menu?.title
                            ? 'sub-menu active'
                            : 'sub-menu'
                        }
                      >
                        {menu?.sub_menus?.map((sub, i) => (
                          <li key={i}>
                            <Link href={`${sub.link}`}>{t(sub.title)}</Link>
                          </li>
                        ))}
                      </ul>
                      {!menu.has_dropdown && (
                        <Link href={menu.link}>{t(menu.title)}</Link>
                      )}
                    </li>
                  ) : null
                )}
              </ul>
            </div>
          </div>
          <div className="tpoffcanvas__contact mt-40">
            <span>{t('common.contactUs')}</span>
            <ul>
              <li>
                <i className="fas fa-star"></i>{' '}
                <a
                  href="mailto:pr@hittpr.com?subject = Hitt PR Inquiry"
                  rel="noreferrer"
                  target="_blank"
                >
                  pr@hittpr.com
                </a>
              </li>
              <li>
                <i className="fas fa-star"></i>
                <a href="https://t.me/hitt_pr_nyc">hitt_pr</a>
              </li>
            </ul>
          </div>

          {false ? (
            <div className="tpoffcanvas__instagram d-none d-sm-block">
              <p>Check Instagram POst</p>
              <div className="tp-insta">
                <div className="row">
                  {inst_imgs.map((img, i) => (
                    <div key={i} className="col-3 col-sm-3">
                      <a href="#">
                        <img src={img} alt="" />
                      </a>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ) : null}

          <div className="d-flex align-items-center justify-content-between">
            <div>{t('common.language')}:</div>
            <button onClick={() => onToggleLanguageClick(changeTo)}>
              <span className="language_switch">
                <i className="far fa-language"></i>{' '}
                {changeTo === 'ru' ? 'РУ' : 'EN'}
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* overlay start */}
      <div
        onClick={() => setIsOpen(false)}
        className={`body-overlay ${isOpen ? 'apply' : ''}`}
      ></div>
      {/* overlay end */}
    </>
  );
};

export default Sidebar;
