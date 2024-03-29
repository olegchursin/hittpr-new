import Link from 'next/link';
import React from 'react';

const Cta = () => {
  return (
    <div
      className="tp-news-letter-area tp-news-letter-bg pt-200 pb-150"
      style={{ backgroundImage: 'url(/assets/img/news/news-bg.jpg)' }}
    >
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-8 col-lg-8 col-md-12 ">
            <div className="tp-news-sub-wrapper text-center">
              <div className="tp-news-letter-section-box">
                <h2 className="tp-title-sm tp-title-sm tp-white-text pb-30">
                  Почему нас рекомендуют
                </h2>
                <p className="text-white pb-35">
                  Настраиваем ваш PR так, чтобы он приносил клиентов даже
                  после завершения сотрудничества.
                </p>
              </div>
              <div className="tp-news-button">
                <Link legacyBehavior href="/contact">
                  <a className="tp-btn-lg-yellow">Свяжитесь с нами</a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cta;
