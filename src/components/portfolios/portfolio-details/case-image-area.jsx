import React from 'react';

const CaseImageArea = ({ case_item }) => {
  return (
    <div className="cd-banner-area pt-110 pb-100">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="cd-banner-img">
              <img
                className="w-100"
                src={case_item.img}
                alt={case_item.title}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CaseImageArea;
