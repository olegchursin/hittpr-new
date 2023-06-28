import React, { useEffect } from 'react';
import { FooterThree, Header, Wrapper } from '../../../layout';
import { animationCreate } from '../../../utils/utils';
import BrandArea from './brand-area';
import HeroArea from './hero-area';
import ProjectArea from './project-area';
import ServicesArea from './services-area';
import Services from './services';
import TestimonialArea from './testimonial-area';
import NewsLetter from './newsletter';

const Home = () => {
  useEffect(() => {
    setTimeout(() => {
      animationCreate();
    }, 500);
  }, []);
  return (
    <Wrapper>
      <Header />
      <HeroArea />
      <Services />
      <BrandArea />
      <ServicesArea />
      <NewsLetter />
      <ProjectArea />
      <TestimonialArea />
      <FooterThree />
    </Wrapper>
  );
};

export default Home;
