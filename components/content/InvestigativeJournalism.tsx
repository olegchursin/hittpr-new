import { FC } from 'react';

const InvestigativeJournalism: FC = () => {
  return (
    <div>
      <h4 className="mb-10">
        Общественно-расследовательская деятельность в рамках журналистики,
        направленная на борьбу с коррупцией в РФ
      </h4>

      <ul>
        <li>
          Документальный фильм-расследование “8 лет за самооборону” (автор).
        </li>
        <li>
          Документальный фильм-расследование “Антикоррупционная эпидемия”
          (автор).
        </li>
        <li>Сюжет о проекте “Берендеево Царство”.</li>
        <li>
          <a
            href="https://www.forumdaily.com/pomozhem-varechke-istoriya-devochki-kotoraya-uzhe-chetyre-goda-zhivet-s-trubkoj-v-gorle/"
            target="_blank"
            rel="noreferrer noopener"
          >
            Поможем Варечке - История девочки, которая уже 4 года живет с
            трубкой в горле
          </a>
        </li>
      </ul>
    </div>
  );
};

export default InvestigativeJournalism;
