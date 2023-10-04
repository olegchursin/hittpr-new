import SEO from '../../components/seo';
import ServiceDetailsMain from '../../components/service-details';
import { DEFAULT_LOCALE, I18N_NS } from '../../utils/i18n-utils';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { getServicesItems } from '../../components/homes/home/services';
import { useRouter } from 'next/router';
import { Wrapper } from '../../layout';

import type { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import { useTranslation } from 'react-i18next';

type Props = {
  // Add custom props here
};

const ServiceDynamicDetails = (
  _props: InferGetServerSidePropsType<typeof getServerSideProps>
) => {
  const router = useRouter();
  const { t } = useTranslation(I18N_NS);
  const { id } = router.query;
  const services_items = getServicesItems(t);
  const service_item = services_items.find(
    item => Number(item.id) === Number(id)
  );
  return (
    <Wrapper>
      <SEO pageTitle={service_item.title} />
      <ServiceDetailsMain service={service_item} />
    </Wrapper>
  );
};

export default ServiceDynamicDetails;

export const getServerSideProps: GetServerSideProps<Props> = async ({
  locale
}) => ({
  props: {
    ...(await serverSideTranslations(locale ?? DEFAULT_LOCALE, [I18N_NS]))
  }
});
