import styles from './HhnyCta.module.css';

interface ICtaProps {
  readonly bgColorVariant?: number;
}

const HhnyCta: React.FC<ICtaProps> = ({ bgColorVariant = 1 }) => {
  return (
    <div className="section-box mt-120 mb-60">
      <div className="container">
        <div
          className={`bg-${bgColorVariant} box-newsletter ${styles.inner_wrapper}`}
        >
          <div>
            <span className="text-body-capitalized color-gray-500 text-uppercase">
               проект Марины Хитт
            </span>
            <h4 className="text-heading-2 mb-10 mt-10">Hot Hit New York</h4>
            <p className="text-body-text color-gray-500">
              Истории, рассказанные от души, из сердца Большого Яблока
            </p>
          </div>
          <div>
            <img
              height="60px"
              src="http://hothitnewyork.com/wp-content/uploads/2017/05/hhny-logo.svg"
              alt="Hot Hit New York Logo"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HhnyCta;
