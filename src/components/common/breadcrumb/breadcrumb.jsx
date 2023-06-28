import Link from 'next/link';
import React from 'react';

const Breadcrumb = ({ title, back_home = false, renderCTA = true }) => {
  return (
    <section
      className="breadcrumb__area breadcrumb__pt-310 include-bg p-relative"
      style={{ background: '#f7f8fd' }}
    >
      <div className="container">
        <div className="row">
          <div className="col-xxl-12">
            <div className="breadcrumb__content p-relative z-index-1">
              <h3 className="breadcrumb__title">{title}</h3>
              {!back_home && renderCTA && (
                <Link href="/contact">
                  <a className="tp-btn-white-border">
                    Свяжитесь с нами <i className="far fa-arrow-right"></i>
                  </a>
                </Link>
              )}
              {back_home && (
                <Link href="/">
                  <a className="tp-btn-white-border">
                    На домашнюю <i className="far fa-arrow-right"></i>
                  </a>
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Breadcrumb;
