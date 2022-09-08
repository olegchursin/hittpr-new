const Services = () => {
  return (
    <section className="section-box pt-100 pb-100">
      <div className="container">
        <div className="row">
          <div className="col-lg-2 col-sm-1 col-12" />
          <div className="col-lg-8 col-sm-10 col-12 text-center mt-40">
            <h2 className="text-heading-1 color-gray-900 mb-10">
              Комплексное PR-продвижение проектов
            </h2>
            <p className="text-body-lead-large color-gray-600 mt-20">
              Находим сильные стороны в каждом проекте и рассказываем о них
              миллионной аудитории
            </p>
          </div>
          <div className="col-lg-2 col-sm-1 col-12" />
        </div>
      </div>
      <div className="container mt-90 mb-lg-100">
        <div className="row">
          <div className="col-lg-6 col-sm-12">
            <div
              className="bg-2 box-square hover-up wow animate__animated animate__fadeIn"
              data-wow-delay=".1s"
            >
              <h4 className="text-heading-4 color-gray-900 mb-15">
                Спортивный PR
              </h4>
              <p className="text-body-text-md color-gray-600">
                Работа с профессиональными боксерами и промоутерами. Разработка
                PR-стратегии профессиональных спортсменов.
              </p>
              <div className="box-image-inner bg-color-2">
                <img src="/assets/imgs/hittpr/sport-pr.png" alt="Hittpr" />
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-sm-12">
            <div
              className="bg-6 box-square hover-up wow animate__animated animate__fadeIn"
              data-wow-delay=".2s"
            >
              <h4 className="text-heading-4 color-gray-900 mb-15">Коучинг</h4>
              <p className="text-body-text-md color-gray-600">
                Редактор СМИ. Управление командой журналистов. Привлечение и
                удержание рекламодателей. Работа с "селебрити". Спортивный PR.
              </p>
              <div className="box-image-inner bg-color-2">
                <img src="/assets/imgs/hittpr/coaching.png" alt="Hittpr" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
