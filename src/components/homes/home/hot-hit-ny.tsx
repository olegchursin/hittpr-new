import React from 'react';

const newsLatter_contents = {
  img: '/assets/img/hittpr/hhny.svg',
  subtitle: 'ПРОЕКТ МАРИНЫ ХИТТ',
  title: 'Истории, рассказанные от души, из сердца Большого Яблока',
  btn_text: 'HotHitNewYork.com'
};
const { btn_text, img, subtitle, title } = newsLatter_contents;

const HotHitNewYork = () => {
  return (
    <>
      <div className="tp-news-area black-bg fix">
        <div className="container">
          <div className="row align-items-center flex-md-wrap">
            <div className="col-xl-6 col-lg-6 col-md-6">
              <a
                title="HotHitNewYork.com"
                href="https://hothitnewyork.com"
                target="_blank"
                rel="noreferrer noopener"
              >
                <div
                  className="tp-newsletter-left-img pt-60 p-relative wow tpfadeLeft"
                  data-wow-duration=".3s"
                  data-wow-delay=".5s"
                >
                  <div className="z-index">
                    <img src={img} alt="" style={{ maxWidth: '500px' }} />
                  </div>
                </div>
              </a>
            </div>

            <div className="col-xl-6 col-lg-6 col-md-6">
              <div
                className="tp-news-letter-section-box-two pt-135 pb-145 wow tpfadeUp"
                data-wow-duration=".5s"
                data-wow-delay=".7s"
              >
                <h5 className="tp-subtitle">{subtitle}</h5>
                <h2 className="tp-title tp-white-text pb-10">{title}</h2>
                <a
                  title="HotHitNewYork.com"
                  href="https://hothitnewyork.com"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="tp-btn-border"
                >
                  {btn_text}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HotHitNewYork;
