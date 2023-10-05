import Link from 'next/link';
import { DEFAULT_LOCALE, I18N_NS } from '../../../utils/i18n-utils';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { TFunction } from 'next-i18next';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

import type { GetStaticProps, InferGetStaticPropsType } from 'next';

type Props = {
  // Add custom props here
};

export function getServicesItems(t: TFunction) {
  return [
    {
      id: 1,
      duration: '.3s',
      delay: '.6s',
      color: 'tp-sv-blue-color',
      img: '/assets/img/service/service-3.png',
      img_lg: '/assets/img/hittpr/pr_smi.jpg',
      title: t('common.prSMI'),
      text_1: t('training.mediaPR.description'),
      text_2: t('common.lessonContent'),
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
      additional_info_title: t('common.information'),
      additional_info: [
        {
          id: 'one',
          show: true,
          title: t('common.businessTrainer'),
          desc: t('person.marinaHitt.name')
        },
        {
          id: 'two',
          title: t('common.lessonFormat'),
          desc: `${t('common.onlineWebinar')} // ${t(
            'common.personalCoaching'
          )}}`
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
      title: t('common.socialNetworksAndMedia'),
      text_1: t('training.socialMedia.description'),
      text_2: t('common.lessonContent'),
      text_3: (
        <>
          - Направление вашей деятельности и “нужные” СМИ <br></br>- Магия
          заголовка: как самую банальную тему подать захватывающе, избегая
          дешевых уловок. <br></br>- C чего начать: как стать собственным
          “гуглом” и создавать свои идеи. <br></br>- Алгоритм работы над статьей
          (авторская методика) <br></br>- Определяемся с темой (в зависимости от
          ваших целей)
          <br></br>- Составляем план написания статьи<br></br>- Работаем с
          материалом <br></br>- Собираем “пазл” Подбираем крутой заголовок{' '}
          <br></br>- Бонус: темы для вашего направления (для СМИ и соц.сетей).
        </>
      ),
      subtitle:
        'Четко. На конкретных примерах. Кейсы компании, в том числе “звездные”. Отработка на практике.',
      additional_info_title: t('common.information'),
      additional_info: [
        {
          id: 'one',
          show: true,
          title: t('common.businessTrainer'),
          desc: t('person.marinaHitt.name')
        },
        {
          id: 'two',
          title: t('common.lessonFormat'),
          desc: `${t('common.onlineWebinar')} // ${t(
            'common.personalCoaching'
          )}}`
        }
      ],
      service_p_3: true
    }
  ];
}

export default function index(
  _props: InferGetStaticPropsType<typeof getStaticProps>
) {
  const { t } = useTranslation(I18N_NS);
  const [services_items, setServicesItems] = useState([]);
  const [meta, setMeta] = useState({ title: '', subtitle: '' });
  useEffect(() => {
    const meta = {
      title: t('common.infoProducts'),
      subtitle: t('common.workAreas')
    };
    const items = getServicesItems(t);
    setMeta(meta);
    setServicesItems(items);
  }, []);

  return (
    <>
      <div className="tp-service-area-two p-relative black-bg pt-125 pb-145 z-index-1">
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <div className="tp-service-section-box-two text-center">
                <h5 className="tp-subtitle pb-10">{meta.subtitle}</h5>
                <h2 className="tp-title tp-white-text pb-35">{meta.title}</h2>
              </div>
            </div>
          </div>
          <div className="row gx-12">
            {services_items.map(service => {
              const { delay, duration, id, img, text_1, title, color } =
                service;
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
}

export const getStaticProps: GetStaticProps<Props> = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale ?? DEFAULT_LOCALE, [I18N_NS]))
  }
});
