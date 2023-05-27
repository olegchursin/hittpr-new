import Badge from './Badge';
import Link from 'next/link';

const Hero = () => {
  return (
    <section className="section-box">
      <div className="banner-hero banner-2">
        <div className="container">
          <div className="row">
            <div className="col-lg-7 mt-50 mb-60">
              <Badge text="PR Агентство" />
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
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
