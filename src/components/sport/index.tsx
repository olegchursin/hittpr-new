import React, { useEffect } from 'react';
import { FooterThree, Header, Wrapper } from '../../layout';
import { animationCreate } from '../../utils/utils';
import Breadcrumb from '../common/breadcrumb/breadcrumb';
import Cta from '../common/cta/cta';
import ServiceArea from '../services/pr/service-area';
import { prContent } from '../../data/pr-data';
import LinkList from '../link-list';

const { links } = prContent.sport;

const Sport = () => {
  useEffect(() => {
    setTimeout(() => {
      animationCreate();
    }, 500);
  }, []);

  return (
    <Wrapper>
      <Header />
      <Breadcrumb title={'Спорт'} />
      <div className="mt-80">
        <LinkList links={links} title="Публикации" />
      </div>
      <ServiceArea />
      <Cta />
      <FooterThree />
    </Wrapper>
  );
};

export default Sport;
