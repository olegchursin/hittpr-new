import Link from 'next/link';
import React from 'react';

export const services_items = [
  {
    id: 1,
    duration: '.3s',
    delay: '.6s',
    color: 'tp-sv-blue-color',
    img: '/assets/img/service/service-3.png',
    img_lg: '/assets/img/hittpr/pr_smi.jpg',
    title: 'PR в СМИ',
    text_1:
      'Курс для тех, у кого есть цель поднять уровень дохода, самостоятельно продвигать себя, свой товар/услугу или клиента, сэкономить десятки тысяч долларов на статье расходов “пиар в СМИ”, повысить узнаваемость бренда.',
    text_2: 'Поурочное содержание',
    text_3: (
      <>
        - Зачем нужен пиар в СМИ в эпоху интернета? <br></br>- Какие СМИ
        эффективнее и почему? <br></br>- Где брать контакты ? <br></br>- Через
        каких работников СМИ проще “заходить”? <br></br>- Кто вы, что вы, для
        чего - определяемся с целью пиара. <br></br>- Как составлять файл о
        себе/клиенте/бренде/компании/услуге? Что в него входит? Для чего он?{' '}
        <br></br>- Как выбирать темы для конкретного СМИ (предлагая свои
        варианты) с наилучшим результатом для вас? Ваша фишка + интерес СМИ{' '}
        <br></br>- Как составлять такой пресс-релиз, чтобы всегда получать
        обратную связь?
      </>
    ),
    subtitle:
      'Четко. На конкретных примерах. Кейсы компании. Отработка на практике.',
    additional_info_title: 'Информация',
    additional_info: [
      {
        id: 'one',
        show: true,
        title: 'Бизнес-тренер',
        desc: 'Марина Хитт'
      },
      {
        id: 'two',
        title: 'Форма проведения',
        desc: 'Онлайн вебинар // Персональный коучинг'
      }
    ],
    service_p_3: true
  },
  {
    id: 2,
    duration: '.5s',
    delay: '.8s',
    color: 'tp-sv-sky-color',
    img: '/assets/img/service/service-1.png',
    img_lg: '/assets/img/hittpr/social-media-smi.jpg',
    title: 'СМИ и социальные сети',
    text_1:
      'Курс для вас, если вы хотите повысить узнаваемость и доход, стать автором публикаций в СМИ, научиться писать креативные тексты для СМИ и соц сетей, начать собирать материалы для книги, если вы эксперт в своей сфере.',
    text_2: 'Поурочное содержание',
    text_3: (
      <>
        Направление вашей деятельности и “нужные” СМИ <br></br>- Магия
        заголовка: как самую банальную тему подать захватывающе, избегая дешевых
        уловок. <br></br>- C чего начать: как стать собственным “гуглом” и
        создавать свои идеи. <br></br>- Алгоритм работы над статьей (авторская
        методика) <br></br>- Определяемся с темой (в зависимости от ваших целей)
        <br></br>- Составляем план написания статьи<br></br>- Работаем с
        материалом <br></br>- Собираем “пазл” Подбираем крутой заголовок{' '}
        <br></br>- Бонус: темы для вашего направления (для СМИ и соц.сетей).
      </>
    ),
    subtitle:
      'Четко. На конкретных примерах. Кейсы компании, в том числе “звездные”. Отработка на практике.',
    additional_info_title: 'Информация',
    additional_info: [
      {
        id: 'one',
        show: true,
        title: 'Бизнес-тренер',
        desc: 'Марина Хитт'
      },
      {
        id: 'two',
        title: 'Форма проведения',
        desc: 'Онлайн вебинар // Персональный коучинг'
      }
    ],
    service_p_3: true
  }
];

const Services = () => {
  return (
    <>
      <div className="tp-service-area-two p-relative black-bg pt-125 pb-145 z-index-1">
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <div className="tp-service-section-box-two text-center">
                <h5 className="tp-subtitle pb-10">Направления работы</h5>
                <h2 className="tp-title tp-white-text pb-35">Инфопродукты</h2>
              </div>
            </div>
          </div>
          <div className="row gx-12">
            {services_items.map(ser => {
              const { delay, duration, id, img, text_1, title, color } = ser;
              return (
                <div
                  key={id}
                  className="col-xl-6  col-lg-6 col-md-6 wow tpfadeUp"
                  data-wow-duration={duration}
                  data-wow-delay={delay}
                >
                  <div className={`tp-sv-item-two ${color} mb-30`}>
                    <div className="tp-sv-content-tow mt-20">
                      <h3 className="tp-sv-product-design">{title}</h3>
                      <p>{text_1}</p>
                    </div>
                    <div className="tp-sv-icon-two">
                      <Link href={`/service-details/${id}`}>
                        <a>
                          <i className="fas fa-long-arrow-up"></i>
                        </a>
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
