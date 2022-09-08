const CoachingCta = () => {
  return (
    <section className="section-box">
      <div className="container mt-80">
        <div className="row">
          <div className="col-lg-6 col-sm-12 mb-30">
            <span className="tag-1 bg-6 color-green-900">
              Эксклюзивный пакет
            </span>
            <h3 className="text-heading-1 mt-30">
              Для самых требовательных клиентов
            </h3>
            <p className="text-body-lead-large color-gray-600 mt-30">
              Программа обучения создается исходя из Ваших потребностей, знаний
              и занятости. Занятия проходят в формате видео звонка один-на-один
              (Skype, Google Hangout, FaceTime). Тренер доступен для вопросов
              24/7.
              <div className="mt-10">
                Самый ценный, на наш взгляд, компонент пакета - это личностные
                контакты тренера среди "звезд", профессиональных спортсменов,
                журналистов, политиков становятся Вашими бизнес-контактами.
              </div>
              <div className="mt-30">
                <h6>
                  Свяжитесь с нами для получения более подробной информации:
                  Марина Хитт (marina@hittpr.com).
                </h6>
              </div>
            </p>

            <div className="line-bd-green mt-50" />

            <div className="row">
              <div className="col-lg-6 col-sm-6 col-12 mt-50">
                <h4 className="text-heading-6 icon-leaf">
                  Видео-уроки + текстовые задания
                </h4>
                <p className="text-body-excerpt color-gray-600 mt-15">
                  Доступ в закрытый раздел со всеми материалами курса
                </p>
              </div>

              <div className="col-lg-6 col-sm-6 col-12 mt-50">
                <h4 className="text-heading-6 icon-leaf">
                  Детальный разбор домашних заданий
                </h4>
                <p className="text-body-excerpt color-gray-600 mt-15">
                  The latest design trends meet hand-crafted templates.
                </p>
              </div>

              <div className="col-lg-6 col-sm-6 col-12 mt-50">
                <h4 className="text-heading-6 icon-leaf">
                  Обратная связь: еженедельные вебинары
                </h4>
                <p className="text-body-excerpt color-gray-600 mt-15">
                  "Живые" видео-уроки в формате один-на-один
                </p>
              </div>

              <div className="col-lg-6 col-sm-6 col-12 mt-50">
                <h4 className="text-heading-6 icon-leaf">
                  Личные контакты для Вашего бизнеса
                </h4>
                <p className="text-body-excerpt color-gray-600 mt-15">
                  Еженедельные личные онлайн-консультации
                </p>
              </div>
            </div>
          </div>

          <div className="col-lg-6 col-sm-12 block-we-do">
            <div className="inner-image">
              <img
                className="bdrd-16 img-responsive"
                src="assets/imgs/hittpr/coaching-1.jpg"
                alt="Agon"
              />
              <div className="block-image-bottom">
                <img
                  className="bdrd-16 img-responsive"
                  src="assets/imgs/page/homepage2/img-built-2.png"
                  alt="Agon"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoachingCta;
