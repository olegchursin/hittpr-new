const WorkPhilosophy = () => {
  return (
    <div className="section-box">
      <div className="container mt-120">
        <div className="row">
          <div className="col-lg-6 col-md-12 col-sm-12 block-img-we-do text-center">
            <img
              className="img-small img-responsive"
              src="assets/imgs/hittpr/planning.jpg"
              alt="Hittpr"
            />
            <div className="block-card">
              <img src="/assets/imgs/hittpr/card.png" alt="Hittpr" />
            </div>
            <div className="block-control">
              <img src="/assets/imgs/hittpr/safety.jpg" alt="Hittpr" />
            </div>
          </div>
          <div className="col-lg-6 col-md-12 col-sm-12 block-we-do">
            <h3 className="text-heading-1 mt-30">Как мы работаем</h3>
            <p className="text-body-lead-large color-gray-400">Наши принципы</p>
            <div className="row">
              <div className="col-lg-6 col-sm-6 col-12 mt-50">
                <p className="text-heading-1 color-green-900 mb-10">01</p>
                <h4 className="text-heading-6 icon-leaf">Качество</h4>
                <p className="text-body-excerpt color-gray-600 mt-15">
                  Быстро работаем, всегда на связи.
                </p>
              </div>
              <div className="col-lg-6 col-sm-6 col-12 mt-50">
                <p className="text-heading-1 color-green-900 mb-10">02</p>
                <h4 className="text-heading-6 icon-leaf">Анализ</h4>
                <p className="text-body-excerpt color-gray-600 mt-15">
                  Погружаемся в специфику вашего бизнеса.
                </p>
              </div>
              <div className="col-lg-6 col-sm-6 col-12 mt-50">
                <p className="text-heading-1 color-green-900 mb-10">03</p>
                <h4 className="text-heading-6 icon-leaf">Развитие</h4>
                <p className="text-body-excerpt color-gray-600 mt-15">
                  Постоянно развиваемся и помогаем расти вам.
                </p>
              </div>

              <div className="col-lg-6 col-sm-6 col-12 mt-50">
                <p className="text-heading-1 color-green-900 mb-10">04</p>
                <h4 className="text-heading-6 icon-leaf">Открытость</h4>
                <p className="text-body-excerpt color-gray-600 mt-15">
                  Прозрачная ценовая политика.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkPhilosophy;
