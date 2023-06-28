import Link from 'next/link';
import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import useFirebase from '../../hooks/use-firebase';
import useSticky from '../../hooks/use-sticky';
import { get_user } from '../../redux/features/auth-slice';
import Languages from './component/languages';
import MobileMenu from './mobile-menu';
import NavMenus from './nav-menus';
import Sidebar from '../../components/common/off-canvas';

const HeaderSix = () => {
  const [sidebarOpen, setSidebarOpen] = React.useState(false);
  // headerSticky
  const { headerSticky } = useSticky();
  // user
  const { user } = useSelector(state => state.auth);
  // firebase logout
  const { logout } = useFirebase();
  // dispatch
  const dispatch = useDispatch();
  // get_user
  useEffect(() => {
    dispatch(get_user());
  }, [dispatch]);
  return (
    <React.Fragment>
      <header className="d-none d-lg-block">
        <div
          id="header-sticky"
          className={`tp-header-area-two tp-header-bg header-transparent header-transparent-two ${
            headerSticky ? 'header-sticky' : ''
          }`}
        >
          <div className="container-fluid">
            <div className="row align-items-center">
              <div className="col-xxl-3 col-xl-3 col-lg-3">
                <div className="tp-logo text-start">
                  <Link href="/">
                    <a>
                      <img src="/assets/img/logo/hittpr-logo.png" alt="" />
                    </a>
                  </Link>
                </div>
              </div>
              <div className="col-xxl-5 col-xl-6 col-lg-6">
                <div className="tp-main-menu tp-menu-black tp-bs-menu tp-bp-menu text-center">
                  <nav id="mobile-menu">
                    {/* nav menus start */}
                    <NavMenus />
                    {/* nav menus end */}
                  </nav>
                </div>
              </div>
              <div className="col-xl-2 col-lg-2">
                <div
                  className="tp-menu-bar text-end"
                  onClick={() => setSidebarOpen(true)}
                >
                  <button>
                    <i className="fal fa-bars"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* <!-- mobile-menu-area --> */}
      <MobileMenu logo={'hittpr-logo.png'} transparent={false} />
      {/* <!-- mobile-menu-area-end --> */}

      <Sidebar isOpen={sidebarOpen} setIsOpen={setSidebarOpen} />
    </React.Fragment>
  );
};

export default HeaderSix;
