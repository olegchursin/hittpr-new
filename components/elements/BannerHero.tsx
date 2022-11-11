import { FC } from 'react';

interface BannerHeroProps {
  readonly title: string;
  readonly subtitle: string;
}

const BannerHero: FC<BannerHeroProps> = ({ title, subtitle }) => {
  return (
    <div className="banner-hero banner-breadcrums">
      <div className="container text-center">
        <h1 className="text-heading-2 color-gray-1000 mb-20">{title}</h1>
        <p className="text-body-text color-gray-500">{subtitle}</p>
      </div>
    </div>
  );
};

export default BannerHero;
