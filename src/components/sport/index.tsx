import React, { useEffect } from 'react';
import { FooterHittpr, Header, Wrapper } from '../../layout';
import { animationCreate } from '../../utils/utils';
import Breadcrumb from '../common/breadcrumb/breadcrumb';
import ServiceArea from '../services/pr/service-area';
import { prContent } from '../../data/pr-data';
import LinkList from '../link-list';
import Testimonials from '../common/testimonials';

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
      <Testimonials />
      <FooterHittpr />
    </Wrapper>
  );
};

export default Sport;
