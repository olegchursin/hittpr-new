import React from 'react';

import PortfolioDetailsMain from '../components/portfolios/portfolio-details';

import { Wrapper } from '../layout';
import SEO from '../components/seo';

const case_item = {
  id: 'doctors',
  img: '/assets/img/hittpr/projects/doctors.jpg',
  title: 'Врачи',
  subtitle: 'Материалы',
  category: { label: 'Services', href: '/pr/services' },
  sectionedLinks: {
    sectionTitle: 'Ада Кондэ',
    sectionSubtitle:
      'Мотивационный спикер, основатель проекта об осознанном управлении жизнью',
    sectionLinks: [
      'https://hothitnewyork.com/ada-konde/',
      'https://woman.forumdaily.com/schaste-s-inostrancem-preodolevaya-to-chto-ne-stoit-preodolevat/',
      'https://www.thevoicemag.ru/lifestyle/stil-zhizni/v-poiskah-svoego-lica-odin-na-odin-s-dermatilomaniey/',
      'https://www.psychologies.ru/articles/dermatilomaniya-kak-ugomonit-ruki/'
    ],
    sectionPdfs: [
      {
        title: 'Дерматиломания: как угомонить руки',
        url: 'https://drive.google.com/file/d/1QVT-LxM7t9js9F57sQeEShqSuzIUyV4a/view?usp=sharing'
      }
    ]
  },
  links: [
    'https://hothitnewyork.com/psychiatrist_vilor_shpitalnik/',
    'https://www.psychologies.ru/articles/leto-samyiy-stressovyiy-sezon/',
    'https://woman.forumdaily.com/kompleks-kotoryj-byvaet-u-vsex-kak-ne-slomat-sudbu-rebenku/',
    'https://woman.forumdaily.com/pereezd-v-ssha-kak-pomoch-rebenku-adaptirovatsya/',
    'https://woman.forumdaily.com/pereezd-v-ssha-i-problemy-adaptacii-chto-ozhidat-i-kak-spravitsya/',
    'https://woman.forumdaily.com/kak-adaptiruyutsya-v-ssha-pozhilye-roditeli/',
    'https://www.kiz.ru/content/zdorove/novosti/6-mifov-o-kontaktnykh-linzakh/',
    'https://www.7ya.ru/article/Kak-nosit-kontaktnye-linzy-pravilno-7-voprosov-oftalmologu/#ocenka'
  ],
  pdfs: [
    {
      title: 'Женская ненависть — путь к фригидности',
      url: 'https://drive.google.com/file/d/1DqpcY8wZhb1nEAX48tKYx-jqob-sTFk8/view?usp=sharing'
    },
    {
      title: 'Как реагировать на эксгибициониста?',
      url: 'https://drive.google.com/file/d/1u5oYrmvHsv7kPnbxJr1NvW9pBk2I0YNe/view?usp=sharing'
    },
    {
      title: 'Макияж: безопасность для глаз',
      url: 'https://drive.google.com/file/d/1BQ7eoFpt5IQzz4WI8jZgGINA7r0Ebash/view?usp=sharing'
    }
  ],
  renderMaterials: false,
  materials: [],
  description: 'Врачи'
};

const Doctors = () => {
  return (
    <Wrapper>
      <SEO pageTitle={'Врачи'} />
      <PortfolioDetailsMain case_item={case_item} />
    </Wrapper>
  );
};

export default Doctors;
