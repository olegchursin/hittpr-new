import React, { useEffect } from 'react';
import { FooterHittpr, Header, Wrapper } from '../../../layout';
import { animationCreate } from '../../../utils/utils';
import Breadcrumb from '../../common/breadcrumb/breadcrumb';
import TestimonialArea from '../../homes/home-4/testimonial-area';
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
      <TestimonialArea style_2={true} />
      <FooterHittpr />
    </Wrapper>
  );
};

export default Service;
