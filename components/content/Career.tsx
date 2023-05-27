import React from 'react';

const Career = () => {
  return (
    <div>
      <div className="mb-20">
        <ul>
          <li>
            Автор, сценарист, режиссер{' '}
            <a href="https://www.youtube.com/watch?v=Al_OXNN0ph4">
              документального фильма “GREG. THE SECRET TO MY SUCCESS”
            </a>
          </li>
          <li>
            Автор, сценарист, режиссер{' '}
            <a href="https://www.youtube.com/watch?v=og69ZQwmal4&t=550s">
              документального фильма “KRUSHER”
            </a>{' '}
            о боксере Сергее Ковалеве
          </li>
          <li>
            Автор проекта{' '}
            <a
              href="https://hothitnewyork.com/"
              target="_blank"
              rel="noreferrer noopener"
            >
              HotHitNewYork.com
            </a>
          </li>
        </ul>
      </div>

      <div>
        <h4 className="mb-10">Спорт PR</h4>
        <ul>
          <li>Освещала бои, проходящие в NYC</li>
          <li>
            Проводила PR-кампании в рамках радиоэфира и в интернет-СМИ для боев:
            <ul className="ml-10">
              <li>Сергея Ковалева</li>
              <li>Геннадия Головкина</li>
              <li>Руслана Проводникова</li>
              <li>Владимира Кличко</li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Career;
