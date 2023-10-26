import Link from 'next/link';
import { I18N_NS } from '../../../utils/i18n-utils';
import { TFunction, useTranslation } from 'next-i18next';

const hero_contents = (t: TFunction) => {
  return {
    title: t('hero.title'),
    text: <>{t('hero.description')}</>,
    btn_text: t('common.learnMore'),
    btn_text_2: t('common.aboutUs'),
    hero_img: '/assets/img/hero/hero-2.png'
  };
};

const Hero = () => {
  const { t } = useTranslation(I18N_NS);
  const { title, text, btn_text, btn_text_2, hero_img } = hero_contents(t);
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
                    <Link legacyBehavior href="/portfolio">
                      <a className="tp-btn mr-30">{btn_text}</a>
                    </Link>
                    <Link legacyBehavior href="/about">
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
