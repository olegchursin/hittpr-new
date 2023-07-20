import React from 'react';

import PortfolioDetailsMain from '../components/portfolios/portfolio-details';

import { Wrapper } from '../layout';
import SEO from '../components/seo';

const case_item = {
  id: 'dental-clinic',
  img: '/assets/img/hittpr/projects/dental-clinic.jpg',
  title: 'Dental Clinic',
  subtitle: 'Материалы',
  category: { label: 'Services', href: '/pr/services' },
  renderMaterials: true,
  materials: [
    {
      id: 'dental-clinic',
      show: true,
      title: 'PR СТОМАТОЛОГИЧЕСКОЙ КЛИНИКИ',
      desc: 'Бизнес-кейс компании HITTPR',
      url: 'https://drive.google.com/file/d/1aFJ1D9xJk_7nmXfXVzj6kleoCmbuHIX2/view?usp=sharing'
    }
  ],
  description:
    'Победа в категории “Дентал клиника года“ журнала MODA TOPICAL. Написание подводок ведущему церемонии. Написание благодарственной речи директору клиники.'
};

const DentalClinic = () => {
  return (
    <Wrapper>
      <SEO pageTitle={'Dental Clinic'} />
      <PortfolioDetailsMain case_item={case_item} />
    </Wrapper>
  );
};

export default DentalClinic;
