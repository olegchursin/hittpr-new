import React from 'react';

import PortfolioDetailsMain from '../components/portfolios/portfolio-details';

import { Wrapper } from '../layout';
import SEO from '../components/seo';

const case_item = {
  id: 'megan-hess',
  img: '/assets/img/hittpr/projects/megan-hess-3.jpg',
  title: 'Меган Хесс',
  subtitle: 'Материалы',
  category: { label: 'Lifestyle', href: '/pr/fashion' },
  materials: [
    {
      id: 'two',
      show: true,
      title: '“Завтрак” И Работа У Тиффани.',
      desc: 'Иллюстратор Меган Хесс: “Завтрак” И Работа У Тиффани. Женщина, Которая Воплощает Мечты.',
      url: 'https://hothitnewyork.com/megan-hess/'
    }
  ],
  description:
    'Меган Хесс – австралийский художник-иллюстратор, которая известна своими работами для таких мировых брендов, как Prada, Dior, Cartier, Chanel, Fendi, Tiffany&Co., Saint Laurent, Cartier, Louis Vuitton  и многих других. Она оформляла витрины в знаменитом Bergdorf Goodman в Нью-Йорке и обложку книги Кэндес Бушнелл “Sex and the city”.'
};

const MeganHess = () => {
  return (
    <Wrapper>
      <SEO pageTitle={'Megan Hess'} />
      <PortfolioDetailsMain case_item={case_item} />
    </Wrapper>
  );
};

export default MeganHess;
