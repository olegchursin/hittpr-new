import { Wrapper, Header } from '../layout';
import HomeMain from '../components/homes/home';
import SEO from '../components/seo';

import { useTranslation } from 'next-i18next';
import type { GetStaticProps, InferGetStaticPropsType } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { I18N_NS } from '../utils/i18n-utils';
type Props = {
  // Add custom props here
};

const Home = (_props: InferGetStaticPropsType<typeof getStaticProps>) => {
  const { t } = useTranslation(I18N_NS);

  return (
    <Wrapper>
      <SEO pageTitle={t('common.homepage')} />
      <Header />
      <HomeMain />
    </Wrapper>
  );
};

export const getStaticProps: GetStaticProps<Props> = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale ?? 'ru', [I18N_NS]))
  }
});

export default Home;
