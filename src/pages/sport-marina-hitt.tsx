import React from 'react';

import PortfolioDetailsMain from '../components/portfolios/portfolio-details';

import { Wrapper } from '../layout';
import SEO from '../components/seo';

const case_item = {
  id: 'sport-marina-hitt',
  img: '/assets/img/hittpr/projects/sports.jpg',
  title: 'Спорт с Мариной Хитт',
  subtitle: 'Материалы',
  category: { label: 'Sport', href: '/pr/sport' },
  videos: [{ title: 'Спорт с Мариной Хитт', videoID: 'luytN6oQcxw' }],
  renderMaterials: false,
  materials: [],
  description:
    'Как организовать спортивное шоу любого масштаба? Звезды и спорт. Как делать деньги на продаже автографов? И многое другое.'
};

const SportMarinaHitt = () => {
  return (
    <Wrapper>
      <SEO pageTitle={'Спорт с Мариной Хитт'} />
      <PortfolioDetailsMain case_item={case_item} />
    </Wrapper>
  );
};

export default SportMarinaHitt;
