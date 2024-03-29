import React, { useEffect } from 'react';
import { FooterHittpr, Wrapper } from '../../../layout';
import { animationCreate } from '../../../utils/utils';
import BrandArea from './brand-area';
import Hero from './hero';
import Materials from './materials';
import ServicesArea from './services-area';
import Services from './services';
import HotHitNewYork from './hot-hit-ny';
import Testimonials from '../../common/testimonials';

const Home = () => {
  useEffect(() => {
    setTimeout(() => {
      animationCreate();
    }, 500);
  }, []);

  return (
    <Wrapper>
      <Hero />
      <HotHitNewYork />
      <Materials />
      <Services />
      <BrandArea />
      <ServicesArea />
      <Testimonials />
      <FooterHittpr />
    </Wrapper>
  );
};

export default Home;
