import React from 'react';

const AboutMeArea = ({ team }) => {
  const { social_links, img, name, title } = team || {};
  return (
    <>
      <div className="am-about-me-area pt-110 pb-100">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-xl-5 col-lg-5 col-12">
              <div className="ac-ab-img fix">
                <img className="w-100" src={img} alt="" />
              </div>
            </div>
            <div className="col-xl-7 col-lg-7 col-12">
              <div className="row">
                <div className="col-xl-7 col-lg-8 col-md-6">
                  <div className="amaboutinfo">
                    <div className="amaboutinfo__client-info">
                      <h4>{name}</h4>
                      <span>{title}</span>
                      <p>Автор, сценарист, режиссер</p>
                    </div>
                    <div className="amaboutinfo__experience">
                      <p>
                        <a href="mailto: marina@hittpr.com">
                          <b>E-mail:</b>  marina@hittpr.com
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-xl-5 col-lg-4 col-md-6">
                  <div className="amaboutsocial text-start text-md-end">
                    {social_links?.map((link, i) => (
                      <div key={i} className="amaboutsocial__icon mb-30">
                        <a
                          href={link?.link}
                          target={link?.target}
                          className="si-btn-link"
                        >
                          <div className="tp-si-wrapper d-flex justify-content-end">
                            <div className={`tp-si__text tp-si-color-${i + 2}`}>
                              <span>{link?.name}</span>
                            </div>
                            <div className={`tp-si__icon tp-si-color-${i + 2}`}>
                              <i className={link?.icon}></i>
                            </div>
                          </div>
                        </a>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutMeArea;
