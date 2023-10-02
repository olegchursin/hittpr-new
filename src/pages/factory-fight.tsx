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
  id: 'factory-fight',
  img: '/assets/img/hittpr/projects/factory.jpg',
  title: 'Factory Fight',
  subtitle: 'Материалы',
  category: { label: 'Sports', href: '/pr/sport' },
  renderMaterials: true,
  materials: [
    {
      id: 'two',
      show: true,
      title: 'PR БОЙЦОВСКОГО КЛУБА FACTORY FIGHT',
      desc: 'Бизнес-кейс компании HITTPR',
      url: 'https://drive.google.com/file/d/14MrOU8KBpDCf2f2e4w87Gm1vX8peSAEn/view?usp=drive_link'
    }
  ],
  description:
    'За год сотрудничества, БК “FACTORY FIGHT” вошел в 100 лучших клубов Москвы и оценен спортивной делегацией из Китая, как “уникальный”'
};

export default function index(
  _props: InferGetStaticPropsType<typeof getStaticProps>
) {
  const { t } = useTranslation(I18N_NS);

  return (
    <Wrapper>
      <SEO pageTitle={t('common.factoryFight')} />
      <PortfolioDetailsMain case_item={case_item} />
    </Wrapper>
  );
}

export const getStaticProps: GetStaticProps<Props> = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale ?? DEFAULT_LOCALE, [I18N_NS]))
  }
});
