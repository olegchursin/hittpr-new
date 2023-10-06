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
  id: 'doctors',
  img: '/assets/img/hittpr/projects/doctors.jpg',
  title: 'Врачи',
  subtitle: 'Материалы',
  category: { label: 'Services', href: '/pr/services' },
  sectionedLinks: [
    {
      sectionTitle: 'Вилор Шпитальник',
      sectionSubtitle: 'Психиатр, врач высшей американской категории.',
      sectionLinks: [
        'https://www.psychologies.ru/articles/leto-samyiy-stressovyiy-sezon/',
        'https://hothitnewyork.com/psychiatrist_vilor_shpitalnik/',
        'https://woman.forumdaily.com/kompleks-kotoryj-byvaet-u-vsex-kak-ne-slomat-sudbu-rebenku/',
        'https://woman.forumdaily.com/pereezd-v-ssha-kak-pomoch-rebenku-adaptirovatsya/',
        'https://woman.forumdaily.com/pereezd-v-ssha-i-problemy-adaptacii-chto-ozhidat-i-kak-spravitsya/',
        'https://woman.forumdaily.com/kak-adaptiruyutsya-v-ssha-pozhilye-roditeli/'
      ],
      sectionPdfs: [
        {
          title: 'Женская ненависть — путь к фригидности',
          url: 'https://drive.google.com/file/d/1DqpcY8wZhb1nEAX48tKYx-jqob-sTFk8/view?usp=sharing'
        },
        {
          title: 'Как реагировать на эксгибициониста?',
          url: 'https://drive.google.com/file/d/1u5oYrmvHsv7kPnbxJr1NvW9pBk2I0YNe/view?usp=sharing'
        }
      ]
    },
    {
      sectionTitle: 'Дарья Патракеева',
      sectionSubtitle: 'Врач-офтальмолог',
      sectionLinks: [
        'https://www.7ya.ru/article/Kak-nosit-kontaktnye-linzy-pravilno-7-voprosov-oftalmologu/#ocenka',
        'https://www.kiz.ru/content/zdorove/novosti/6-mifov-o-kontaktnykh-linzakh/'
      ],
      sectionPdfs: [
        {
          title: 'Макияж: безопасность для глаз',
          url: 'https://drive.google.com/file/d/1BQ7eoFpt5IQzz4WI8jZgGINA7r0Ebash/view?usp=sharing'
        }
      ]
    }
  ],
  links: [],
  pdfs: [],
  renderMaterials: false,
  materials: [],
  description: 'Врачи'
};

export default function Doctors(
  _props: InferGetStaticPropsType<typeof getStaticProps>
) {
  const { t } = useTranslation(I18N_NS);

  return (
    <Wrapper>
      <SEO pageTitle={t('common.doctors')} />
      <PortfolioDetailsMain case_item={case_item} />
    </Wrapper>
  );
}

export const getStaticProps: GetStaticProps<Props> = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale ?? DEFAULT_LOCALE, [I18N_NS]))
  }
});
