import React from 'react';

const Testimonials = () => {
  return (
    <section className="section-box pt-100 pb-100 mt-100 bg-6">
      <div className="container">
        <div className="row">
          <div className="col-lg-5 mb-30">
            <span className="tag-1 color-gray-900">
              Мы работаем на Ваш успех
            </span>
            <h3 className="text-heading-1 mt-30">Наши клиенты о нас</h3>
            <p className="text-body-lead-large color-gray-600 mt-30">
              Нам доверяют ведущие спортсмены, успешные бизнесмены, "звезды"
              шоу-бизнеса.
            </p>
          </div>
          <div className="col-lg-7">
            <div className="row" data-masonry='{"percentPosition": true }'>
              <div className="col-lg-6 col-md-12 col-sm-12">
                <div className="card-grid-style-2 card-square hover-up mb-20">
                  <p className="text-body-text color-gray-600 text-comment">
                    "Четко выстроена работа в плане коммуникаций с клиентом.
                    Грамотно организовано еженедельное планирование и отчеты по
                    проделанным работам."
                  </p>
                  <div className="box-img-user">
                    <div className="img-user img-user-round">
                      <img src="/assets/imgs/hittpr/user-1.jpg" alt="Hittpr" />
                    </div>
                    <h4 className="text-body-lead color-gray-900 mb-5">
                      Исмаил Силлах
                    </h4>
                    <p className="text-body-text-md">Боксер-профессионал</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-md-12 col-sm-12">
                <div className="card-grid-style-2 card-square hover-up mb-20">
                  <p className="text-body-text color-gray-600 text-comment">
                    "Спасибо огромное за проделанную работу, все очень быстро,
                    четко и по делу. Ваша работа на очень профессиональном
                    уровне, сейчас это редкость."
                  </p>
                  <div className="box-img-user">
                    <div className="img-user img-user-round">
                      <img src="/assets/imgs/hittpr/user-2.jpg" alt="Hittpr" />
                    </div>
                    <h4 className="text-body-lead color-gray-900 mb-5">
                      Екатерина Тейбан
                    </h4>
                    <p className="text-body-text-md">
                      Организатор тренингов Н. Правдиной
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-lg-6 col-md-12 col-sm-12">
                <div className="card-grid-style-2 card-square hover-up mb-20">
                  <p className="text-body-text color-gray-600 text-comment">
                    "С помощью статей мы постоянно рассказываем о себе и нашем
                    продукте в топовых СМИ, привлекаем трафик на сайт и таким
                    образом увеличиваем продажи. Прогресс очевиден. Планируем
                    продолжать сотрудничество и дальше."
                  </p>
                  <div className="box-img-user">
                    <div className="img-user img-user-round">
                      <img src="/assets/imgs/hittpr/user-3.jpg" alt="Hittpr" />
                    </div>
                    <h4 className="text-body-lead color-gray-900 mb-5">
                      Анна Чекалкина
                    </h4>
                    <p className="text-body-text-md">
                      Помощник управляющего БК "FACTORY FIGHT"
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
