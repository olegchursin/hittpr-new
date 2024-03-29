import React, { useEffect } from 'react';
import { FooterHittpr, HeaderSix, Wrapper } from '../../../layout';
import { animationCreate } from '../../../utils/utils';
import Breadcrumb from '../../common/breadcrumb/breadcrumb';
import MasonryItems from './masonry-items';

const PortfolioMasonry = () => {

  useEffect(() => {
    setTimeout(() => {
      animationCreate();
    }, 500);
  }, []);

  return (
    <Wrapper>
      <HeaderSix />
      <Breadcrumb title={'Portfolio Masonry'} />
      <MasonryItems/>
      <FooterHittpr />
    </Wrapper>
  );
};

export default PortfolioMasonry;