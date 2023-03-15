import Link from 'next/link';
import { NavLink, navLinks } from '../../utils/routes';

const Header = ({ handleOpen, headerStyle }) => {
  const childrenLinks = (links: NavLink[]) => {
    return (
      <ul className="sub-menu">
        {links.map(link => {
          return (
            <li key={link.id}>
              <Link href={link.href}>{link.label}</Link>
            </li>
          );
        })}
      </ul>
    );
  };

  return (
    <header className="header sticky-bar stick">
      <div className="container">
        <div className="main-header">
          <div className="header-left">
            <div className="header-logo" style={{ width: '170px' }}>
              <Link href="/">
                <a className="d-flex">
                  {headerStyle ? (
                    <img
                      alt="Hittpr Logo"
                      src="/assets/imgs/template/logo-white.svg"
                    />
                  ) : (
                    <img
                      alt="Hittpr Logo"
                      src="/assets/imgs/hittpr/hittpr-logo.png"
                    />
                  )}
                </a>
              </Link>
            </div>

            <div className="header-nav">
              <nav className="nav-main-menu d-none d-md-block">
                <ul className="main-menu">
                  {navLinks.map(link => {
                    return (
                      <li
                        key={link.id}
                        className={link.children ? 'has-children' : ''}
                      >
                        <Link href={link.href}>
                          <a>{link.label}</a>
                        </Link>
                        {link.children ? childrenLinks(link.children) : null}
                      </li>
                    );
                  })}
                </ul>
              </nav>
              <div
                className="burger-icon burger-icon-white"
                onClick={handleOpen}
              >
                <span className="burger-icon-top" />
                <span className="burger-icon-mid" />
                <span className="burger-icon-bottom" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
