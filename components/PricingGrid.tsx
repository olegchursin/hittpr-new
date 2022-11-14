import { FC } from 'react';
import Link from 'next/link';

const PricingGrid: FC = () => {
  return (
    <div className="block-pricing block-pricing-2 mt-70">
      <div className="row">
        <div className="col-xl-12 col-lg-12">
          <div className="row">
            <div
              className="col-xl-3 col-lg-6 col-md-6 wow animate__animated animate__fadeIn"
              data-wow-delay=".1s"
            >
              <div className="box-pricing-item hover-up">
                <div className="box-info-price">
                  <span className="text-heading-3 for-month display-month">
                    $35
                  </span>
                  <span className="text-heading-3 for-year">$420</span>
                  <span className="text-month for-month text-body-small color-gray-400">
                    /month
                  </span>
                  <span className="text-month for-year text-body-small color-gray-400">
                    /year
                  </span>
                </div>
                <div className="line-bd-bottom">
                  <h4 className="text-heading-5 mb-15">Standard</h4>
                  <p className="text-body-small color-gray-400">
                    All the basics for businesses that are just getting started.
                  </p>
                </div>
                <ul className="list-package-feature">
                  <li>Unlimited updates</li>
                  <li>Custom permissions</li>
                  <li>Custom designs &amp; features</li>
                </ul>
                <div>
                  <Link href="/#">
                    <a className="btn btn-black text-body-lead icon-arrow-right-white">
                      Get Started
                    </a>
                  </Link>
                </div>
              </div>
            </div>
            <div
              className="col-xl-3 col-lg-6 col-md-6 wow animate__animated animate__fadeIn"
              data-wow-delay=".2s"
            >
              <div className="box-pricing-item active hover-up">
                <div className="box-info-price">
                  <span className="text-heading-3 for-month display-month">
                    $89
                  </span>
                  <span className="text-heading-3 for-year">$1068</span>
                  <span className="text-month for-month text-body-small color-gray-400">
                    /month
                  </span>
                  <span className="text-month for-year text-body-small color-gray-400">
                    /year
                  </span>
                </div>
                <div className="line-bd-bottom">
                  <h4 className="text-heading-5 mb-15">Essentials</h4>
                  <p className="text-body-small color-gray-400">
                    All the basics for businesses that are just getting started.
                  </p>
                </div>
                <ul className="list-package-feature">
                  <li>Unlimited updates</li>
                  <li>Custom permissions</li>
                  <li>Custom instructors</li>
                </ul>
                <div>
                  <Link href="/#">
                    <a className="btn btn-black text-body-lead icon-arrow-right-white">
                      Get Started
                    </a>
                  </Link>
                </div>
              </div>
            </div>
            <div
              className="col-xl-3 col-lg-6 col-md-6 wow animate__animated animate__fadeIn"
              data-wow-delay=".3s"
            >
              <div className="box-pricing-item hover-up">
                <div className="box-info-price">
                  <span className="text-heading-3 for-month display-month">
                    $125
                  </span>
                  <span className="text-heading-3 for-year">$1500</span>
                  <span className="text-month for-month text-body-small color-gray-400">
                    /month
                  </span>
                  <span className="text-month for-year text-body-small color-gray-400">
                    /year
                  </span>
                </div>
                <div className="line-bd-bottom">
                  <h4 className="text-heading-5 mb-15">Premium</h4>
                  <p className="text-body-small color-gray-400">
                    Avvanced features for pros who need more customization.
                  </p>
                </div>
                <ul className="list-package-feature">
                  <li>Unlimited updates</li>
                  <li>Custom designs &amp; features</li>
                  <li>Custom permissions</li>
                  <li>Custom instructors</li>
                </ul>
                <div>
                  <Link href="/#">
                    <a className="btn btn-black text-body-lead icon-arrow-right-white">
                      Get Started
                    </a>
                  </Link>
                </div>
              </div>
            </div>
            <div
              className="col-xl-3 col-lg-6 col-md-6 wow animate__animated animate__fadeIn"
              data-wow-delay=".4s"
            >
              <div className="box-pricing-item hover-up">
                <div className="box-info-price">
                  <span className="text-heading-3 for-month display-month">
                    $199
                  </span>
                  <span className="text-heading-3 for-year">$2388</span>
                  <span className="text-month for-month text-body-small color-gray-400">
                    /month
                  </span>
                  <span className="text-month for-year text-body-small color-gray-400">
                    /year
                  </span>
                </div>
                <div className="line-bd-bottom">
                  <h4 className="text-heading-5 mb-15">Unlimited</h4>
                  <p className="text-body-small color-gray-400">
                    Avvanced features for pros who need more customization.
                  </p>
                </div>
                <ul className="list-package-feature">
                  <li>Unlimited updates &amp; Support</li>
                  <li>Custom designs &amp; features</li>
                  <li>Custom permissions</li>
                  <li>Custom instructors</li>
                </ul>
                <div>
                  <Link href="/#">
                    <a className="btn btn-black text-body-lead icon-arrow-right-white">
                      Get Started
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricingGrid;
