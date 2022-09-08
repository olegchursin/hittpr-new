import React from 'react';

const currentYear = new Date().getFullYear();

const Copyright = () => {
  return (
    <span>
      © <span>{currentYear}</span> Hittpr New York
    </span>
  );
};

export default Copyright;
