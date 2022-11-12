import { FC } from 'react';

interface LeadParagraphProps {
  readonly text: string;
}

const LeadParagraph: FC<LeadParagraphProps> = ({ text }) => {
  return <p className="text-body-lead-large color-gray-600">{text}</p>;
};

export default LeadParagraph;
