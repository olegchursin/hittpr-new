import Link from 'next/link';
import PerfectScrollbar from 'react-perfect-scrollbar';
import 'react-perfect-scrollbar/dist/css/styles.css';
import { navLinks } from '../../util/routes';
import Copyright from '../elements/Copyright';

const Sidebar = ({ openClass }) => {
  return (
    <div
      style={{ zIndex: 9999 }}
      className={`mobile-header-active mobile-header-wrapper-style perfect-scrollbar ${openClass}`}
    >
      <PerfectScrollbar className="mobile-header-wrapper-inner">
        <div className="mobile-header-top">
          <img
            style={{ width: '94px' }}
            alt="Hittpr Logo"
            src="/assets/imgs/hittpr/hittpr-logo.png"
          />
        </div>
        <div className="mobile-header-content-area">
          <div className="perfect-scroll">
            <div className="mobile-menu-wrap mobile-header-border">
              <nav>
                <ul className="mobile-menu font-heading">
                  {navLinks.map(link => {
                    return (
                      <li key={link.id}>
                        <Link href={link.href}>
                          <a className="active">{link.label}</a>
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </nav>
            </div>
            <hr />
            <div className="site-copyright color-gray-400">
              <Copyright />
            </div>
          </div>
        </div>
      </PerfectScrollbar>
    </div>
  );
};

export default Sidebar;
