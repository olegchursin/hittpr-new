export const HOME_ROUTE = '/';
export const ABOUT_US_ROUTE = '/about';
export const CONTACT_US_ROUTE = '/contact';
export const PRESS_PR = '/press-pr';
export const PR = '/pr';
export const PR_SPORT = '/pr/sport';
export const PR_FASHION = '/pr/fashion';
export const PR_PERSONAL_BRAND = '/pr/personal-brand';
export const PR_PSYCHOLOGY = '/pr/psychology';
export const TRAINING_ROUTE = '/training';
export const TRAINING_INTERVIEW_ROUTE = '/training/interview';
export const TRAINING_JOURNALISM_ROUTE = '/training/journalism';
export const TRAINING_SPORTSPR_CLUB_ROUTE = '/training/sportspr-club';
export const TRAINING_SPORTSPR_PACKAGE_ROUTE = '/training/sportspr-package';
export const TRAINING_SPORTSPR_INDIVIDUAL_ROUTE = '/training/sportspr-individual';
export const BLOG_ROUTE = '/blog';

// deprecated
export const SERVICES_ROUTE = '/services';
export const COACHING_ROUTE = '/coaching';

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
    href: ABOUT_US_ROUTE
  },
  {
    id: 'pr',
    label: 'PR',
    href: '#',
    children: [
      {
        id: 'pr-sport',
        label: 'Спорт',
        href: PR_SPORT
      },
      {
        id: 'pr-fashion',
        label: 'Fashion',
        href: PR_FASHION
      },
      {
        id: 'pr-personal-brand',
        label: 'Личный бренд',
        href: PR_PERSONAL_BRAND
      },
      {
        id: 'pr-psychology',
        label: 'Психология',
        href: PR_PSYCHOLOGY
      }
    ]
  },
  {
    id: 'press-pr',
    label: 'PR в СМИ',
    href: PRESS_PR
  },
  {
    id: 'training',
    label: 'Тренинги',
    href: TRAINING_ROUTE
  },
  {
    id: 'contact',
    label: 'Контакты',
    href: CONTACT_US_ROUTE
  }
];
