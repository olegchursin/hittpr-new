import { FC } from 'react';
import { FaFileDownload } from 'react-icons/fa';
import { PdfItem } from '../data/pr-data';

interface PdfItemProps {
  readonly pdfItem: PdfItem;
}

const PdfLink: FC<PdfItemProps> = ({ pdfItem }) => {
  return (
    <div key={pdfItem.url}>
      <a href={pdfItem.url} target="_blank" rel="noopener noreferrer">
        <span className="mr-20">
          <FaFileDownload />
        </span>
        <span className="text-bold">{pdfItem.title}</span>
        <span>&nbsp;//&nbsp;{pdfItem.subtitle}</span>
        <span>&nbsp;(PDF)</span>
      </a>
    </div>
  );
};

export default PdfLink;
