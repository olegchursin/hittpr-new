import Link from 'next/link';

interface ICtaProps {
  readonly bgColorVariant?: number;
}

const Cta: React.FC<ICtaProps> = ({ bgColorVariant = 6 }) => {
  return (
    <div className="section-box overflow-visible mt-100 mb-100">
      <div className="container mt-100">
        <div className="row">
          <div className="col-lg-1"></div>
          <div className="col-lg-12">
            <div
              className={`bg-${bgColorVariant} box-newsletter position-relative`}
            >
              <div className="row">
                <div className="col-lg-5 col-md-7">
                  <span className="text-body-capitalized color-gray-500 text-uppercase">
                    Почему мы
                  </span>
                  <h4 className="text-heading-2 mb-10 mt-10">
                    Почему нас рекомендуют
                  </h4>
                  <p className="text-body-text color-gray-500">
                    Настраиваем ваш маркетинг так, чтобы он приносил клиентов
                    даже после завершения сотрудничества.
                  </p>

                  <div className="mt-40 mb-30">
                    <Link href="/contact">
                      <a className="btn btn-black icon-arrow-right-white">
                        Свяжитесь с нами
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-1"></div>
        </div>
      </div>
    </div>
  );
};

export default Cta;
