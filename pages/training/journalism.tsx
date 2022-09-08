import ContactUsBtn from '../../components/elements/ContactUsBtn';
import Layout from '../../components/layout/Layout';
import React from 'react';

const Journalism = () => {
  return (
    <Layout>
      <section className="section-box">
        <div className="banner-hero banner-breadcrums">
          <div className="container text-center">
            <h1 className="text-heading-2 color-gray-1000 mb-20">
              Журналистика
            </h1>
            <p className="text-body-text color-gray-500">
              Профессиональный спорт
            </p>
          </div>
        </div>
      </section>

      <section className="section-box mt-80">
        <div className="container">
          <div className="row">
            <h6>
              <p>
                PR в спорте необходим так же, как и в любой другой области. От
                имиджа и популярности спортивной организации зависит отношение к
                ней тренеров, спортсменов, болельщиков и иных категорий лиц,
                оказывающих непосредственное влияние на все сферы деятельности
                организации.
              </p>
              <br />
              <p>
                Важной задачей управляющих спортивным клубом является удержание
                интереса уже имеющейся аудитории и привлечение новой. Чтобы это
                сделать, необходимо воспользоваться методами проведения PR в
                спорте.
              </p>
            </h6>
          </div>
        </div>
        <div className="container mt-70">
          <div className="row">
            <div className="col-lg-1" />
            <div className="col-lg-10">
              <div className="row">
                <div className="col-lg-8 mb-50">
                  <h4 className="text-heading-6">Поурочное содержание</h4>
                  <ol className="text-body-excerpt color-gray-600 mt-15">
                    <li>
                      Интервью с представителем спортивной индустрии - все этапы
                      - от подготовки до согласования материала.
                    </li>
                    <li>
                      Профессии: спортивный корреспондент, комментатор, ведущий
                      программы о спорте на ТВ, ведущий программы/рубрики о
                      спорте на радио, PR-менеджер, пресс-атташе.
                    </li>
                    <li>Как зарабатывают в спортивной журналистике.</li>
                    <li>
                      Установка и поддержание личного контакта со звездами
                      спорта.
                    </li>
                    <li>
                      Сравнительный анализ спортивной журналистики в России и
                      США, плюсы и основные “фишки” для повышения эффективности
                      в работе журналиста.
                    </li>
                    <li>Как стать известным в своей профессии.</li>
                  </ol>
                </div>

                <div className="col-lg-4 mb-50">
                  <div>
                    <h4 className="text-heading-6 icon-leaf">Бизнес-тренер</h4>
                    <p className="text-body-excerpt color-gray-600 mt-15">
                      Марина Хитт
                    </p>
                  </div>

                  <div className="mt-30">
                    <h4 className="text-heading-6 icon-leaf">
                      Форма проведения
                    </h4>
                    <p className="text-body-excerpt color-gray-600 mt-15">
                      Онлайн вебинар
                      <br />
                      Персональный коучинг
                    </p>
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-lg-12">
                  <div className="mt-40 text-center">
                    <ContactUsBtn />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-1" />
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Journalism;
