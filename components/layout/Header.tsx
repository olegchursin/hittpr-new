import Link from 'next/link';
import { ABOUT_US_ROUTE, NavLink, navLinks } from '../../util/routes';
import { useEffect, useState } from 'react';

const Header = ({ handleOpen, headerStyle }) => {
  const [scroll, setScroll] = useState(0);

  useEffect(() => {
    document.addEventListener('scroll', () => {
      const scrollCheck = window.scrollY;
      if (scrollCheck !== scroll) {
        setScroll(scrollCheck);
      }
    });
  });

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
    <>
      <header
        className={
          scroll
            ? `${headerStyle} header sticky-bar stick `
            : `${headerStyle} header sticky-bar`
        }
      >
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
    </>
  );
};

export default Header;
