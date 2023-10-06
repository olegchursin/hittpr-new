import React, { useEffect } from 'react';
import { FooterHittpr, HeaderSix, Wrapper } from '../../../layout';
import { animationCreate } from '../../../utils/utils';
import Breadcrumb from '../../common/breadcrumb/breadcrumb';
import PortfolioItems from './portfolio-items';

const PortfolioTwo = () => {

  useEffect(() => {
    setTimeout(() => {
      animationCreate();
    }, 500);
  }, []);

  return (
    <Wrapper>
     <HeaderSix/>
     <Breadcrumb title={'Portfolio 2 Columns'} />
      <PortfolioItems/>
     <FooterHittpr/>
    </Wrapper>
  );
};

export default PortfolioTwo;