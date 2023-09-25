import React, { useEffect } from 'react';
import { FooterThree, Header, Wrapper } from '../../../layout';
import { animationCreate } from '../../../utils/utils';
import Breadcrumb from '../../common/breadcrumb/breadcrumb';
import CaseImageArea from './case-image-area';
import CaseImageAreaTwo from './case-image-area-2';
import IntroduceTwo from './introduce-2';
import IntroduceArea from './introduce-area';
import ProjectInfoArea from './project-info-area';
import Accordion from './accordion';
import Testimonials from '../../common/testimonials';
import LinkSection from './link-section';
import VideoList from '../../video-list';
import PdfLink from '../../pdf-link';

const PortfolioDetails = ({ case_item }) => {
  useEffect(() => {
    setTimeout(() => {
      animationCreate();
    }, 500);
  }, []);

  const {
    title,
    subtitle,
    materials,
    renderMaterials,
    links,
    sectionedLinks,
    pdfs,
    videos
  } = case_item;

  const videoSection = (
    <div className="sd-accordio-area black-bg pt-80 pb-60">
      <div className="container">
        <div>
          <div className="col-xl-12">
            <VideoList videos={videos} />
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <Wrapper>
      <Header />
      <Breadcrumb title={title ? title : 'Case Details'} renderCTA={false} />
      <CaseImageArea case_item={case_item} />
      <ProjectInfoArea item={case_item} />

      {renderMaterials ? (
        <Accordion items={materials} title={subtitle} />
      ) : null}

      {videos && videos.length ? videoSection : null}

      {links || sectionedLinks ? (
        <LinkSection
          links={links}
          sectionedLinks={sectionedLinks}
          pdfs={pdfs}
          title={subtitle}
        />
      ) : null}

      {false ? (
        <>
          <IntroduceArea />
          <CaseImageAreaTwo />
          <IntroduceTwo />
        </>
      ) : null}
      <Testimonials />
      <FooterThree />
    </Wrapper>
  );
};

export default PortfolioDetails;
