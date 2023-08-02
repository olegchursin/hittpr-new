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
  links: [
    'https://drive.google.com/file/d/1aFJ1D9xJk_7nmXfXVzj6kleoCmbuHIX2/view?usp=sharing',
    'https://drive.google.com/file/d/1i_MuoGF_5jmajFdaeSvMsv8syq-Unf3Z/view?usp=sharing',
    'https://drive.google.com/file/d/1S095fJ5ZotYQ-8ialAvgmg5tUa5pnAt-/view?usp=sharing',
    'https://docs.google.com/document/d/1-UlsWX4gEVNNwfgkdTMlBxZecdcpvNnN/edit?usp=sharing&ouid=108433140789937449811&rtpof=true&sd=true',
    'https://docs.google.com/document/d/1MEbZ9jiZvNbgNrLkWcX7LMOBozb8MFNO/edit?usp=sharing&ouid=108433140789937449811&rtpof=true&sd=true',
    'http://lofficiel.kz/blog/2016/08/18/zvezdnyj-stomatolog/',
    'https://lisa.ru/zvezdnyy-stomatolog-rasskazala-o-svo/'
  ],
  imgs: [
    'https://drive.google.com/file/d/1o6JEjJ8E31pyLV14Xyh2QlrKqWLTJfT-/view?usp=sharing'
  ],
  renderMaterials: false,
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
