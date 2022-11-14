import { FC } from 'react';
import { FaExternalLinkAlt } from 'react-icons/fa';

interface LinkListProps {
  readonly links: string[];
}

const LinkList: FC<LinkListProps> = ({ links }) => {
  return (
    <div>
      {links.map(link => {
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
      })}
    </div>
  );
};

export default LinkList;
