import Accordion, { IAccordionData } from '../../components/elements/Accordion';
import BackgroundActor from '../../components/content/BackgroundActor';
import BannerHero from '../../components/elements/BannerHero';
import Education from '../../components/content/Education';
import InvestigativeJournalism from '../../components/content/InvestigativeJournalism';
import Layout from '../../components/layout/Layout';
import Link from 'next/link';
import Projects from '../../components/content/Projects';
import { CONTACT_US_ROUTE, PRESS_PR_ROUTE } from '../../utils/routes';
import PersonCard from '../../components/PersonCard';

const aboutUsAccordionData: IAccordionData[] = [
  {
    id: 'projects',
    title: 'Проекты',
    content: <Projects />
  },
  {
    id: 'investigative-journalism',
    title: 'Журналистские расследования',
    content: <InvestigativeJournalism />
  },
  {
    id: 'background-actor',
    title: 'Background actor',
    content: <BackgroundActor />
  },
  {
    id: 'education',
    title: 'Образование',
    content: <Education />
  }
];

function About() {
  return (
    <Layout>
      <section className="section-box">
        <BannerHero
          title="Коротко о нас"
          subtitle="Продвижение бизнеса современными инструментами рекламы,
          маркетинга и PR"
        />
      </section>

      <section className="section-box mt-100">
        <div className="container">
          <div className="row">
            <div className="col-lg-1" />
            <div className="col-lg-10">
              <div className="text-center">
                <PersonCard />
              </div>
              <div className="row">
                <div className="col-lg-12 mt-50">
                  <Accordion data={aboutUsAccordionData} />
                  <div className="row mt-100">
                    <div className="text-center">
                      <Link href={CONTACT_US_ROUTE}>
                        <a className="btn btn-green-900 icon-arrow-right-white text-heading-6 color-white">
                          Контакты
                        </a>
                      </Link>

                      <Link href={PRESS_PR_ROUTE}>
                        <a className="btn btn-link text-heading-6">PR в СМИ</a>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-1" />
          </div>
        </div>
      </section>
    </Layout>
  );
}

export default About;
