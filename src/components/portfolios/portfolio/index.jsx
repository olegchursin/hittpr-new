import React, { useEffect } from 'react';
import { FooterHittpr, Header, Wrapper } from '../../../layout';
import { animationCreate } from '../../../utils/utils';
import Breadcrumb from '../../common/breadcrumb/breadcrumb';
import PortfolioArea from './portfolio-area';

const Portfolio = () => {
  useEffect(() => {
    setTimeout(() => {
      animationCreate();
    }, 500);
  }, []);

  return (
    <Wrapper>
      <Header />
      <Breadcrumb title={'Материалы'} />
      <PortfolioArea />
      <FooterHittpr />
    </Wrapper>
  );
};

export default Portfolio;
