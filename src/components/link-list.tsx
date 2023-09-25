import { FC } from 'react';
import LinkItem from './link-item';
import { PdfItem } from '../data/pr-data';
import PdfLink from './pdf-link';

interface SectionedLink {
  readonly sectionTitle: string;
  readonly sectionSubtitle: string;
  readonly sectionLinks: string[];
  readonly sectionPdfs: PdfItem[];
}

const SPACING = 20;

interface LinkListProps {
  readonly links?: string[];
  readonly sectionedLinks?: SectionedLink[];
  readonly pdfs?: PdfItem[];
  readonly title?: string;
}

const LinkList: FC<LinkListProps> = ({
  links,
  sectionedLinks,
  pdfs,
  title
}) => {
  const header = title ? <h3 className="tp-title-sm pb-30">{title}</h3> : null;
  const simpleList = (
    <>
      {links?.map(link => {
        return <LinkItem key={link} link={link} />;
      })}
      <br />
      {pdfs?.map(pdfItem => {
        return <PdfLink key={pdfItem.title} pdfItem={pdfItem} />;
      })}
    </>
  );

  const sectionedList = (
    <>
      {sectionedLinks?.map(section => {
        return (
          <div key={section.sectionTitle}>
            <h5>{section.sectionTitle}</h5>
            <h6>{section.sectionSubtitle}</h6>
            {section.sectionLinks?.map(link => {
              return <LinkItem key={link} link={link} />;
            })}
            <br />
            {section.sectionPdfs?.map(pdfItem => {
              return <PdfLink key={pdfItem.title} pdfItem={pdfItem} />;
            })}
            <br />
          </div>
        );
      })}
    </>
  );

  const bothLists = (
    <>
      {sectionedList}
      {links ? (
        <>
          <br />
          <hr />
          <br />
          {simpleList}
        </>
      ) : null}
    </>
  );

  const list = sectionedLinks ? bothLists : simpleList;

  return (
    <div className={`cd-introduce-area pt-${SPACING} pb-${SPACING}`}>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="cd-info-box">
              {header}
              {list}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LinkList;
