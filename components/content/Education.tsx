import { FC } from 'react';

const Education: FC = () => {
  return (
    <div>
      <div className="mb-20">
        <h4 className="mb-10">Высшее</h4>
        <ul>
          <li>
            Экономический университет. Специальность: экономическая теория.
          </li>
          <li>
            Институт повышения квалификации для работников радио и ТВ.
            Специальность: ведущий радио и ТВ-эфира.
          </li>
        </ul>
      </div>

      <div>
        <h4 className="mb-10">Дополнительное образование</h4>
        <ul>
          <li>Курсы ВВС. Специальность: ведущий эфира.</li>
          <li>New York Film Academy. Специальность: acting.</li>
          <li>Школа искусств. Музыкальное отделение.</li>
        </ul>
      </div>
    </div>
  );
};

export default Education;
