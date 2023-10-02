import Link from 'next/link';
import { I18N_NS } from '../../../utils/i18n-utils';
import { TFunction, useTranslation } from 'next-i18next';
import { useState } from 'react';

const portfolioData = (t: TFunction) => {
  return [
    {
      id: 1,
      img: '/assets/img/hittpr/projects/patricia-sofa.webp',
      title: t('person.patricia.name'),
      sm_text: t('person.patricia.description'),
      category: 'Lifestyle',
      href: '/patricia',
      big: true,
      home: true
    },
    {
      id: 2,
      img: '/assets/img/hittpr/projects/cena-sq.jpg',
      title: t('person.johnCena.name'),
      sm_text: t('person.johnCena.description'),
      category: 'Lifestyle',
      href: '/john-cena',
      sm: true,
      home: true
    },
    {
      id: 4,
      img: '/assets/img/hittpr/projects/kovalev.jpg',
      title: 'Сергей Ковалев',
      sm_text: 'Чемпион мира в полутяжелом весе.',
      category: 'Спорт',
      href: '/kovalev',
      big: true,
      home: true
    },
    {
      id: 5,
      img: '/assets/img/hittpr/projects/factory-2.jpg',
      title: 'Factory Fight',
      sm_text: 'PR БОЙЦОВСКОГО КЛУБА',
      category: 'Спорт',
      href: '/factory-fight',
      sm: true,
      home: true
    },
    {
      id: 6,
      img: '/assets/img/hittpr/projects/guides_sm.jpg',
      title: 'ГИДЫ, переводчики, преподаватели',
      sm_text: 'ГИДЫ, переводчики, преподаватели',
      category: 'Services',
      href: '/guides-interpreters',
      big: true,
      home: true
    },
    {
      id: 7,
      img: '/assets/img/hittpr/projects/dental_clinic_sm.jpg',
      title: 'Dental Clinic',
      sm_text: 'Dental Clinic',
      category: 'Services',
      href: '/dental-clinic',
      sm: true,
      home: true
    }
  ];
};

const Materials = () => {
  const { t } = useTranslation(I18N_NS);
  const [category, setCategory] = useState('Lifestyle');
  const items = portfolioData(t).filter(p => p.home);
  const [portfolioItems, setPortfolioItems] = useState(
    items.filter(i => i.category === category)
  );
  const categories = [...new Set(items.map(p => p.category))];

  const handleCategory = c => {
    setCategory(c);
    const new_items = items.filter(i => i.category === c);
    setPortfolioItems(new_items);
  };

  const bigItems = portfolioItems.filter(i => i.big);
  const sm_items = portfolioItems.filter(i => i.sm);

  return (
    <div className="tp-project-area p-relative pt-130 pb-100">
      <div className="container">
        <div className="row align-items-center mb-15">
          <div className="col-xl-5 col-lg-12 col-md-12">
            <div className="tp-project-section-box">
              <h5 className="tp-subtitle">{t('common.ourWork')}</h5>
              <h2 className="tp-title">{t('common.materials')}</h2>
            </div>
          </div>
          <div className="col-xl-7 col-lg-12 col-md-12">
            <div className="tp-service-tab-button">
              <nav>
                <div
                  className="nav tp-service-tab justify-content-xl-end justify-content-lg-center"
                  id="nav-tab"
                  role="tablist"
                >
                  {categories.map((c, i) => (
                    <button
                      onClick={() => handleCategory(c)}
                      key={i}
                      className={`nav-links ${
                        c === category ? 'active' : ''
                      } mb-10`}
                      type="button"
                    >
                      {c}
                    </button>
                  ))}
                </div>
              </nav>
            </div>
          </div>
        </div>

        <div className="project-tab-main">
          <div className="row gx-1">
            {bigItems.map(item => (
              <div key={item.id} className="col-xl-6 col-lg-12">
                <div className="tp-project-box mb-20">
                  <div className="tp-project-img fix mb-45">
                    <img className="w-100" src={item.img} alt="" />
                  </div>
                  <div className="tp-project-content ml-20">
                    <h2 className="pro-lg-title">
                      <Link href={item.href}>
                        <a>{item.title}</a>
                      </Link>
                    </h2>
                    <p>{item.sm_text}</p>
                    <Link href={item.href}>
                      <a className="tp-btn">
                        Узнать больше <i className="far fa-arrow-right"></i>
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
            <div className="col-xl-6 col-lg-12">
              <div className="row">
                {sm_items.map(item => (
                  <div key={item.id} className=" col-xl-12 col-lg-12">
                    <div className="tp-project-box-sm d-flex align-items-center mb-20">
                      <div className="tp-project-sm-img fix ml-25 mr-35">
                        <img src={item.img} alt="" />
                      </div>
                      <div className="tp-project-sm-content">
                        <h3 className="pro-sm-title">
                          <Link href={item.href}>
                            <a>{item.title}</a>
                          </Link>
                        </h3>
                        <p>{item.sm_text}</p>
                        <Link href={item.href}>
                          <a className="tp-btn-white-sm">
                            Подробнее <i className="far fa-arrow-right"></i>
                          </a>
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Materials;
