import { useState } from 'react';

export interface IAccordionData {
  id: string;
  title: string;
  content: string;
}

interface IAccordionProps {
  data: IAccordionData[];
}

const Accordion: React.FC<IAccordionProps> = ({ data }) => {
  console.log('data', data);
  const [isActive, setIsActive] = useState({
    status: false,
    index: 0
  });

  const handleToggle = (index: number) => {
    if (isActive.index === index) {
      setIsActive({
        status: false,
        index: 0
      });
    } else {
      setIsActive({
        status: true,
        index
      });
    }
  };

  return (
    <div className="accordion" id="accordionFAQ">
      {data?.map((dataPoint, i) => {
        const { title, id, content } = dataPoint;

        return (
          <div key={id} className="accordion-item">
            <h2 className="accordion-header" onClick={() => handleToggle(i)}>
              <button
                className={
                  isActive.index === i
                    ? 'accordion-button text-heading-5 '
                    : 'accordion-button text-heading-5 collapsed'
                }
              >
                {title}
              </button>
            </h2>

            <div
              className={
                isActive.index === i
                  ? 'accordion-collapse collapse show'
                  : 'accordion-collapse collapse '
              }
            >
              <div className="accordion-body">{content}</div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Accordion;
