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
  id: 'sport-marina-hitt',
  img: '/assets/img/hittpr/projects/sports.jpg',
  title: 'Спорт с Мариной Хитт',
  subtitle: 'Материалы',
  category: { label: 'Sports', href: '/pr/sport' },
  videos: [{ title: 'Спорт с Мариной Хитт', videoID: 'luytN6oQcxw' }],
  renderMaterials: false,
  materials: [],
  description:
    'Как организовать спортивное шоу любого масштаба? Звезды и спорт. Как делать деньги на продаже автографов? И многое другое.'
};

export default function SportMarinaHitt() {
  const { t } = useTranslation(I18N_NS);

  return (
    <Wrapper>
      <SEO pageTitle={t('person.marinaHitt.sport')} />
      <PortfolioDetailsMain case_item={case_item} />
    </Wrapper>
  );
}

export const getStaticProps: GetStaticProps<Props> = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale ?? DEFAULT_LOCALE, [I18N_NS]))
  }
});
