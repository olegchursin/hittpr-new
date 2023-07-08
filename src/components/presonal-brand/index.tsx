import React, { useEffect } from 'react';
import { FooterThree, Header, Wrapper } from '../../layout';
import { animationCreate } from '../../utils/utils';
import Breadcrumb from '../common/breadcrumb/breadcrumb';
import ServiceArea from '../services/pr/service-area';
import Testimonials from '../common/testimonials';

const PersonalBrand = () => {
  useEffect(() => {
    setTimeout(() => {
      animationCreate();
    }, 500);
  }, []);

  return (
    <Wrapper>
      <Header />
      <Breadcrumb title={'Личный Бренд'} />
      <div className="mt-80">
        <div className="cd-introduce-area pb-80 ">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="cd-info-box">
                  <h3 className="tp-title-sm pb-30">
                    Личный бренд (personal branding) ― Ваш образ в
                    профессиональном сообществе.
                  </h3>
                  <p className="mb-25">
                    За образом личного бренда может быть все, что угодно:
                    принадлежность к определенной компании, обладание навыками и
                    умениями, сильные личные качества. Во-первых личный бренд
                    состоит из репутации, это основа. Во-вторых, важен охват. То
                    есть важно, чтобы о вас говорили хорошо и при этом часто.
                  </p>
                  <p>
                    В американском бизнес-контексте термин личный бренд активно
                    используют в практическом смысле уже давно, а точнее ― с
                    1997 года, когда понятие впервые было употреблено
                    журналистом Томом Петерсом для его статьи Fast Company. С
                    тех пор бизнес-рынок США активно «поставляет» личные бренды
                    ― Джеф Безос, Илон Маск, Дональд и Иванка Трамп, Опра
                    Уинфри, Ричард Брэнсон ― любой успешный в своей области
                    профессионал, который грамотно сумел развить и продать свой
                    имидж.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ServiceArea />
      <Testimonials />
      <FooterThree />
    </Wrapper>
  );
};

export default PersonalBrand;
