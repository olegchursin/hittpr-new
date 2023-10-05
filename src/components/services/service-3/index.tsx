import Breadcrumb from '../../common/breadcrumb/breadcrumb';
import Services from '../../homes/home/services';
import Testimonials from '../../common/testimonials';
import { animationCreate } from '../../../utils/utils';
import { FooterHittpr, Header, Wrapper } from '../../../layout';
import { I18N_NS } from '../../../utils/i18n-utils';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

const ServiceThree = () => {
  const { t } = useTranslation(I18N_NS);
  const [labels, setLabels] = useState({} as any);
  useEffect(() => {
    setTimeout(() => {
      animationCreate();
    }, 500);
    setLabels({ training: 'common.training' });
  }, []);

  return (
    <Wrapper>
      <Header />
      <Breadcrumb title={t(labels.training)} />
      <div className="mb-80">
        <Services />
      </div>
      <Testimonials />
      <FooterHittpr />
    </Wrapper>
  );
};

export default ServiceThree;
