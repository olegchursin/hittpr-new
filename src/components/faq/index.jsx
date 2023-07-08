import React, { useEffect } from 'react';
import { FooterThree, HeaderSix, Wrapper } from '../../layout';
import { animationCreate } from '../../utils/utils';
import Breadcrumb from '../common/breadcrumb/breadcrumb';
import Testimonials from '../common/testimonials';
import FaqArea from './faq-area';

const Faq = () => {
  useEffect(() => {
    setTimeout(() => {
      animationCreate();
    }, 500);
  }, []);

  return (
    <Wrapper>
      <HeaderSix />
      <Breadcrumb title={'Ask Question'} />
      <FaqArea />
      <Testimonials />
      <FooterThree />
    </Wrapper>
  );
};

export default Faq;
