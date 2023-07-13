import React from 'react';

import PortfolioDetailsMain from '../components/portfolios/portfolio-details';

import { Wrapper } from '../layout';
import SEO from '../components/seo';

const case_item = {
  id: 'patricia',
  img: '/assets/img/hittpr/projects/patricia-2.jpg',
  title: 'Patricia Field',
  subtitle: 'Материалы',
  category: { label: 'Lifestyle', href: '/pr/fashion' },
  renderMaterials: false,
  materials: [
    {
      id: 'two',
      show: true,
      title: 'ПЭТ В БОЛЬШОМ ГОРОДЕ',
      desc: 'ПРЕЗЕНТАЦИЯ КНИГИ ДИЗАЙНЕРА-КОСТЮМЕРА, ПОДАРИВШЕЙ НАМ САМЫХ ЯРКИХ ЭКРАННЫХ ГЕРОИНЬ.',
      url: 'https://hothitnewyork.com/pat-in-the-city/'
    },
    {
      id: 'five',
      title: 'Patricia Field: Pat in the city',
      desc: 'PAT IN THE CITY BOOK EVENT (YouTube)',
      url: 'https://www.youtube.com/watch?v=Jd9LVVhne5A'
    },
    {
      id: 'one',
      title: 'ПАТРИШИЯ ФИЛД: “Я ОЧЕНЬ СЧАСТЛИВА В НЬЮ-ЙОРКЕ”',
      url: 'https://hothitnewyork.com/patricia-field/'
    },
    {
      id: 'three',
      title: 'Патришия Филд: «Мой гардероб – это единый оркестр»',
      desc: '',
      url: 'https://www.kiz.ru/content/stil-zhizni/svobodnoe-vremya/patrishiya-fild-moy-garderob-eto-edinyy-orkestr/'
    },
    {
      id: 'four',
      title:
        '«Я хочу приехать в Россию и потусоваться с вами»: художник по костюмам и стилист Патриция Филд',
      desc: '',
      url: 'https://www.glamour.ru/fashion-news/ya-hochu-priehat-v-rossiyu-i-potusovatsya-s-vami-hudozhnik-po-kostyumam-i-stilist-patriciya-fild'
    }
  ],
  links: [
    'https://www.glamour.ru/fashion-news/ya-hochu-priehat-v-rossiyu-i-potusovatsya-s-vami-hudozhnik-po-kostyumam-i-stilist-patriciya-fild',
    'https://www.kiz.ru/content/stil-zhizni/svobodnoe-vremya/patrishiya-fild-moy-garderob-eto-edinyy-orkestr/',
    'https://drive.google.com/file/d/15hf_xnVLxqkbH8sSmISKNhXPQQm3xqEN/view',
    'https://hothitnewyork.com/patricia-field/',
    'https://hothitnewyork.com/pat-in-the-city/',
    'https://youtu.be/Jd9LVVhne5A',
    'https://trello.com/1/cards/642efe60cac441bacae41daa/attachments/645375cdb3156a49eb0d4a18/download/PATRICIA_FIELD__THE_FASHIONABLE_TOPIC_OF_FEMINISM_DOES_NOT_TAKE_UP_MY_HEAD_SPACE_(Rabotnitsa_Magazine).docx',
    'https://trello.com/1/cards/642efe60cac441bacae41daa/attachments/645375ce4cd2d66bc953120f/download/Beuty_and_Health_-_Patricia_Field_article_translated.docx'
  ],
  description:
    ' Патришия Филд (Patricia Field)  – американский художник по костюмам, стилист, модный дизайнер, лауреат двух премий “Эмми” и номинант на “Оскар”. Широкая публика ассоциирует ее с такими сериалами, как «Секс в большом городе” (Sex and the city), «Эмили в Париже» (Emily in Paris) и кинокартиной “Дьявол носит Prada” (The Devil Wears Prada).'
};

const index = () => {
  return (
    <Wrapper>
      <SEO pageTitle={'Patricia Field'} />
      <PortfolioDetailsMain case_item={case_item} />
    </Wrapper>
  );
};

export default index;
