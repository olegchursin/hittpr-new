import { Wrapper } from '../layout';
import HomeMain from '../components/homes/home';
import SEO from '../components/seo';

const I18N_NS = 'translation';

import Link from 'next/link';
import { useRouter } from 'next/router';
import type { GetStaticProps, InferGetStaticPropsType } from 'next';

import { useTranslation, Trans } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

type Props = {
  // Add custom props here
};

const Home = (_props: InferGetStaticPropsType<typeof getStaticProps>) => {
  const router = useRouter();
  const { t, i18n } = useTranslation(I18N_NS);

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const onToggleLanguageClick = (newLocale: string) => {
    const { pathname, asPath, query } = router;
    router.push({ pathname, query }, asPath, { locale: newLocale });
  };

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const clientSideLanguageChange = (newLocale: string) => {
    i18n.changeLanguage(newLocale);
  };

  const changeTo = router.locale === 'en' ? 'ru' : 'en';
  return (
    <Wrapper>
      <SEO pageTitle={'Home'} />
      <HomeMain />
    </Wrapper>
  );
};

export const getStaticProps: GetStaticProps<Props> = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale ?? 'en', [I18N_NS]))
  }
});

export default Home;
