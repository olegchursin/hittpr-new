import React, { useEffect } from 'react';
import { FooterHittpr, Header, Wrapper } from '../../../layout';
import { animationCreate } from '../../../utils/utils';
import Breadcrumb from '../../common/breadcrumb/breadcrumb';
import ServiceArea from './service-area';

const Service = () => {
  useEffect(() => {
    setTimeout(() => {
      animationCreate();
    }, 500);
  }, []);

  return (
    <Wrapper>
      <Header />
      <Breadcrumb title={'PR'} />
      <ServiceArea />
      <FooterHittpr />
    </Wrapper>
  );
};

export default Service;
