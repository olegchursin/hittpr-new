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
  id: 'psychologists',
  img: '/assets/img/hittpr/projects/psychologists-2.jpg',
  title: 'Психологи',
  subtitle: 'Материалы',
  category: { label: 'Services', href: '/pr/services' },
  sectionedLinks: [
    {
      sectionTitle: 'Наталья Андреина',
      sectionSubtitle: 'Профориентолог, психолог, коуч ICU, ECA, NLP-мастер',
      sectionLinks: [
        'https://www.psychologies.ru/standpoint/prokachat-myishlenie-vozmojnostyami/',
        'https://www.psychologies.ru/standpoint/7-mifov-o-gipnoze/',
        'https://www.7ya.ru/article/Vybirayut-vuz-nachinayut-uchitsya-i-brosayut-Kak-jetogo-izbezhat/'
      ],
      sectionPdfs: [
        {
          title: 'Искусственная жизнь',
          url: 'https://drive.google.com/file/d/1b-R_dTi-t_7IA3iC5rYXgyLPyC5z5_xo/view?usp=sharing'
        },
        {
          title: 'Восприятие собственной внешности',
          url: 'https://drive.google.com/file/d/1jUSIeLepgpOdXqAArKDl8K1HCBtYMHXa/view?usp=sharing'
        }
      ]
    }
  ],
  renderMaterials: false,
  materials: [],
  description: 'Психологи'
};

export default function Psychologists(
  _props: InferGetStaticPropsType<typeof getStaticProps>
) {
  const { t } = useTranslation(I18N_NS);

  return (
    <Wrapper>
      <SEO pageTitle={t('common.psychologists')} />
      <PortfolioDetailsMain case_item={case_item} />
    </Wrapper>
  );
}

export const getStaticProps: GetStaticProps<Props> = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale ?? DEFAULT_LOCALE, [I18N_NS]))
  }
});
