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
  id: 'patricia',
  img: '/assets/img/hittpr/projects/patricia-2.jpg',
  title: 'Patricia Field',
  subtitle: 'Материалы',
  category: { label: 'Lifestyle', href: '/pr/fashion' },
  renderMaterials: false,
  materials: [
    {
      id: 'two',
      show: true,
      title: 'ПЭТ В БОЛЬШОМ ГОРОДЕ',
      desc: 'ПРЕЗЕНТАЦИЯ КНИГИ ДИЗАЙНЕРА-КОСТЮМЕРА, ПОДАРИВШЕЙ НАМ САМЫХ ЯРКИХ ЭКРАННЫХ ГЕРОИНЬ.',
      url: 'https://hothitnewyork.com/pat-in-the-city/'
    },
    {
      id: 'five',
      title: 'Patricia Field: Pat in the city',
      desc: 'PAT IN THE CITY BOOK EVENT (YouTube)',
      url: 'https://www.youtube.com/watch?v=Jd9LVVhne5A'
    },
    {
      id: 'one',
      title: 'ПАТРИШИЯ ФИЛД: “Я ОЧЕНЬ СЧАСТЛИВА В НЬЮ-ЙОРКЕ”',
      url: 'https://hothitnewyork.com/patricia-field/'
    },
    {
      id: 'three',
      title: 'Патришия Филд: «Мой гардероб – это единый оркестр»',
      desc: '',
      url: 'https://www.kiz.ru/content/stil-zhizni/svobodnoe-vremya/patrishiya-fild-moy-garderob-eto-edinyy-orkestr/'
    },
    {
      id: 'four',
      title:
        '«Я хочу приехать в Россию и потусоваться с вами»: художник по костюмам и стилист Патриция Филд',
      desc: '',
      url: 'https://www.glamour.ru/fashion-news/ya-hochu-priehat-v-rossiyu-i-potusovatsya-s-vami-hudozhnik-po-kostyumam-i-stilist-patriciya-fild'
    }
  ],
  links: [
    'https://www.glamour.ru/fashion-news/ya-hochu-priehat-v-rossiyu-i-potusovatsya-s-vami-hudozhnik-po-kostyumam-i-stilist-patriciya-fild',
    'https://www.kiz.ru/content/stil-zhizni/svobodnoe-vremya/patrishiya-fild-moy-garderob-eto-edinyy-orkestr/',
    'https://drive.google.com/file/d/15hf_xnVLxqkbH8sSmISKNhXPQQm3xqEN/view',
    'https://hothitnewyork.com/patricia-field/',
    'https://hothitnewyork.com/pat-in-the-city/',
    'https://youtu.be/Jd9LVVhne5A',
    'https://docs.google.com/document/d/1V33Nsdj5NrwFZ-kE9qaJAQ6nXA5aysoJ/edit?usp=sharing&ouid=108433140789937449811&rtpof=true&sd=true',
    'https://docs.google.com/document/d/1lAqei2AUsTvD2mqyATZ04RZHf8fuA9hB/edit?usp=sharing&ouid=108433140789937449811&rtpof=true&sd=true'
  ],
  description:
    ' Патришия Филд (Patricia Field)  – американский художник по костюмам, стилист, модный дизайнер, лауреат двух премий “Эмми” и номинант на “Оскар”. Широкая публика ассоциирует ее с такими сериалами, как «Секс в большом городе” (Sex and the city), «Эмили в Париже» (Emily in Paris) и кинокартиной “Дьявол носит Prada” (The Devil Wears Prada).'
};

export default function index(
  _props: InferGetStaticPropsType<typeof getStaticProps>
) {
  const { t } = useTranslation(I18N_NS);

  return (
    <Wrapper>
      <SEO pageTitle={t('person.patricia.name')} />
      <PortfolioDetailsMain case_item={case_item} />
    </Wrapper>
  );
}

export const getStaticProps: GetStaticProps<Props> = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale ?? DEFAULT_LOCALE, [I18N_NS]))
  }
});
