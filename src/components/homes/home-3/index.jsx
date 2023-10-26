import React, { useEffect } from 'react';
import { FooterHittpr, HeaderThree, Wrapper } from '../../../layout';
import { animationCreate } from '../../../utils/utils';
import BlogArea from './blog-area';
import BrandArea from './brand-area';
import CountryArea from './country-area';
import HeroArea from './hero-area';
import ProjectArea from './project-area';
import Services from './services';
import TeamArea from './team-area';

const HomeThree = () => {
  useEffect(() => {
    setTimeout(() => {
      animationCreate();
    }, 500);
  }, []);

  return (
    <Wrapper>
      <HeaderThree />
      <HeroArea />
      <Services />
      <ProjectArea />
      <TeamArea />
      <CountryArea />
      <BrandArea />
      <BlogArea />
      <FooterHittpr />
    </Wrapper>
  );
};

export default HomeThree;
