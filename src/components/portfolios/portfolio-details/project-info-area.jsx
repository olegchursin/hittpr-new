import Link from 'next/link';
import React from 'react';

const ProjectInfoArea = ({ item }) => {
  return (
    <>
      <div className="cd-project-info-area pb-100">
        <div className="container">
          <div className="cd-project-wrapper">
            <div className="row">
              <div className="col-xl-6 col-lg-6 col-md-6 col-12">
                <div className="cd-project-info-box">
                  <h4 className="cd-case-title">{item?.title}</h4>
                  <p>{item?.description}</p>
                </div>
              </div>
              <div className="col-xl-4 col-lg-4 col-md-4 col-12">
                <div className="cd-client-details">
                  <p>
                    <span>Категория :</span>{' '}
                    <Link href={item?.category?.href}>
                      {item?.category.label}
                    </Link>
                  </p>
                </div>
              </div>
              <div className="col-xl-2 col-lg-2 col-md-2 col-12">
                {false ? (
                  <div className="cd-social-icon">
                    <a className="cd-si-color-1" href="#">
                      <i className="fab fa-facebook-f"></i>
                    </a>
                    <a className="cd-si-color-2" href="#">
                      <i className="fab fa-pinterest-p"></i>
                    </a>
                    <a className="cd-si-color-3" href="#">
                      <i className="fab fa-twitter"></i>
                    </a>
                  </div>
                ) : null}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectInfoArea;
