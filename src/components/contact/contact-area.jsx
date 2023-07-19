import React from 'react';

const ContactArea = () => {
  return (
    <>
      <div className="tp-contact-area pt-135 pb-130">
        <div className="container">
          <div className="row">
            {/* <h4 className="tp-contact-big-title">Мы открыты для общения </h4> */}
            <div className="col-xl-6 col-lg-6 ">
              <div className="tp-contct-wrapper contact-space-40">
                <div className="tp-contact-info mb-40">
                  <h4 className="contact-title">E-Mail</h4>
                  <span>
                    <a href="mailto:pr@hittpr.com">pr@hittpr.com</a>
                  </span>
                </div>
                <div className="tp-contact-info mb-40">
                  <h4 className="contact-title">Telegram</h4>
                  <span>
                    <a href="https://t.me/hitt_pr_nyc">hitt_pr</a>
                  </span>
                </div>
              </div>
            </div>
            <div className="col-xl-6 col-lg-6"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactArea;
