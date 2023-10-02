import Breadcrumb from '../components/common/breadcrumb/breadcrumb';
import SEO from '../components/seo';
import { DEFAULT_LOCALE, I18N_NS } from '../utils/i18n-utils';
import { FooterHittpr, Header, Wrapper } from '../layout';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'react-i18next';

import type { GetStaticProps, InferGetStaticPropsType } from 'next';

type Props = {
  // Add custom props here
};

export default function index(
  _props: InferGetStaticPropsType<typeof getStaticProps>
) {
  const { t } = useTranslation(I18N_NS);

  return (
    <Wrapper>
      <SEO pageTitle={'Not Found'} />
      <Header />
      <Breadcrumb title={'404 Page'} back_home={true} />
      <div className="tp-404-area tp-404-circle sky-bg pt-200 pb-150 fix">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="tp-404-thumb d-flex justify-content-center align-items-center z-index-1">
                <img src="/assets/img/contact/404.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <FooterHittpr />
    </Wrapper>
  );
}

export const getStaticProps: GetStaticProps<Props> = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale ?? DEFAULT_LOCALE, [I18N_NS]))
  }
});
