import React from 'react';
import SEO from '../../components/seo';
import { Wrapper } from '../../layout';
import AboutMeMain from '../../components/about-me';

const team = {
  id: 11,
  duration: '1.4s',
  delay: '1.6s',
  img: '/assets/img/hittpr/marina-hitt.jpeg',
  name: 'Марина Хитт',
  title: 'Founder and CEO',
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
      name: 'Youtube'
    }
  ],
  home_5: true,
  about_p: true
};

const index = () => {
  return (
    <Wrapper>
      <SEO pageTitle={'About'} />
      <AboutMeMain team={team} />
    </Wrapper>
  );
};

export default index;
