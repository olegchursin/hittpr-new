import React, { useEffect } from 'react';
import { FooterHittpr, HeaderSix, Wrapper } from '../../layout';
import { animationCreate } from '../../utils/utils';
import Breadcrumb from '../common/breadcrumb/breadcrumb';
import WishlistArea from './wishlist-area';



const Wishlist = () => {

  useEffect(() => {
    setTimeout(() => {
      animationCreate();
    }, 500);
  }, []);

  return (
    <Wrapper>
      <HeaderSix />
      <Breadcrumb title={'My Wishlist'} />
      <WishlistArea/>
      <FooterHittpr />
    </Wrapper>
  );
};

export default Wishlist;