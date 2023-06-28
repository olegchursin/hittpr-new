import React, { useEffect } from 'react';
import { FooterThree, Header, Wrapper } from '../../layout';
import { animationCreate } from '../../utils/utils';
import Breadcrumb from '../common/breadcrumb/breadcrumb';
import Cta from '../common/cta/cta';
import { prContent } from '../../data/pr-data';
import LinkList from '../link-list';

const PRSmi = () => {
  useEffect(() => {
    setTimeout(() => {
      animationCreate();
    }, 500);
  }, []);

  return (
    <Wrapper>
      <Header />
      <Breadcrumb title={'PR в СМИ'} />
      <div className="mt-60 mb-60">
        {Object.values(prContent).map(item => {
          return (
            <LinkList links={item.links} pdfs={item.pdfs} title={item.title} />
          );
        })}
      </div>
      <Cta />
      <FooterThree />
    </Wrapper>
  );
};

export default PRSmi;
