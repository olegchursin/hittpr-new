import React, { useEffect } from 'react';
import { FooterHittpr, Header, Wrapper } from '../../layout';
import { animationCreate } from '../../utils/utils';
import Breadcrumb from '../common/breadcrumb/breadcrumb';
import AccordionArea from './accordion-area';
import ServiceDetailsArea from './service-details-area';

const ServiceDetails = ({ service }) => {
  useEffect(() => {
    setTimeout(() => {
      animationCreate();
    }, 500);
  }, []);

  return (
    <Wrapper>
      <Header />
      <Breadcrumb title={service?.title ? service?.title : 'Service Details'} />
      <ServiceDetailsArea
        img_src={service?.img_lg}
        title={service?.subtitle}
        text_1={service?.text_1}
        text_2={service?.text_2}
        text_3={service?.text_3}
      />
      <AccordionArea
        title={service?.additional_info_title}
        items={service?.additional_info}
      />
      <FooterHittpr />
    </Wrapper>
  );
};

export default ServiceDetails;
