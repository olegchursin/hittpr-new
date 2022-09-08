import Link from 'next/link';

const Hero = () => {
  return (
    <section className="section-box">
      <div className="banner-hero banner-2">
        <div className="container">
          <div className="row">
            <div className="col-lg-7 mt-50">
              <span className="tag-1 bg-green-900">PR Агенство</span>
              <h1 className="text-display-3 mt-30">
                Продвижение бизнеса в новых условиях
              </h1>
              <p className="text-body-lead-large color-gray-500 mt-40 pr-40">
                Приобщитесь к опыту и знаниям ведущих экспертов в области
                журналистики и PR, профессиональных бизнес-тренеров и практиков.
              </p>
              <div className="mt-40">
                <Link href="/services">
                  <a className="btn btn-black shape-square icon-arrow-right-white">
                    Узнать больше
                  </a>
                </Link>
                <Link href="/about">
                  <a className="btn btn-link icon-triangle color-gray-900 ml-40">
                    Коротко о нас
                  </a>
                </Link>
              </div>
            </div>

            <div className="col-lg-5 d-none d-lg-block">
              <div className="banner-imgs">
                <div className="block-1 shape-2">
                  <img src="/assets/imgs/hittpr/balance.png" alt="Hittpr" />
                </div>
                <div className="block-2 shape-3">
                  <img src="/assets/imgs/hittpr/payment.png" alt="Hittpr" />
                </div>
                <img
                  className="img-responsive shape-1"
                  alt="Hittpr"
                  src="assets/imgs/hittpr/banner.png"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
