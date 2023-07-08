import React, { useEffect } from 'react';
import { FooterThree, Header, Wrapper } from '../../../layout';
import { animationCreate } from '../../../utils/utils';
import BrandArea from './brand-area';
import Hero from './hero';
import Materials from './materials';
import ServicesArea from './services-area';
import Services from './services';
import Testimonials from './testimonials';
import HotHitNewYork from './hot-hit-ny';

const Home = () => {
  useEffect(() => {
    setTimeout(() => {
      animationCreate();
    }, 500);
  }, []);
  return (
    <Wrapper>
      <Header />
      <Hero />
      <HotHitNewYork />
      <Materials />
      <Services />
      <BrandArea />
      <ServicesArea />
      <Testimonials />
      <FooterThree />
    </Wrapper>
  );
};

export default Home;
