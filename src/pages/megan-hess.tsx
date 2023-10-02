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

export default function index(
  _props: InferGetStaticPropsType<typeof getStaticProps>
) {
  const { t } = useTranslation(I18N_NS);

  return (
    <Wrapper>
      <SEO pageTitle={t('person.meganHess.name')} />
      <PortfolioDetailsMain case_item={case_item} />
    </Wrapper>
  );
}

export const getStaticProps: GetStaticProps<Props> = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale ?? DEFAULT_LOCALE, [I18N_NS]))
  }
});
