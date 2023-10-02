import React, { useEffect } from 'react';
import { FooterHittpr, HeaderSix, Wrapper } from '../../../layout';
import { animationCreate } from '../../../utils/utils';
import Breadcrumb from '../../common/breadcrumb/breadcrumb';
import PortfolioItems from './portfolio-items';

const PortfolioThree = () => {

  useEffect(() => {
    setTimeout(() => {
      animationCreate();
    }, 500);
  }, []);

  return (
    <Wrapper>
      <HeaderSix />
      <Breadcrumb title={'Portfolio 3 Columns'} />
      <PortfolioItems />
      <FooterHittpr />
    </Wrapper>
  );
};

export default PortfolioThree;