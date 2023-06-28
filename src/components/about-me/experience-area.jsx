import React from 'react';

const contents = {
  title: 'Проекты',
  feature_items: [
    {
      title: 'Спорт PR',
      desc: 'Освещала бои, проходящие в NYC. Проводила PR-кампании в рамках радиоэфира и в интернет-СМИ для боев:',
      lists: [
        'Сергея Ковалева',
        'Геннадия Головкина',
        'Руслана Проводникова',
        'Владимира Кличко'
      ]
    },
    {
      title: 'Печатные и интернет-СМИ',
      desc: 'Медиа-ландшафт: соприкосновение печатных и интернет-изданий в современной информационной экосистеме',
      lists: [
        'psychologies.ru',
        'glamour.ru',
        'cosmo.ru',
        'Lofficiel (Казахстан), kiz.ru, Liza.ru',
        'Журнал «Работница»',
        'Forumdaily.com',
        'Woman.forumdaily.com',
        '7я.ру'
      ]
    },
    {
      title: 'MTV',
      desc: 'Pазработка и реализация разнообразных оригинальных телевизионных форматов. Среди них:',
      lists: [
        'Ток-шоу “Скажите, девочки” (редактор и постоянная участница);',
        'Автор и продюсер проектов MTV special:',
        '«Спортсмены –завидные женихи страны»,',
        '«Каникулы в Мексике: кухня телепроекта»,',
        '«Марио Касас: три метра над уровнем неба»,',
        '«Остаться в живых: вся правда о конце света»',
        'Тайн.net (корреспондент)'
      ]
    },
    {
      title: 'Телепроекты',
      desc: 'Активное участие в создании и реализации различных проектов, среди которых:',
      lists: [
        'Телеканалы Правительства Москвы («Доверие», «Столица»).',
        'Руководитель корреспондентской сети (награждена грамотой Правительства Москвы, как “Лучший руководитель подразделения”).',
        '“Мегаполис”-социальная программа о жизни в Москве, сотрудничество с Московским Домом национальностей – развитие межнациональных отношений (руководитель корреспондентской сети, автор рубрики “Хочу к маме” – о воспитанниках детских домов);',
        '“Семейный бюджет” (автор и ведущая) -программа о том, как правильно планировать семейный бюджет;',
        '“Лига чемпионов” (автор и ведущая) – интервью с известными спортсменами;',
        'Документальный фильм “К успеху..по льду” – о хоккейной школе “СПАРТАК”;'
      ]
    },
    {
      title: 'Радио',
      desc: 'Ведущая утреннего эфира «ToGo show» и программы “LifeStyle” на радио RUSA (русское радио, США) 2013-2017'
    },

    {
      title: 'ТНТ',
      desc: '“Истории большого города” (автор)'
    }
  ]
};

const { title, feature_items } = contents;

const ExperienceArea = () => {
  return (
    <>
      <div className="tp-skill-area mb-100">
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <div className="amskill">
                <div className="amskill__title">
                  <h3 className="am-skill-title">{title}</h3>
                  <p>
                    Автор, сценарист, режиссер документального фильма{' '}
                    <a
                      href="https://www.youtube.com/watch?v=Al_OXNN0ph4"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      “GREG. THE SECRET TO MY SUCCESS”
                    </a>
                  </p>
                  <p>
                    Автор, сценарист, режиссер документального фильма{' '}
                    <a
                      href="https://www.youtube.com/watch?v=og69ZQwmal4&t=550s"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      “KRUSHER”
                    </a>{' '}
                    о боксере Сергее Ковалеве
                  </p>
                  <p>
                    Автор проекта{' '}
                    <a
                      href="https://hothitnewyork.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      HotHitNewYork.com
                    </a>{' '}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="row mb-40">
            {feature_items.map((item, i) => {
              const { title, desc, lists } = item;
              return (
                <div key={i} className="col-xl-4 col-lg-4">
                  <div className="amfeature">
                    <div className="amfeature__item">
                      <h4 className="am-skill-sm-title">{title}</h4>
                      <p className={`am-p-space-${i + 1}`}>{desc}</p>
                    </div>
                    {lists ? (
                      <div className="amfeature__list">
                        <ul>
                          {lists.map((l, i) => (
                            <li key={i}>
                              <i className="fal fa-check"></i>
                              {l}
                            </li>
                          ))}
                        </ul>
                      </div>
                    ) : null}
                  </div>
                </div>
              );
            })}
          </div>

          <div className="row mb-40">
            <div className="col-xl-12">
              <div className="amskill">
                <div className="amskill__title">
                  <h3 className="am-skill-title">
                    Журналистские расследования
                  </h3>
                  <h5>
                    Общественно-расследовательская деятельность в рамках
                    журналистики,
                    <br /> направленная на борьбу с коррупцией в РФ
                  </h5>
                  <div className="amfeature__list">
                    <ul>
                      <li>
                        <i className="fal fa-check"></i>
                        Документальный фильм-расследование “8 лет за
                        самооборону” (автор).
                      </li>
                      <li>
                        <i className="fal fa-check"></i>
                        Документальный фильм-расследование “Антикоррупционная
                        эпидемия” (автор).
                      </li>
                      <li>
                        <i className="fal fa-check"></i>Сюжет о проекте
                        “Берендеево Царство”.
                      </li>
                      <li>
                        <i className="fal fa-check"></i>
                        Поможем Варечке - История девочки, которая уже 4 года
                        живет с трубкой в горле
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="row mb-40">
            <div className="col-xl-12">
              <div className="amskill">
                <div className="amskill__title">
                  <h3 className="am-skill-title">Background Actor</h3>
                  <div className="mb-20">
                    <h5>HBO</h5>
                    <div className="amfeature__list">
                      <ul>
                        <li>
                          <i className="fal fa-check"></i>
                          “GOSSIP GIRL” 2022
                        </li>
                        <li>
                          <i className="fal fa-check"></i>
                          “AND JUST LIKE THAT” ( “SEX AND THE CITY”) 2022
                        </li>
                        <li>
                          <i className="fal fa-check"></i>“WE OWN THIS CITY”
                          2022
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="mb-20">
                    <h5>SHOWTIME</h5>
                    <div className="amfeature__list">
                      <ul>
                        <li>
                          <i className="fal fa-check"></i>
                          “CITY ON A HILL”
                        </li>
                        <li>
                          <i className="fal fa-check"></i>
                          “THREE WOMEN” (coming soon)
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-xl-12">
              <div className="amskill">
                <div className="amskill__title">
                  <h3 className="am-skill-title">Образование</h3>
                  <div className="mb-20">
                    <h5>Высшее</h5>
                    <div className="amfeature__list">
                      <ul>
                        <li>
                          <i className="fal fa-check"></i>
                          Экономический университет. Специальность:
                          экономическая теория.
                        </li>
                        <li>
                          <i className="fal fa-check"></i>
                          Институт повышения квалификации для работников радио и
                          ТВ. Специальность: ведущий радио и ТВ-эфира.
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="mb-20">
                    <h5>Дополнительное образование</h5>
                    <div className="amfeature__list">
                      <ul>
                        <li>
                          <i className="fal fa-check"></i>
                          Курсы ВВС. Специальность: ведущий эфира.
                        </li>
                        <li>
                          <i className="fal fa-check"></i>
                          New York Film Academy. Специальность: acting.
                        </li>
                        <li>
                          <i className="fal fa-check"></i>
                          Школа искусств. Музыкальное отделение.
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ExperienceArea;
