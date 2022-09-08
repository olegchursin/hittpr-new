import ContactUsBtn from '../../components/elements/ContactUsBtn';
import Layout from '../../components/layout/Layout';
import React from 'react';

const SportsPrIndividual = () => {
  return (
    <Layout>
      <section className="section-box">
        <div className="banner-hero banner-breadcrums">
          <div className="container text-center">
            <h1 className="text-heading-2 color-gray-1000 mb-20">
              PR спортсмена
            </h1>
            <p className="text-body-text color-gray-500">Спортивный PR</p>
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
                      Как сделать звезду из
                      начинающего/неизвестного/малоизвестного спортсмена.
                    </li>
                    <li>Работа со звездами спорта.</li>
                    <li>Как сделать спортивное шоу любого масштаба.</li>
                    <li>
                      Как получить аккредитацию на спортивные мероприятия любого
                      уровня.
                    </li>
                    <li>Как продавать эксклюзив для СМИ.</li>
                    <li>Как привлекать СМИ для раскрутки спортсмена.</li>
                    <li>Соц.сети спортсмена и видеоблог.</li>
                    <li>Работа со спонсорами, все этапы.</li>
                    <li>Договор с промоутером, менеджером и PR-агентом.</li>
                    <li>Психологический подход в работе со спортсменом.</li>
                    <li>Составление карьерного плана.</li>
                    <li>
                      Спортсмен и шоу-бизнес - взаимовыгодное сотрудничество.
                    </li>
                    <li>
                      Как заключить договор с промоутерами международного уровня
                      (бокс).
                    </li>
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

export default SportsPrIndividual;
