import SEO from '../../components/seo';
import ServiceDetailsMain from '../../components/service-details';
import { DEFAULT_LOCALE, I18N_NS } from '../../utils/i18n-utils';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { services_data } from '../../data';
import { useTranslation } from 'react-i18next';
import { Wrapper } from '../../layout';

import type { GetStaticProps, InferGetStaticPropsType } from 'next';

type Props = {
  // Add custom props here
};

const service_item = services_data[1];

export default function index(
  _props: InferGetStaticPropsType<typeof getStaticProps>
) {
  const { t } = useTranslation(I18N_NS);

  return (
    <Wrapper>
      <SEO pageTitle={'Service Details'} />
      <ServiceDetailsMain service={service_item} />
    </Wrapper>
  );
}

export const getStaticProps: GetStaticProps<Props> = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale ?? DEFAULT_LOCALE, [I18N_NS]))
  }
});
