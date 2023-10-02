import HomeMain from '../components/homes/home';
import SEO from '../components/seo';
import { DEFAULT_LOCALE, I18N_NS } from '../utils/i18n-utils';
import { Header, Wrapper } from '../layout';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';

import type { GetStaticProps, InferGetStaticPropsType } from 'next';
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
    ...(await serverSideTranslations(locale ?? DEFAULT_LOCALE, [I18N_NS]))
  }
});

export default Home;
