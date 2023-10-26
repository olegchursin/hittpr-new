import React, { useEffect } from 'react';
import { FooterHittpr, HeaderSix, Wrapper } from '../../../layout';
import { animationCreate } from '../../../utils/utils';
import Breadcrumb from '../../common/breadcrumb/breadcrumb';
import CtaTwo from '../../common/cta/cta-2';
import CaseArea from '../../common/recent-case-studies';
import ServiceArea from './service-area';

const Service = () => {
  useEffect(() => {
    setTimeout(() => {
      animationCreate();
    }, 500);
  }, []);

  return (
    <Wrapper>
      <HeaderSix />
      <Breadcrumb title={'Service 01'} />
      <ServiceArea />
      <CaseArea />
      <CtaTwo />
      <FooterHittpr />
    </Wrapper>
  );
};

export default Service;
