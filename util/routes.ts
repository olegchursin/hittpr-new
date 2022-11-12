export const HOME_ROUTE = '/';
export const ABOUT_US_ROUTE = '/about';
export const ABOUT_US_PUBLICATIONS_ROUTE = '/about/publications';
export const CONTACT_US_ROUTE = '/contact';
export const TRAINING_ROUTE = '/training';
export const TRAINING_INTERVIEW_ROUTE = '/training/interview';
export const TRAINING_JOURNALISM_ROUTE = '/training/journalism';
export const TRAINING_SPORTSPR_CLUB_ROUTE = '/training/sportspr-club';
export const TRAINING_SPORTSPR_PACKAGE_ROUTE = '/training/sportspr-package';
export const TRAINING_SPORTSPR_INDIVIDUAL_ROUTE =
  '/training/sportspr-individual';
export const COACHING_ROUTE = '/coaching';
export const SERVICES_ROUTE = '/services';
export const BLOG_ROUTE = '/blog';

export interface NavLink {
  readonly id: string;
  readonly label: string;
  readonly href: string;
  readonly children?: NavLink[];
}

export const navLinks: NavLink[] = [
  {
    id: 'about',
    label: 'О нас',
    href: '#',
    children: [
      {
        id: 'about',
        label: 'Кто мы',
        href: ABOUT_US_ROUTE
      },
      {
        id: 'publications',
        label: 'Наши работы',
        href: ABOUT_US_PUBLICATIONS_ROUTE
      }
    ]
  },
  {
    id: 'services',
    label: 'Услуги',
    href: SERVICES_ROUTE
  },
  {
    id: 'training',
    label: 'Тренинги',
    href: TRAINING_ROUTE
  },
  {
    id: 'coaching',
    label: 'Коучинг',
    href: COACHING_ROUTE
  },
  {
    id: 'contact',
    label: 'Контакты',
    href: CONTACT_US_ROUTE
  }
];
