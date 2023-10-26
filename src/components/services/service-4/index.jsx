import React, { useEffect } from 'react';
import { FooterHittpr, HeaderSix, Wrapper } from '../../../layout';
import { animationCreate } from '../../../utils/utils';
import Breadcrumb from '../../common/breadcrumb/breadcrumb';
import CtaTwo from '../../common/cta/cta-2';
import CaseArea from '../../common/recent-case-studies';
import ServicesItems from './services-items';

const ServiceFour = () => {
  useEffect(() => {
    setTimeout(() => {
      animationCreate();
    }, 500);
  }, []);

  return (
    <Wrapper>
      <HeaderSix />
      <Breadcrumb title={'Service 04'} />
      <ServicesItems />
      <CaseArea padd={'pt-130'} />
      <CtaTwo />
      <FooterHittpr />
    </Wrapper>
  );
};

export default ServiceFour;
