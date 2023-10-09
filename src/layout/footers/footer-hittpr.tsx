import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import SocialLinks from '../social-links';
import CopyrightArea from './component/copyright-area';
import { useTranslation } from 'react-i18next';
import { I18N_NS } from '../../utils/i18n-utils';

const footer_contents = {
  logo: '/assets/img/logo/hittpr-logo-white.png',
  widget_desc: 'common.connect',
  footer_widgets: [
    {
      w_class: 'd-flex justify-content-lg-center',
      title: 'common.company',
      widget_lists: [
        { label: 'common.aboutUs', href: '/about' },
        { label: 'common.pr', href: '/pr' },
        { label: 'common.prSMI', href: '/pr-smi' },
        { label: 'common.training', href: '/training' },
        { label: 'common.contacts', href: '/contact' }
      ]
    },
    {
      padd: 'pl-20',
      title: 'common.contacts',
      widget_lists: [
        { label: 'Email: pr@hittpr.com', href: 'mailto:pr@hittpr.com' },
        {
          label: 'Telegram: hitt_pr',
          href: 'https://t.me/hitt_pr_nyc/'
        }
      ]
    }
  ],
  subscribe_title: 'Subscribe Newslatter',
  subscribe_text:
    'Exerci tation ullamcorper suscipit lobortis nisl aliquip ex ea commodo',
  copy_right_text: <>© {new Date().getFullYear()} Hittpr New York</>,
  conditions: []
};

const FooterHittpr = ({ home_four = false }) => {
  const { t } = useTranslation(I18N_NS);
  const [contents, setContents] = useState({} as any);
  useEffect(() => {
    setContents(footer_contents);
  }, []);

  const {
    conditions,
    copy_right_text,
    footer_widgets,
    logo,
    widget_desc,
    subscribe_text,
    subscribe_title
  } = contents;

  return (
    <React.Fragment>
      <footer>
        <div className="tp-footer-area black-bg pt-130 pb-30">
          <div className="container">
            <div
              className="row wow tpfadeUp"
              data-wow-duration=".3s"
              data-wow-delay=".5s"
            >
              <div className="col-xl-3 col-lg-4 col-md-6">
                <div className="tp-footer-widget">
                  {!home_four && (
                    <div className="tp-footer-widget__logo mb-30">
                      <Link href="/">
                        <img src={logo} alt="" />
                      </Link>
                    </div>
                  )}
                  {home_four && (
                    <div className="tp-footer-widget__title mb-30">
                      <h3 className="footer-title">About HittPR</h3>
                    </div>
                  )}
                  <div className="tp-footer-widget__text mb-30">
                    <p>{t(widget_desc)}</p>
                  </div>
                  <div className="tp-footer-widget__social-link">
                    <SocialLinks />
                  </div>
                </div>
              </div>
              {footer_widgets?.map((w, i) => {
                const { title, widget_lists, w_class, padd } = w;
                return (
                  <div
                    key={i}
                    className={`col-xl-3 col-lg-2 col-md-6 ${
                      w_class ? w_class : ''
                    }`}
                  >
                    <div className={`tp-footer-widget ${padd ? padd : ''}`}>
                      <div className="tp-footer-widget__title pb-15">
                        <h3 className="footer-title">{t(title)}</h3>
                      </div>
                      <div className="tp-footer-widget__list">
                        <ul>
                          {widget_lists.map(item => (
                            <li key={item.href}>
                              <Link href={item.href}>{t(item.label)}</Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                );
              })}
              {!home_four && false && (
                <div className="col-xl-3 col-lg-4 col-md-6">
                  <div className="tp-footer-widget">
                    <div className="tp-footer-widget__title pb-15">
                      <h3 className="footer-title">{subscribe_title}</h3>
                    </div>
                    <div className="tp-footer-widget__text mb-55">
                      <p>{subscribe_text}</p>
                    </div>
                    <div className="tp-footer-widget__input">
                      <form onSubmit={e => e.preventDefault()}>
                        <input type="text" placeholder="Enter Mail" />
                        <button type="submit">
                          <i className="fas fa-paper-plane"></i>
                        </button>
                      </form>
                    </div>
                  </div>
                </div>
              )}
              {home_four && (
                <div className="col-xl-3 col-lg-3 col-md-6 col-12">
                  <div className="tp-footer-widget">
                    <div className="tp-footer-widget__title mb-40">
                      <h3 className="footer-title">Instagram post</h3>
                    </div>
                    <div className="row gx-3">
                      <InstagramItem img={'1'} />
                      <InstagramItem img={'2'} />
                      <InstagramItem img={'3'} />
                      <InstagramItem img={'4'} />
                      <InstagramItem img={'5'} />
                      <InstagramItem img={'6'} />
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>

          <CopyrightArea
            copy_right_text={copy_right_text}
            conditions={conditions}
          />
        </div>
      </footer>
    </React.Fragment>
  );
};

export default FooterHittpr;

const InstagramItem = ({ img }) => {
  return (
    <div className="col-xl-4 col-lg-4 col-md-4 col-sm-4 col-4">
      <div className="tp-footer-widget__tp-insta-img mb-15">
        <img
          className="w-100"
          src={`/assets/img/footer/footer-${img}.jpg`}
          alt=""
        />
        <div className="tp-footer-widget__tp-insta-img-icon">
          <a href="#">
            <i className="fab fa-instagram"></i>
          </a>
        </div>
      </div>
    </div>
  );
};
