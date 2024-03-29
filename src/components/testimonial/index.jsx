import React, { useEffect } from 'react';
import { FooterHittpr, Header, Wrapper } from '../../layout';
import { animationCreate } from '../../utils/utils';
import Breadcrumb from '../common/breadcrumb/breadcrumb';
import Cta from '../common/cta/cta';
import TestimonialArea from './testimonial-area';

const Testimonials = () => {
  useEffect(() => {
    setTimeout(() => {
      animationCreate();
    }, 500);
  }, []);

  return (
    <Wrapper>
      <Header />
      <Breadcrumb title={'Отзывы'} />
      <TestimonialArea />
      <Cta />
      <FooterHittpr />
    </Wrapper>
  );
};

export default Testimonials;
