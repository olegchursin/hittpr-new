import React from 'react';

import PortfolioDetailsMain from '../components/portfolios/portfolio-details';

import { Wrapper } from '../layout';
import SEO from '../components/seo';

const case_item = {
  id: 'john-cena',
  img: '/assets/img/hittpr/projects/cena.png',
  title: 'John Cena',
  subtitle: 'Материалы',
  category: { label: 'Lifestyle', href: '/pr/fashion' },
  renderMaterials: false,
  materials: [
    {
      id: 'two',
      show: true,
      title: '5 СЕКРЕТОВ О ДЖОНЕ СИНЕ',
      desc: 'ПОЧЕМУ У НЕГО ТРЯСУТСЯ РУКИ, ЗА ЧТО НЕ ЛЮБИТ НЬЮ-ЙОРК, ДЛЯ ЧЕГО БЕРЕТСЯ ЗА КАЖДУЮ РОЛЬ В КИНО, КАКУЮ ЕДУ СЧИТАЕТ СТРАННОЙ, С КЕМ ИЗ БОКСЕРОВ СРАВНИВАЕТ СЕБЯ И СВОЕГО САМОГО ГЛАВНОГО КОНКУРЕНТА THE ROCK',
      url: 'https://hothitnewyork.com/5-%D1%81%D0%B5%D0%BA%D1%80%D0%B5%D1%82%D0%BE%D0%B2-%D0%BE-%D0%B4%D0%B6%D0%BE%D0%BD%D0%B5-%D1%81%D0%B8%D0%BD%D0%B5-%D0%BF%D0%BE%D1%87%D0%B5%D0%BC%D1%83-%D1%83-%D0%BD%D0%B5%D0%B3%D0%BE-%D1%82%D1%80/'
    },
    {
      id: 'five',
      title: 'ДЖОН СИНА: ЖИЗНЬ В КИТАЕ И СМЕНА ИМИДЖА.',
      desc: 'Нам удалось пообщаться на одном мероприятии и я могу сказать, что он оставляет самые теплые впечатления: культурный, галантный, добрый и с огромной мотивацией, несмотря на успехи в разных сферах, которые достаются тяжелым трудом. Режим – его все.',
      url: 'https://hothitnewyork.com/john_cena/'
    }
  ],
  links: [
    'https://hothitnewyork.com/5-%D1%81%D0%B5%D0%BA%D1%80%D0%B5%D1%82%D0%BE%D0%B2-%D0%BE-%D0%B4%D0%B6%D0%BE%D0%BD%D0%B5-%D1%81%D0%B8%D0%BD%D0%B5-%D0%BF%D0%BE%D1%87%D0%B5%D0%BC%D1%83-%D1%83-%D0%BD%D0%B5%D0%B3%D0%BE-%D1%82%D1%80/',
    'https://hothitnewyork.com/john_cena/'
  ],
  description:
    'Джон Си́на — американский рестлер, выступающий в федерации WWE, автор и исполнитель песен в стиле хип-хоп и рэп, киноактёр.'
};

const JohnCena = () => {
  return (
    <Wrapper>
      <SEO pageTitle={'John Cena'} />
      <PortfolioDetailsMain case_item={case_item} />
    </Wrapper>
  );
};

export default JohnCena;
