import React from 'react';
import LinkList from '../../link-list';

const LinkSection = ({ items, title }) => {
  const listTitle = title ? title : 'List';

  return (
    <>
      <div className="sd-accordio-area grey-bg pt-130 pb-130">
        <div className="container">
          <div className="row">
            <div className="col-xl-7">
              <h3 className="tp-title-sm mb-90">{listTitle}</h3>
            </div>
          </div>
          <div className="row">
            <div className="col-xl-12">
              <LinkList links={items} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LinkSection;
