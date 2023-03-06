/* eslint-disable @next/next/no-img-element */
import ContactUsBtn from '../../components/elements/ContactUsBtn';
import Layout from '../../components/layout/Layout';

const SmiSocialMedia = () => {
  return (
    <Layout>
      <section className="section-box">
        <div className="banner-hero banner-breadcrums">
          <div className="container text-center">
            <h1 className="text-heading-2 color-gray-1000 mb-20">
              Печатные и интернет-издания: как писать статьи, которые будут
              перепечатывать все
            </h1>
            <p className="text-body-text color-gray-500">
              СМИ и социальные сети
            </p>
          </div>
        </div>
      </section>

      <section className="section-box mt-80">
        <div className="container">
          <div className="row">
            <div>
              <h5>Курс для вас, если вы хотите:</h5>
              <br />
              <h6>
                <ol>
                  <li>- повысить узнаваемость и доход</li>
                  <li>- стать автором публикаций в СМИ</li>
                  <li>
                    - научиться писать креативные тексты для СМИ и социальных
                    сетей
                  </li>
                  <li>
                    - начать собирать материалы для книги, если вы эксперт в
                    своей сфере
                  </li>
                </ol>
              </h6>
            </div>
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
                    <li>Направление вашей деятельности и “нужные” СМИ</li>
                    <li>
                      Магия заголовка: как самую банальную тему подать
                      захватывающе, избегая дешевых уловок.
                    </li>
                    <li>
                      C чего начать: как стать собственным “гуглом” и создавать
                      свои идеи ?
                    </li>
                    <li>
                      Алгоритм работы над статьей (авторская методика)
                      <ol className="ml-20">
                        <li>
                          Определяемся с темой (в зависимости от ваших целей)
                        </li>
                        <li>Составляем план написания статьи</li>
                        <li>Работаем материалом</li>
                        <li>Собираем “пазл”</li>
                        <li>Подбираем крутой заголовок</li>
                      </ol>
                    </li>
                    <li>
                      Бонус: темы для вашего направления (для СМИ и соц.сетей).
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

export default SmiSocialMedia;
