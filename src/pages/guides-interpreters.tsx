import React from 'react';

import PortfolioDetailsMain from '../components/portfolios/portfolio-details';

import { Wrapper } from '../layout';
import SEO from '../components/seo';

const case_item = {
  id: 'guides-interpreters',
  img: '/assets/img/hittpr/projects/guides.jpg',
  title: 'ГИДЫ, переводчики, преподаватели',
  subtitle: 'Материалы',
  category: { label: 'Services', href: '/pr/services' },
  links: [
    'https://hothitnewyork.com/dmitri-petrov/',
    'https://hothitnewyork.com/languages-and-psychology/',
    'https://www.kiz.ru/content/stil-zhizni/svobodnoe-vremya/kak-nauchitsya-legko-i-bez-stressa-govorit-na-italyanskom/',
    'https://www.forumdaily.com/nyguide/?fbclid=IwAR1VuvrjsApf5cKl8SNDDYz2u4piv0M_creskIQvsy-QNLRnCE0id70OrK0'
  ],
  pdfs: [
    {
      title: '10 лайфхаков для желяющих посетить Италию',
      url: 'https://drive.google.com/file/d/1UtJKzkVMysMckZ_iiJmucoSnYPQLbtGe/view?usp=sharing'
    }
  ],
  renderMaterials: false,
  materials: [],
  description: 'ГИДЫ, переводчики, преподаватели'
};

const GuidesInterpreters = () => {
  return (
    <Wrapper>
      <SEO pageTitle={'ГИДЫ, переводчики, преподаватели'} />
      <PortfolioDetailsMain case_item={case_item} />
    </Wrapper>
  );
};

export default GuidesInterpreters;
