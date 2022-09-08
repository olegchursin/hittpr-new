import Link from 'next/link';
import React from 'react';

const learnMoreLink = () => {
  return (
    <div className="mt-40">
      <Link href="/page-service-2">
        <a className="btn btn-default btn-white icon-arrow-right">Learn More</a>
      </Link>
    </div>
  );
};

export default learnMoreLink;
