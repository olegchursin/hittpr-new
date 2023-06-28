import React from 'react';
import { useRouter } from 'next/router';
import SEO from '../../components/seo';
import { Wrapper } from '../../layout';
import ServiceDetailsMain from '../../components/service-details';
import { services_items } from '../../components/homes/home/services';

const ServiceDynamicDetails = () => {
  const router = useRouter();
  const { id } = router.query;
  const service_item = services_items.find(
    item => Number(item.id) === Number(id)
  );
  return (
    <Wrapper>
      <SEO pageTitle={'Service Details'} />
      <ServiceDetailsMain service={service_item} />
    </Wrapper>
  );
};

export default ServiceDynamicDetails;

export async function getServerSideProps(context) {
  return {
    props: {}
  };
}
