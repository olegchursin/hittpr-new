import React from 'react';

import PortfolioDetailsMain from '../components/portfolios/portfolio-details';

import { Wrapper } from '../layout';
import SEO from '../components/seo';

const case_item = {
  id: 'kovalev',
  img: '/assets/img/hittpr/projects/kovalev-2.jpg',
  title: 'Сергей Ковалев',
  subtitle: 'Материалы',
  category: { label: 'Спорт', href: '/pr/sport' },
  materials: [
    {
      id: '1',
      show: true,
      title: 'Документальный фильм “KRUSHER”.',
      desc: 'СЕРГЕЙ КОВАЛЕВ о своем пути к мировому признанию. О детском прозвище. О том, что общего у него и у Данилы Багрова. О песне, под которую выходит на ринг. Об адаптации в Америке, новом тренере, семье, увлечениях.',
      url: 'https://www.youtube.com/watch?v=og69ZQwmal4'
    },
    {
      id: 'two',
      title: 'СЕРГЕЙ КОВАЛЕВ: “БОЛТОВНЯ ДОЛЖНА КАСАТЬСЯ ИМЕННО СПОРТА”.',
      desc: 'Как “продать” бой зрителю? Должен ли боксер быть шоуменом? О силе трэштокинга, страхе поражения и об эре “без пресса” в тяжелом весе мы поговорили с чемпионом мира /light heavyweight/  по версии WBO Сергеем Ковалевым.',
      url: 'https://hothitnewyork.com/kovalev-about-trash-talk/'
    },
    {
      id: 'thrsdcv34ee',
      title:
        'Ковалёв: мысли о бое с Альваресом ходят у промоутеров, дальше пока не зашло',
      desc: 'Российский боксёр Сергей Ковалёв рассказал о переговорах с представителями Сауля Альвареса о проведении боя.',
      url: 'https://www.championat.com/boxing/news-3803617-kovaljov-mysli-o-boe-s-alvaresom-hodjat-u-promouterov-dalshe-poka-ne-zashlo.html'
    },
    {
      id: 'three',
      title:
        'Сергей Ковалев: «Трэштокинг в бою с Уордом ни к чему хорошему не привел»',
      desc: 'Чемпион мира в полутяжелом весе по версии WBO Сергей Ковалев (33-3-1, 26 КО) рассказал об отношении к трэштоку.',
      url: 'https://www.sports.ru/boxing/1076502351.html'
    },
    {
      id: 'dsff34',
      title:
        'СЕРГЕЙ КОВАЛЕВ: “КАНЕЛО СУНУЛСЯ В МОЮ ВЕСОВУЮ КАТЕГОРИЮ, НО МЫ ЕГО ЗДЕСЬ НЕ ЖДЕМ”.',
      desc: 'Россиянин рассказал о том, с кем у него ассоциируется Канело, что у них общего, за какие выходки он не осуждает мексиканца и почему не ждет его на своей “территории”. ',
      url: 'https://hothitnewyork.com/kovalev-canelo/'
    },
    {
      id: '3',
      title:
        'Сергей Ковалев: Если бою с «Канело» суждено быть, он обязательно случится',
      desc: 'Чемпион мира по версии WBO в полутяжелом весе россиянин Сергей Ковалев (33-3-1, 28 КО) в интервью Hot Hit New York рассказал о подготовке к обязательной защите своего титула ',
      url: 'https://prosports.kz/news/404495'
    },
    {
      id: '4',
      title: '«Не отступаем от плана»',
      desc: 'Ковалев сделал заявление о бое с «Канело»',
      url: 'https://www.sports.kz/news/ne-otstupaem-ot-plana-kovalev-sdelal-zayavlenie-o-boe-s-kanelo/ '
    },
    {
      id: '5',
      title: 'СЕРГЕЙ КОВАЛЕВ: “ГОТОВИМСЯ ПРОВОДИТЬ ЯРДА С ПУСТЫМИ РУКАМИ”.',
      desc: 'Мы побывали в тренировочном лагере Сергея и узнали, как идет подготовка к предстоящему поединку.',
      url: 'https://hothitnewyork.com/kovalev-yarde/'
    }
  ],
  description:
    'Чемпион мира в полутяжелом весе по версиям WBA super (2014—2016), IBF (2014—2016), WBO (2013—2016, 2017—2018, 2019). Боксёр года по версии The Ring, WBO, Sports Illustrated, USA Today(2014). Занимал 2-е место в рейтинге Pound for Pound по версии журнала «Ринг». Первый россиянин, признанный боксёром года по версии журнала «Ринг». Лидер рейтинга лучших боксёров полутяжёлого веса по версии журнала Ринг (2015—2016). В 2013 году вошёл в список Гатти по версии HBO (5 самых достойных и зрелищных боксёров), где занял 3 место'
};

const Kovalev = () => {
  return (
    <Wrapper>
      <SEO pageTitle={'Сергей Ковалев'} />
      <PortfolioDetailsMain case_item={case_item} />
    </Wrapper>
  );
};

export default Kovalev;
