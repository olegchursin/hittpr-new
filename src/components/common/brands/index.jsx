import React from 'react';

const brand_images = [
  '/assets/img/hittpr/brand/cosmo.png',
  '/assets/img/hittpr/brand/glamour.png',
  '/assets/img/hittpr/brand/hbo.png',
  '/assets/img/hittpr/brand/netflix.png',
  '/assets/img/hittpr/brand/lofficiel.png',
  '/assets/img/hittpr/brand/psychologies-2.png',
  '/assets/img/hittpr/brand/hhny.png'
];

const Brands = () => {
  return (
    <div className="d-flex gap-4 align-items-center justify-content-center tp-brand-wrapper">
      {brand_images.map((brand, i) => (
        <div key={i}>
          <div className="tp-brand-icon text-center">
            <img src={brand} alt="" />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Brands;
