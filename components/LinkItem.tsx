import React from 'react';
import { FaExternalLinkAlt } from 'react-icons/fa';

interface LinkItemProps {
  link: string;
}

const LinkItem: React.FC<LinkItemProps> = ({ link }) => {
  return (
    <div key={link}>
      <a href={link}>
        <span className="mr-20">
          <FaExternalLinkAlt />
        </span>
        <span>{link}</span>
      </a>
    </div>
  );
};

export default LinkItem;
