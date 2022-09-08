import Link from 'next/link';
import SocialIcons from '../elements/SocialIcons';
import { navLinks } from '../../util/routes';
import Copyright from '../elements/Copyright';

const renderSocialIcons = false;

const Footer = () => {
  return (
    <>
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
                154 Grand Street
              </div>
              <div className=" text-body-text color-gray-600 mb-20">
                SoHo, New York 10013 USA
              </div>
              <div className="text-body-text color-gray-600">
                privet@hittpr.com
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
    </>
  );
};

export default Footer;
