import Link from 'next/link';
import React, { useState } from 'react';
import menu_data from '../../../layout/headers/menu-data';

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
  const [navTitle, setNavTitle] = useState('');

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
                {menu_data.map((menu, i) =>
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
                          {menu.title}{' '}
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
                            <Link href={`${sub.link}`}>{sub.title}</Link>
                          </li>
                        ))}
                      </ul>
                      {!menu.has_dropdown && (
                        <Link href={menu.link}>{menu.title}</Link>
                      )}
                    </li>
                  ) : null
                )}
              </ul>
            </div>
          </div>
          <div className="tpoffcanvas__contact mt-40">
            <span>Свяжитесьс с нами</span>
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
                <a href="https://t.me/hitt_pr_nyc">hitt_pr_nyc</a>
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
