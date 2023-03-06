import { FC } from 'react';
import { PdfItem } from '../util/pr-content';
import LinkItem from './LinkItem';
import PdfLink from './PdfLink';

interface LinkListProps {
  readonly links?: string[];
  readonly pdfs?: PdfItem[];
}

const LinkList: FC<LinkListProps> = ({ links, pdfs }) => {
  return (
    <div>
      {links?.map(link => {
        return <LinkItem link={link} />;
      })}

      {pdfs?.map(pdfItem => {
        return <PdfLink pdfItem={pdfItem} />;
      })}
    </div>
  );
};

export default LinkList;
