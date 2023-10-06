import { TFunction } from 'next-i18next';

export function getServicesItems(t: TFunction) {
  return [
    {
      id: 1,
      href: 'media-pr',
      duration: '.3s',
      delay: '.6s',
      color: 'tp-sv-blue-color',
      img: '/assets/img/service/service-3.png',
      img_lg: '/assets/img/hittpr/pr_smi.jpg',
      title: t('common.prSMI'),
      text_1: t('training.mediaPR.description'),
      text_2: t('common.lessonContent'),
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
      href: 'media-social-networks',
      duration: '.5s',
      delay: '.8s',
      color: 'tp-sv-sky-color',
      img: '/assets/img/service/service-1.png',
      img_lg: '/assets/img/hittpr/social-media-smi.jpg',
      title: t('common.socialNetworksAndMedia'),
      text_1: t('training.socialMedia.description'),
      text_2: t('common.lessonContent'),
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
