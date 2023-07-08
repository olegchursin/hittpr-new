import React, { useEffect } from 'react';
import { FooterThree, Header, Wrapper } from '../../layout';
import { animationCreate } from '../../utils/utils';
import Breadcrumb from '../common/breadcrumb/breadcrumb';
import ServiceArea from '../services/pr/service-area';
import { PrCategory, prContent } from '../../data/pr-data';
import LinkList from '../link-list';
import Testimonials from '../common/testimonials';

const content = Object.values(prContent).filter(
  content => content.category === PrCategory.PSYCHOLOGY
);

const Psychology = () => {
  useEffect(() => {
    setTimeout(() => {
      animationCreate();
    }, 500);
  }, []);

  return (
    <Wrapper>
      <Header />
      <Breadcrumb title={'Психология'} />
      <div className="mt-80">
        {content.map(item => {
          return (
            <LinkList
              key={item.title}
              links={item.links}
              pdfs={item.pdfs}
              title={item.title}
            />
          );
        })}
      </div>
      <ServiceArea />
      <Testimonials />
      <FooterThree />
    </Wrapper>
  );
};

export default Psychology;
