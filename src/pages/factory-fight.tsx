import React from 'react';

import PortfolioDetailsMain from '../components/portfolios/portfolio-details';

import { Wrapper } from '../layout';
import SEO from '../components/seo';

const case_item = {
  id: 'factory-fight',
  img: '/assets/img/hittpr/projects/factory.jpg',
  title: 'Factory Fight',
  subtitle: 'Материалы',
  category: { label: 'Sport', href: '/pr/sport' },
  renderMaterials: true,
  materials: [
    {
      id: 'two',
      show: true,
      title: 'PR БОЙЦОВСКОГО КЛУБА FACTORY FIGHT',
      desc: 'Бизнес-кейс компании HITTPR',
      url: 'https://drive.google.com/file/d/14MrOU8KBpDCf2f2e4w87Gm1vX8peSAEn/view?usp=drive_link'
    }
  ],
  description:
    'За год сотрудничества, БК “FACTORY FIGHT” вошел в 100 лучших клубов Москвы и оценен спортивной делегацией из Китая, как “уникальный”'
};

const JohnCena = () => {
  return (
    <Wrapper>
      <SEO pageTitle={'Factory Fight'} />
      <PortfolioDetailsMain case_item={case_item} />
    </Wrapper>
  );
};

export default JohnCena;
