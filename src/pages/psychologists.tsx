import PortfolioDetailsMain from '../components/portfolios/portfolio-details';
import SEO from '../components/seo';
import { Wrapper } from '../layout';

const case_item = {
  id: 'psychologists',
  img: '/assets/img/hittpr/projects/psychologists-2.jpg',
  title: 'Психологи',
  subtitle: 'Материалы',
  category: { label: 'Services', href: '/pr/services' },
  sectionedLinks: [
    {
      sectionTitle: 'Наталья Андреина',
      sectionSubtitle: 'Профориентолог, психолог, коуч ICU, ECA, NLP-мастер',
      sectionLinks: [
        'https://www.psychologies.ru/standpoint/prokachat-myishlenie-vozmojnostyami/',
        'https://www.psychologies.ru/standpoint/7-mifov-o-gipnoze/',
        'https://www.7ya.ru/article/Vybirayut-vuz-nachinayut-uchitsya-i-brosayut-Kak-jetogo-izbezhat/'
      ],
      sectionPdfs: [
        {
          title: 'Искусственная жизнь',
          url: 'https://drive.google.com/file/d/1b-R_dTi-t_7IA3iC5rYXgyLPyC5z5_xo/view?usp=sharing'
        },
        {
          title: 'Восприятие собственной внешности',
          url: 'https://drive.google.com/file/d/1jUSIeLepgpOdXqAArKDl8K1HCBtYMHXa/view?usp=sharing'
        }
      ]
    }
  ],
  renderMaterials: false,
  materials: [],
  description: 'Психологи'
};

const Psychologists = () => {
  return (
    <Wrapper>
      <SEO pageTitle={'Психологи'} />
      <PortfolioDetailsMain case_item={case_item} />
    </Wrapper>
  );
};

export default Psychologists;
