import Link from 'next/link';
import React from 'react';

const hero_contents = {
  title: 'Продвижение бизнеса в новых условиях',
  text: (
    <>
      Приобщитесь к опыту и знаниям ведущих экспертов в области журналистики и
      PR, профессиональных бизнес-тренеров и практиков
    </>
  ),
  btn_text: 'Узнать больше',
  btn_text_2: 'Коротко о нас',
  hero_img: '/assets/img/hero/hero-2.png'
};

const { title, text, btn_text, btn_text_2, social_links, hero_img } =
  hero_contents;

const heroImg = (
  <div className="col-xl-5 col-lg-5">
    <div
      className="tp-hero-big-img wow fadeInRight"
      data-wow-duration=".7s"
      data-wow-delay="1.2s"
    >
      <img src={hero_img} alt="" />
    </div>
  </div>
);

const Hero = () => {
  return (
    <div className="tp-hero-area tp-hero-space p-relative z-index-1 fix">
      <div className="tp-hero-shape">
        {/* <div className="shape-circle-yellow d-none"></div> */}
        <div className="shape-circle-blue"></div>
      </div>
      <div className="tp-hero-wapper">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-xl-7 col-lg-7">
              <div className="tp-hero-content">
                <div className="tp-hero-text">
                  <h2
                    className="tp-hero-title wow tpfadeUp"
                    data-wow-duration=".3s"
                    data-wow-delay=".6s"
                  >
                    {title}
                  </h2>
                  <p
                    className="wow tpfadeUp"
                    data-wow-duration=".5s"
                    data-wow-delay=".8s"
                  >
                    {text}
                  </p>
                  <div
                    className="tp-hero-button mb-140 wow tpfadeUp"
                    data-wow-duration=".7s"
                    data-wow-delay="1s"
                  >
                    <Link href="/portfolio">
                      <a className="tp-btn mr-30">{btn_text}</a>
                    </Link>
                    <Link href="/about">
                      <a className="tp-btn-grey">
                        {btn_text_2}
                        <i className="far fa-arrow-right"></i>
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            {false ? heroImg : null}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
