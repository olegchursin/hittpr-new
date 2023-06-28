import React from 'react';

const TITLE_DEFAULT =
  'Find the best solution for every stage of your business development';
const TEXT_1_DEFAULT =
  'A dedicated product design team can help you achieve your business goals. Whether you need to craft an idea for a completely new product or elevate the quality of an existing solution, we’ll help you to create a product that is laser targeted to your users’ needs and delivers business results.';

const ServiceDetailsArea = ({
  img_src,
  title = TITLE_DEFAULT,
  text_1 = TEXT_1_DEFAULT,
  text_2,
  text_3
}) => {
  const link = (
    <a href="#">
      Schedule a free expert session <i className="fal fa-arrow-right"></i>
    </a>
  );
  const img = (
    <div className="row">
      <div className="col-12">
        <div className="sd-big-img">
          <img src={img_src} alt={title} />
        </div>
      </div>
    </div>
  );
  return (
    <>
      <div className="service-details-area">
        <div className="container">
          <div className="row service-pt-pb">
            <div className="col-xl-6 col-lg-6">
              <div className="sd-service-details">
                <h3 className="tp-title-sm service-details-space">{title}</h3>
                {false ? link : null}
              </div>
            </div>
            <div className="col-xl-6 col-lg-6">
              <div className="sd-service-details-paragraph">
                <p className="pb-15">{text_1}</p>
                <h4 className="pb-10 am-skill-sm-title">{text_2}</h4>
                <p>{text_3}</p>
              </div>
            </div>
          </div>
          {img_src ? img : null}
        </div>
      </div>
    </>
  );
};

export default ServiceDetailsArea;
