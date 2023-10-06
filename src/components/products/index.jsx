import React, { useEffect } from 'react';
import { FooterHittpr, HeaderSix, Wrapper } from '../../layout';
import { animationCreate } from '../../utils/utils';
import Breadcrumb from '../common/breadcrumb/breadcrumb';
import ProductsArea from './product-area';


const Products = () => {
  useEffect(() => {
    setTimeout(() => {
      animationCreate();
    }, 500);
  }, []);

  return (
    <Wrapper>
      <HeaderSix />
      <Breadcrumb title={'Collax Product'} />
      <ProductsArea/>
      <FooterHittpr />
    </Wrapper>
  );
};

export default Products;