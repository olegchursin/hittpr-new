import PortfolioDetailsMain from '../components/portfolios/portfolio-details';
import SEO from '../components/seo';
import { DEFAULT_LOCALE, I18N_NS } from '../utils/i18n-utils';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'react-i18next';
import { Wrapper } from '../layout';

import type { GetStaticProps, InferGetStaticPropsType } from 'next';

type Props = {
  // Add custom props here
};

const case_item = {
  id: 'kovalev',
  img: '/assets/img/hittpr/projects/coach-2.jpg',
  title: 'Andre Rozier',
  subtitle: 'Материалы',
  category: { label: 'Sports', href: '/pr/sport' },
  materials: [
    {
      id: '1',
      show: true,
      title: 'ПРОФЕССИЯ “ГЛАВНЫЙ ТРЕНЕР ПО БОКСУ”',
      desc: 'Какие функции выполняет? Сколько зарабатывает? Психологический подход в работе с разными менталитетами.',
      url: 'https://hothitnewyork.com/boxing-coach/'
    }
  ],
  description:
    'Чемпион мира в полутяжелом весе по версиям WBA super (2014—2016), IBF (2014—2016), WBO (2013—2016, 2017—2018, 2019). Боксёр года по версии The Ring, WBO, Sports Illustrated, USA Today(2014). Занимал 2-е место в рейтинге Pound for Pound по версии журнала «Ринг». Первый россиянин, признанный боксёром года по версии журнала «Ринг». Лидер рейтинга лучших боксёров полутяжёлого веса по версии журнала Ринг (2015—2016). В 2013 году вошёл в список Гатти по версии HBO (5 самых достойных и зрелищных боксёров), где занял 3 место'
};

const Coach = (_props: InferGetStaticPropsType<typeof getStaticProps>) => {
  const { t } = useTranslation(I18N_NS);

  return (
    <Wrapper>
      <SEO pageTitle={'Andre Rozier'} />
      <PortfolioDetailsMain case_item={case_item} />
    </Wrapper>
  );
};

export default Coach;

export const getStaticProps: GetStaticProps<Props> = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale ?? DEFAULT_LOCALE, [I18N_NS]))
  }
});
