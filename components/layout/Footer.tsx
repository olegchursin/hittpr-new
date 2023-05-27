import Link from 'next/link';
import { FaTelegram } from 'react-icons/fa';

import { navLinks } from '../../utils/routes';
import Copyright from '../elements/Copyright';
import EmailLink from '../elements/EmailLink';
import SocialIcons from '../elements/SocialIcons';

const ICON_SIZE = '1.5rem';

const renderSocialIcons = false;

const Footer = () => {
  return (
    <footer className="footer mt-50">
      <div className="container">
        <div className="footer-top"></div>

        <div className="row">
          <div className="col-lg-3 width-20 mb-30">
            <Link href="/">
              <img
                style={{ width: '150px' }}
                alt="Agon"
                src="/assets/imgs/hittpr/hittpr-logo.png"
              />
            </Link>
          </div>

          <div className="col-lg-3 width-20 mb-30"></div>

          <div className="col-lg-3 width-20 mb-30">
            <h4 className="text-heading-5">Контакты</h4>
            <div className="mt-20 text-body-text color-gray-600">
              <EmailLink hasIcon={true} iconSize={ICON_SIZE} />
              <div className="mt-20">
                <a href="https://t.me/hitt_pr_nyc">
                  <span className="mr-20">
                    <FaTelegram size={ICON_SIZE} />
                  </span>
                  <span>hitt_pr_nyc</span>
                </a>
              </div>
            </div>
          </div>

          <div className="col-lg-3 width-20 mb-30">
            <h4 className="text-heading-5">Компания</h4>
            <ul className="menu-footer mt-20">
              {navLinks.map(link => {
                return (
                  <li key={link.id}>
                    <Link href={link.href}>
                      <a>{link.label}</a>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>

          <div className="col-lg-3 width-16"></div>
        </div>

        <div className="footer-bottom mt-20">
          <div className="row">
            <div className="col-md-6">
              <span className="color-gray-400 text-body-lead">
                <Copyright />
              </span>
            </div>

            {renderSocialIcons ? <SocialIcons /> : null}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
