import Link from 'next/link';
import React from 'react';
import useSticky from '../../hooks/use-sticky';
import Languages from './component/languages';
import MobileMenu from './mobile-menu';
import NavMenus from './nav-menus';

const HeaderFive = () => {
  const { headerSticky } = useSticky();
  return (
    <React.Fragment>
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
                  <Link legacyBehavior href={'/'}>
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
                <div className="tp-header-left d-flex align-items-center justify-content-end ">
                  <ul className="d-none d-xxl-block">
                    <li>
                      <Link legacyBehavior href="/login">
                        <a className="#">
                          <i className="far fa-user fa-user"></i> Login
                        </a>
                      </Link>
                    </li>
                    <li>
                      <a className="#" href="#">
                        EN<i className="fal fa-arrow-down arrow-down"></i>
                      </a>
                      <Languages />
                    </li>
                  </ul>
                  <div className="tp-header-yellow-button">
                    <Link legacyBehavior href="/contact">
                      <a className="tp-btn-sky">How it Works</a>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* <!-- mobile-menu-area --> */}
      <MobileMenu logo={'hittpr-logo.png'} transparent={false} />
      {/* <!-- mobile-menu-area-end --> */}
    </React.Fragment>
  );
};

export default HeaderFive;
