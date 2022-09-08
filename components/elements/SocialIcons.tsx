import Link from 'next/link';

const icons = [
  {
    id: 'fb',
    icon: 'icon-facebook',
    href: 'https://facebook.com',
    display: true
  },
  {
    id: 'tw',
    icon: 'icon-twitter',
    href: 'https://twitter.com',
    display: true
  },
  {
    id: 'ig',
    icon: 'icon-instagram',
    href: 'https://www.instagram.com',
    display: true
  },
  {
    id: 'li',
    icon: 'icon-linkedin',
    href: 'https://www.linkedin.com',
    display: false
  }
];

const SocialIcons = () => {
  return (
    <div className="col-md-6 text-center text-lg-end text-md-end">
      <div className="footer-social">
        {icons.map(icon => {
          const renderedIcon = icon.display ? (
            <Link href={icon.href}>
              <a className={`icon-socials ${icon.icon}`}></a>
            </Link>
          ) : null;
          return renderedIcon;
        })}
      </div>
    </div>
  );
};

export default SocialIcons;
