import React, { useEffect } from 'react';
import { FooterThree, Header, Wrapper } from '../../../layout';
import { animationCreate } from '../../../utils/utils';
import Breadcrumb from '../../common/breadcrumb/breadcrumb';
import Cta from '../../common/cta/cta';
import CaseImageArea from './case-image-area';
import CaseImageAreaTwo from './case-image-area-2';
import IntroduceTwo from './introduce-2';
import IntroduceArea from './introduce-area';
import ProjectInfoArea from './project-info-area';
import Accordion from './accordion';

const PortfolioDetails = ({ case_item }) => {
  useEffect(() => {
    setTimeout(() => {
      animationCreate();
    }, 500);
  }, []);

  const { title, subtitle, materials } = case_item;
  return (
    <Wrapper>
      <Header />
      <Breadcrumb title={title ? title : 'Case Details'} renderCTA={false} />
      <CaseImageArea case_item={case_item} />
      <ProjectInfoArea item={case_item} />
      <Accordion items={materials} title={subtitle} />
      {false ? (
        <>
          <IntroduceArea />
          <CaseImageAreaTwo />
          <IntroduceTwo />
        </>
      ) : null}
      <Cta />
      <FooterThree />
    </Wrapper>
  );
};

export default PortfolioDetails;
