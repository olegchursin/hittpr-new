import PortfolioDetailsMain from '../components/portfolios/portfolio-details';
import SEO from '../components/seo';
import { Wrapper } from '../layout';

const case_item = {
  id: 'doctors',
  img: '/assets/img/hittpr/projects/coaches.jpg',
  title: 'Коучи, финансовые эксперты',
  subtitle: 'Материалы',
  category: { label: 'Services', href: '/pr/services' },
  sectionedLinks: [
    {
      sectionTitle: 'Анна Калантерная',
      sectionSubtitle:
        'Основатель Международной тренинг-студии Анны Калантерной, бизнес-тренер, коуч, стендап-психолог с опытом работы более 20 лет.',
      sectionLinks: [
        'https://www.psychologies.ru/standpoint/beg-po-krugu-chto-meshaet-vam-dobitsya-uspeha/',
        'https://lisa.ru/psichologia/535862-bolezni-ot-zavisti-pochemu-nas-mozhet-podkosit-chuzhoj-uspekh/',
        'https://www.7ya.ru/article/Perestante-brat-kredity-i-i-nachnete-privlekat-dengi/',
        'https://woman.forumdaily.com/kak-mechtat-chtoby-srabotalo/'
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
    },
    {
      sectionTitle: 'Седа Каспарова',
      sectionSubtitle: 'Тренер по речевому имиджу',
      sectionLinks: [
        'https://www.kiz.ru/content/psikhologiya/lichnoe/nizkiy-i-vysokiy-tembr-kak-nash-golos-vliyaet-na-lichnuyu-zhizn/',
        'https://www.7ya.ru/article/Kak-preodolet-strah-publichnogo-vystupleniya/',
        'https://www.psychologies.ru/standpoint/lider-govorit-kak-zastavit-lyudey-uslyishat-vas/',
        'https://www.psychologies.ru/standpoint/izbavitsya-ot-slov-parazitov-i-govorit-effektno-kak/',
        'https://www.psychologies.ru/standpoint/kak-sdelat-golos-seksualnyim/'
      ]
    },
    {
      sectionTitle: 'Ада Кондэ',
      sectionSubtitle:
        'Мотивационный спикер, основатель проекта об осознанном управлении жизнью',
      sectionLinks: [
        'https://hothitnewyork.com/ada-konde/',
        'https://woman.forumdaily.com/schaste-s-inostrancem-preodolevaya-to-chto-ne-stoit-preodolevat/',
        'https://www.thevoicemag.ru/lifestyle/stil-zhizni/v-poiskah-svoego-lica-odin-na-odin-s-dermatilomaniey/',
        'https://www.psychologies.ru/articles/dermatilomaniya-kak-ugomonit-ruki/'
      ],
      sectionPdfs: [
        {
          title: 'Дерматиломания: как угомонить руки',
          url: 'https://drive.google.com/file/d/1QVT-LxM7t9js9F57sQeEShqSuzIUyV4a/view?usp=sharing'
        }
      ]
    }
  ],
  renderMaterials: false,
  materials: [],
  description: 'Коучи, финансовые эксперты'
};

const Coaches = () => {
  return (
    <Wrapper>
      <SEO pageTitle={'Коучи, финансовые эксперты'} />
      <PortfolioDetailsMain case_item={case_item} />
    </Wrapper>
  );
};

export default Coaches;
