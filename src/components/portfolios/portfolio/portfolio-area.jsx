import React, { useState } from 'react';
import { PopupArrow } from '../../../svg';
import ImageLightBox from '../../common/modals/image-lightbox';
import { useRouter } from 'next/router';

const portfolio_data = [
  {
    img: '/assets/img/hittpr/projects/patricia-sofa.webp',
    url: '/patricia',
    category: 'Lifestyle'
  },
  {
    img: '/assets/img/hittpr/projects/portfolio-cena.jpg',
    url: '/john-cena',
    category: 'Lifestyle'
  },
  {
    img: '/assets/img/hittpr/projects/portfolio-kovalev.jpg',
    url: '/kovalev',
    category: 'Sport'
  },
  {
    img: '/assets/img/hittpr/projects/portfolio-factory.jpg',
    url: '/factory-fight',
    category: 'Sport'
  },
  {
    img: '/assets/img/hittpr/projects/portfolio-sports.jpg',
    url: '/sport-marina-hitt',
    category: 'Sport'
  }
];
const imagePerRow = 4;

const PortfolioArea = () => {
  const router = useRouter();
  const [category, setCategory] = useState('All');
  const cate_items =
    category !== 'All'
      ? portfolio_data.filter(item => item.category === category)
      : portfolio_data;
  const [items, setItems] = useState(cate_items);
  const [next, setNext] = useState(imagePerRow);
  // photoIndex
  const [photoIndex, setPhotoIndex] = useState(null);
  // image open state
  const [open, setOpen] = useState(false);
  // handleImagePopup
  const handleImagePopup = index => {
    setPhotoIndex(index);
    setOpen(true);
  };
  // handleLoadData
  const handleLoadData = () => {
    setNext(value => value + 2);
  };
  const handleNavigation = (path = '/') => {
    router.push(path);
  };
  // images
  const images = items.map(img => img.img);
  // all categories
  const all_categories = [
    'All',
    ...new Set(portfolio_data.map(c => c.category))
  ];
  // handleCategory
  const handleCategory = category => {
    setNext(imagePerRow);
    setCategory(category);
    setItems(
      category !== 'All'
        ? portfolio_data.filter(item => item.category === category)
        : portfolio_data
    );
  };

  return (
    <>
      <div className="tp-project-area pt-120 pb-120 p-relative">
        <div className="container-fluid p-0">
          <div className="row g-0 justify-content-center">
            <div className="col-10 text-center">
              <div className="tp-project-tab-button masonary-menu mb-80">
                {all_categories.map((c, i) => (
                  <button
                    key={i}
                    className={`${c === category ? 'active' : ''}`}
                    onClick={() => handleCategory(c)}
                  >
                    <span>{c}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>
          <div className="row grid gx-0 port-space">
            {items?.slice(0, next)?.map((item, i) => (
              <div key={i} className="col-xl-6 col-lg-6 col-md-6">
                <div className="bp-project-item p-relative">
                  <div className="bp-project-img w-img fix">
                    <img src={item.img} alt="" />
                  </div>
                  <div
                    className="bp-project-item-link"
                    onClick={() => handleNavigation(item.url)}
                  >
                    <span style={{ cursor: 'pointer' }}>
                      <PopupArrow />
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          {next < items.length && (
            <div className="row g-0">
              <div className="col-12">
                <div className="tp-project-button text-center">
                  <button onClick={handleLoadData} className="tp-btn-yellow">
                    Загрузить еще
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* image light box start */}
      <ImageLightBox
        images={images}
        open={open}
        setOpen={setOpen}
        photoIndex={photoIndex}
        setPhotoIndex={setPhotoIndex}
      />
      {/* image light box end */}
    </>
  );
};

export default PortfolioArea;
