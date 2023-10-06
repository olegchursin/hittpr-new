import SEO from '../components/seo';
import TestimonialsMain from '../components/testimonial';
import { DEFAULT_LOCALE, I18N_NS } from '../utils/i18n-utils';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'react-i18next';

import type { GetStaticProps, InferGetStaticPropsType } from 'next';

type Props = {
  // Add custom props here
};

export default function Testimonials(
  _props: InferGetStaticPropsType<typeof getStaticProps>
) {
  const { t } = useTranslation(I18N_NS);

  return (
    <>
      <SEO pageTitle={t('common.testimonials')} />
      <TestimonialsMain />
    </>
  );
}

export const getStaticProps: GetStaticProps<Props> = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale ?? DEFAULT_LOCALE, [I18N_NS]))
  }
});
