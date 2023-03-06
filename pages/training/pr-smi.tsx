/* eslint-disable @next/next/no-img-element */
import ContactUsBtn from '../../components/elements/ContactUsBtn';
import Layout from '../../components/layout/Layout';

const PrSmi = () => {
  return (
    <Layout>
      <section className="section-box">
        <div className="banner-hero banner-breadcrums">
          <div className="container text-center">
            <h1 className="text-heading-2 color-gray-1000 mb-20">PR в СМИ</h1>
            <p className="text-body-text color-gray-500">Авторский курс</p>
          </div>
        </div>
      </section>

      <section className="section-box mt-80">
        <div className="container">
          <div className="row">
            <h6>
              <p>
                Курс для тех, у кого есть цель поднять уровень дохода,
                самостоятельно продвигать себя, свой товар/услугу или клиента,
                сэкономить десятки тысяч долларов на статье расходов “пиар в
                СМИ”, повысить узнаваемость бренда, научиться находить и
                выстраивать контакты в медиапространстве; трансформировать свои
                навыки в бонусы.
              </p>
              <br />
              <p>
                Четко. На конкретных примерах. Кейсы компании, в том числе
                “звездные”. Отработка на практике.
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
                    <li>Зачем нужен пиар в СМИ в эпоху интернета?</li>
                    <li>Какие СМИ эффективнее и почему?</li>
                    <li>
                      Где брать контакты ? Через каких работников СМИ проще
                      “заходить”?
                    </li>
                    <li>
                      Кто вы, что вы, для чего - определяемся с целью пиара.
                    </li>
                    <li>
                      Как составлять файл о себе/клиенте/бренде/компании/услуге?
                      Что в него входит? Для чего он?
                    </li>
                    <li>
                      Как выбирать темы для конкретного СМИ (предлагая свои
                      варианты) с наилучшим результатом для вас? Ваша фишка +
                      интерес СМИ
                    </li>
                    <li>
                      Как составлять такой пресс-релиз, чтобы всегда получать
                      обратную связь?
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

export default PrSmi;
