import React, { useEffect } from 'react';
import { FooterHittpr, HeaderSix, Wrapper } from '../../layout';
import { animationCreate } from '../../utils/utils';
import Breadcrumb from '../common/breadcrumb/breadcrumb';
import JobArea from './job-area';
import Testimonials from '../common/testimonials';

const Job = () => {
  useEffect(() => {
    setTimeout(() => {
      animationCreate();
    }, 500);
  }, []);
  return (
    <Wrapper>
      <HeaderSix />
      <Breadcrumb title={'Collax Job List'} />
      <JobArea />
      <Testimonials />
      <FooterHittpr />
    </Wrapper>
  );
};

export default Job;
