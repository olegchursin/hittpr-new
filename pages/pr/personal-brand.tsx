import { FC } from 'react';
import BannerHero from '../../components/elements/BannerHero';
import LeadParagraph from '../../components/elements/LeadParagraph';
import Layout from '../../components/layout/Layout';

const PersonalBrand: FC = () => {
  return (
    <Layout>
      <section className="section-box">
        <BannerHero
          title="PR - Личный бренд"
          subtitle="Продвижение бизнеса современными инструментами рекламы,
          маркетинга и PR"
        />
      </section>

      <section className="section-box mt-80">
        <div className="container">
          <div className="col-12 text-center">
            <LeadParagraph
              text="Личный бренд (personal branding) ― это образ, который складывается
              о вас в профессиональном сообществе."
            />
          </div>
        </div>
      </section>

      <section className="section-box mt-80">
        <div className="container">
          <div className="row">
            <div className="col-lg-1" />
            <div className="col-lg-10">
              <p className="text-md mb-20">
                За образом личного бренда может быть все, что угодно:
                принадлежность к определенной компании, обладание навыками и
                умениями, сильные личные качества. Во-первых личный бренд
                состоит из репутации, это основа. Во-вторых, важен охват. То
                есть важно, чтобы о вас говорили хорошо и при этом часто.
              </p>

              <p className="text-md">
                В американском бизнес-контексте термин личный бренд активно
                используют в практическом смысле уже давно, а точнее ― с 1997
                года, когда понятие впервые было употреблено журналистом Томом
                Петерсом для его статьи{' '}
                <a
                  href="https://www.fastcompany.com/28905/brand-called-you"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  Fast Company
                </a>{' '}
                . С тех пор бизнес-рынок США активно «поставляет» личные бренды
                ― Джеф Безос, Илон Маск, Дональд и Иванка Трамп, Опра Уинфри,
                Ричард Брэнсон ― любой успешный в своей области профессионал,
                который грамотно сумел развить и продать свой имидж.
              </p>
            </div>
            <div className="col-lg-1" />
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default PersonalBrand;
