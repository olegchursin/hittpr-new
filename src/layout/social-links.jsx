import React from 'react';

const social_links = [
  { link: 'mailto:pr@hittpr.com', target: '_blank', icon: 'fa fa-envelope' },
  {
    link: 'https://t.me/hitt_pr_nyc',
    target: '_blank',
    icon: 'fab fa-telegram'
  },
  {
    link: 'https://www.youtube.com/channel/UC5Y7mWK-FtD3nh_AG367y-g',
    target: '_blank',
    icon: 'fab fa-youtube'
  }
];

const hero_socials = [
  {
    num: 1,
    link: 'http://facebook.com',
    target: '_blank',
    icon: 'fab fa-facebook-f social-icon-1',
    title: 'Facebook'
  },
  {
    num: 3,
    link: 'https://www.youtube.com/',
    target: '_blank',
    icon: 'fab fa-youtube social-icon-3',
    title: 'Youtube'
  },
  {
    num: 2,
    link: 'http://twitter.com',
    target: '_blank',
    icon: 'fab fa-twitter social-icon-2',
    title: 'Twitter'
  }
];

export const HeroSocials = ({ hide_title = false }) => {
  return (
    <>
      {hero_socials.map((l, i) => (
        <a
          key={i}
          href={l.link}
          className={`social-icon-${l.num}`}
          target={l.target ? l.target : ''}
        >
          <i className={l.icon}></i>
          {hide_title ? '' : l.title}
        </a>
      ))}
    </>
  );
};

const SocialLinks = () => {
  return (
    <>
      {social_links.map((l, i) => (
        <a key={i} href={l.link} target={l.target ? l.target : ''}>
          <i className={l.icon}></i>
        </a>
      ))}
    </>
  );
};

export default SocialLinks;
