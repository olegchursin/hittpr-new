import React, { useEffect } from 'react';
import { FooterThree, Header, Wrapper } from '../../../layout';
import { animationCreate } from '../../../utils/utils';
import Breadcrumb from '../../common/breadcrumb/breadcrumb';
import CtaTwo from '../../common/cta/cta-2';
import TestimonialArea from '../../homes/home-4/testimonial-area';
import Services from '../../homes/home/services';

const ServiceThree = () => {
  useEffect(() => {
    setTimeout(() => {
      animationCreate();
    }, 500);
  }, []);

  return (
    <Wrapper>
      <Header />
      <Breadcrumb title={'Обучение'} />
      <div className="mb-80">
        <Services />
      </div>
      <TestimonialArea style_2={true} />
      <FooterThree />
    </Wrapper>
  );
};

export default ServiceThree;
