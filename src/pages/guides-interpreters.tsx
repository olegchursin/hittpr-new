import PortfolioDetailsMain from '../components/portfolios/portfolio-details';
import SEO from '../components/seo';
import { DEFAULT_LOCALE, I18N_NS } from '../utils/i18n-utils';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'react-i18next';
import { Wrapper } from '../layout';

import type { GetStaticProps, InferGetStaticPropsType } from 'next';

type Props = {
  // Add custom props here
};

const case_item = {
  id: 'guides-interpreters',
  img: '/assets/img/hittpr/projects/guides.jpg',
  title: 'ГИДЫ, переводчики, преподаватели',
  subtitle: 'Материалы',
  category: { label: 'Services', href: '/pr/services' },
  links: [
    'https://hothitnewyork.com/dmitri-petrov/',
    'https://hothitnewyork.com/languages-and-psychology/',
    'https://www.kiz.ru/content/stil-zhizni/svobodnoe-vremya/kak-nauchitsya-legko-i-bez-stressa-govorit-na-italyanskom/',
    'https://www.forumdaily.com/nyguide/?fbclid=IwAR1VuvrjsApf5cKl8SNDDYz2u4piv0M_creskIQvsy-QNLRnCE0id70OrK0'
  ],
  pdfs: [
    {
      title: '10 лайфхаков для желяющих посетить Италию',
      url: 'https://drive.google.com/file/d/1UtJKzkVMysMckZ_iiJmucoSnYPQLbtGe/view?usp=sharing'
    }
  ],
  renderMaterials: false,
  materials: [],
  description: 'ГИДЫ, переводчики, преподаватели'
};

export default function index(
  _props: InferGetStaticPropsType<typeof getStaticProps>
) {
  const { t } = useTranslation(I18N_NS);

  return (
    <Wrapper>
      <SEO pageTitle={t('common.guides')} />
      <PortfolioDetailsMain case_item={case_item} />
    </Wrapper>
  );
}

export const getStaticProps: GetStaticProps<Props> = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale ?? DEFAULT_LOCALE, [I18N_NS]))
  }
});
