import Image from 'next/image';
import React from 'react';

const logos = [
  {
    id: 'cosmo',
    width: 150,
    height: 30,
    url: '/assets/imgs/logos/cosmo.png',
    alt: ''
  },
  {
    id: 'lofficiel',
    width: 150,
    height: 30,
    url: '/assets/imgs/logos/lofficiel.svg',
    alt: 'lofficiel'
  },
  {
    id: 'glamour',
    width: 150,
    height: 30,
    url: '/assets/imgs/logos/glamour.svg',
    alt: 'glamour'
  },
  {
    id: 'netflix',
    width: 150,
    height: 30,
    url: '/assets/imgs/logos/netflix.svg',
    alt: 'netflix'
  },
  {
    id: 'psychologies',
    width: 150,
    height: 30,
    url: '/assets/imgs/logos/psyco.png',
    alt: 'psychologies'
  },
  {
    id: 'HBO',
    width: 150,
    height: 30,
    url: '/assets/imgs/logos/hbo.svg',
    alt: 'HBO'
  }
];

const Brands = () => {
  return (
    <div className="section-box overflow-visible mt-70">
      <div className="container">
        <div className="row justify-content-md-center">
          {logos.map(logo => {
            return (
              <div
                key={logo.alt}
                className="col-lg-2 col-md-3 col-sm-4 col-6 text-center"
              >
                <div className="item-logo box-hover-shadow hover-up">
                  <Image
                    height={logo.height}
                    width={logo.width}
                    alt={logo.alt}
                    src={logo.url}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Brands;
