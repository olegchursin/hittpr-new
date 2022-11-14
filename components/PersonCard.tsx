import Link from 'next/link';
import styles from './PersonCard.module.css';
import { FC } from 'react';
import { FaInstagramSquare, FaYoutubeSquare } from 'react-icons/fa';

const PersonCard: FC = () => {
  return (
    <div className="card-grid-style-5 hover-up">
      <div className="grid-5-img mb-15">
        <img
          className={styles.img}
          src="/assets/imgs/marina-hitt.jpeg"
          alt="Marina Hitt"
        />
      </div>
      <span className="text-body-text-md color-gray-500">Founder and CEO</span>
      <h3 className="text-heading-5 mb-5 mt-5">Марина Хитт</h3>
      <p className="text-body-excerpt text-desc color-gray-500 mt-15 mb-20">
        Автор, сценарист и режиссер
      </p>
      <span className="text-body-text-md color-gray-600">Соц сети</span>
      <div className="social-bottom">
        <div className={styles.icons}>
          <Link href="https://www.youtube.com/channel/UC5Y7mWK-FtD3nh_AG367y-g">
            <FaYoutubeSquare />
          </Link>
          <Link href="https://www.instagram.com/m_hitt_pr/">
            <FaInstagramSquare />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PersonCard;
