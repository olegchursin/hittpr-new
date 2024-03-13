import AboutMeMain from '../../components/about-me';
import { useState, useEffect } from 'react';
// import SEO from '../../components/seo';
import { DEFAULT_LOCALE, I18N_NS } from '../../utils/i18n-utils';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'react-i18next';
import { Wrapper } from '../../layout';

import type { GetStaticProps, InferGetStaticPropsType } from 'next';
import { TFunction } from 'next-i18next';

type Props = {
  // Add custom props here
};

const teamData = (t: TFunction) => {
  return {
    id: 11,
    duration: '1.4s',
    delay: '1.6s',
    img: '/assets/img/hittpr/marina-hitt.jpeg',
    name: t('person.marinaHitt.name'),
    title: t('person.marinaHitt.title'),
    social_links: [
      {
        link: 'https://www.instagram.com/m_hitt_pr/',
        target: '_blank',
        icon: 'fab fa-instagram',
        name: 'Instagram'
      },
      {
        link: 'https://www.youtube.com/channel/UC5Y7mWK-FtD3nh_AG367y-g',
        target: '_blank',
        icon: 'fab fa-youtube',
        name: 'YouTube'
      }
    ],
    home_5: true,
    about_p: true
  };
};

const About = (_props: InferGetStaticPropsType<typeof getStaticProps>) => {
  const { t } = useTranslation(I18N_NS);
  const [team, setTeam] = useState({});
  useEffect(() => {
    const data = teamData(t);
    setTeam(data);
  }, []);

  return (
    <Wrapper>
      {/* <SEO pageTitle={t('common.aboutUs')} /> */}
      <AboutMeMain team={team} />
    </Wrapper>
  );
};

export default About;

export const getStaticProps: GetStaticProps<Props> = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale ?? DEFAULT_LOCALE, [I18N_NS]))
  }
});
