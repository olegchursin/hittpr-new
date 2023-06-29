import { FC } from 'react';
import LinkItem from './link-item';
import { PdfItem } from '../data/pr-data';
import PdfLink from './pdf-link';

const SPACING = 20;

interface LinkListProps {
  readonly links?: string[];
  readonly pdfs?: PdfItem[];
  readonly title?: string;
}

const LinkList: FC<LinkListProps> = ({ links, pdfs, title }) => {
  return (
    <div className={`cd-introduce-area pt-${SPACING} pb-${SPACING}`}>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="cd-info-box">
              {title ? <h3 className="tp-title-sm pb-30">{title}</h3> : null}
              {links?.map(link => {
                return <LinkItem key={link} link={link} />;
              })}

              {pdfs?.map(pdfItem => {
                return <PdfLink key={pdfItem.title} pdfItem={pdfItem} />;
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LinkList;
