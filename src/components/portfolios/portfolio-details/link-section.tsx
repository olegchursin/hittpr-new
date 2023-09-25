import React from 'react';
import LinkList from '../../link-list';

const LinkSection = ({ links, pdfs, sectionedLinks, title }) => {
  const listTitle = title ? title : 'List';

  return (
    <>
      <div className="sd-accordio-area grey-bg pt-130 pb-130">
        <div className="container">
          <div className="row">
            <div className="col-xl-7">
              <h3 className="tp-title-sm mb-40">{listTitle}</h3>
            </div>
          </div>
          <div>
            <div className="col-xl-12">
              <LinkList
                links={links}
                pdfs={pdfs}
                sectionedLinks={sectionedLinks}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LinkSection;
