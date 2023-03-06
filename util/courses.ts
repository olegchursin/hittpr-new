import {
  COACHING_ROUTE,
  PR_SMI_ROUTE,
  SMI_SOCIAL_MEDIA_ROUTE,
  TRAINING_INTERVIEW_ROUTE,
  TRAINING_JOURNALISM_ROUTE,
  TRAINING_SPORTSPR_CLUB_ROUTE,
  TRAINING_SPORTSPR_INDIVIDUAL_ROUTE,
  TRAINING_SPORTSPR_PACKAGE_ROUTE
} from './routes';

export const courses = [
  {
    id: 'PrSmi',
    title: 'PR в СМИ',
    subtitle:
      'Четко. На конкретных примерах. Кейсы компании, в том числе “звездные”. Отработка на практике.',
    description:
      'Курс для тех, у кого есть цель поднять уровень дохода, самостоятельно продвигать себя, свой товар/услугу или клиента, сэкономить десятки тысяч долларов на статье расходов “пиар в СМИ”, повысить узнаваемость бренда.',
    href: PR_SMI_ROUTE,
    bgColor: 'bg-1'
  },
  {
    id: 'PrSmi',
    title: 'СМИ и соц сети',
    subtitle:
      'Печатные и интернет-издания: как писать статьи, которые будут перепечатывать все.',
    description:
      'Курс для вас, если вы хотите повысить узнаваемость и доход, стать автором публикаций в СМИ, научиться писать креативные тексты для СМИ и социальных сетей, начать собирать материалы для книги, если вы эксперт в своей сфере;',
    href: SMI_SOCIAL_MEDIA_ROUTE,
    bgColor: 'bg-8'
  }
];

export const deprecated = [
  {
    id: 'millionDollarTalk',
    title: 'Интервью',
    subtitle: 'Разговор на миллион',
    description:
      'Cекреты успешного интервью. Подготовка к интервью с известным человеком. Роль пиар-директора при "звезде", как и зачем наладить контакт. Выбор средств и тактик предварительного общения со "звёздой". Острые углы интервью, как их правильно преподносить.',
    href: TRAINING_INTERVIEW_ROUTE,
    bgColor: 'bg-5'
  },
  {
    id: 'journalism',
    title: 'Журналистика',
    subtitle: 'Профессиональный спорт',
    description:
      'Интервью с представителем спортивной индустрии - все этапы - от подготовки до согласования материала. Профессии: спортивный корреспондент, комментатор, ведущий программы о спорте на ТВ, ведущий программы/рубрики о спорте на радио, PR-менеджер, пресс-атташе.',
    href: TRAINING_JOURNALISM_ROUTE,
    bgColor: 'bg-1'
  },
  {
    id: 'coaching',
    title: 'Коучинг',
    subtitle: 'Эксклюзивный пакет',
    description:
      'Как сделать звезду из начинающего/неизвестного/малоизвестного спортсмена. Работа со звездами спорта. Как получить аккредитацию на спортивные мероприятия любого уровня. Как привлекать СМИ для раскрутки спортсмена. Соц.сети спортсмена и видеоблог.',
    href: COACHING_ROUTE,
    bgColor: 'bg-9'
  },
  {
    id: 'sportPRClub',
    title: 'Pабота с клубом',
    subtitle: 'Спортивный PR',
    description:
      'PR в спорте необходим так же, как и в любой другой области. От имиджа и популярности спортивной организации зависит отношение к ней тренеров, спортсменов, болельщиков и иных категорий лиц, оказывающих непосредственное влияние на все сферы деятельности организации.',
    href: TRAINING_SPORTSPR_CLUB_ROUTE,
    bgColor: 'bg-5'
  },
  {
    id: 'sportPRIndividual',
    title: 'PR спортсмена',
    subtitle: 'Спортивный PR',
    description:
      'Как сделать звезду из начинающего/неизвестного/малоизвестного спортсмена. Работа со звездами спорта. Как получить аккредитацию на спортивные мероприятия любого уровня. Как привлекать СМИ для раскрутки спортсмена. Соц.сети спортсмена и видеоблог.',
    href: TRAINING_SPORTSPR_INDIVIDUAL_ROUTE,
    bgColor: 'bg-3'
  },

  {
    id: 'sportPRFull',
    title: 'Спортивный PR',
    subtitle: 'Полный курс',
    description:
      'Договор с промоутером, менеджером и PR-агентом. Работа со спонсорами, все этапы. Как зарабатывают в спортивной журналистике. Увеличение прибыли клуба посредством звезд спорта и шоу-бизнеса. Как бесплатно привлечь СМИ для пиара клуба.',
    href: TRAINING_SPORTSPR_PACKAGE_ROUTE,
    bgColor: 'bg-4'
  }
];
