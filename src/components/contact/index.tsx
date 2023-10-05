import Breadcrumb from '../common/breadcrumb/breadcrumb';
import ContactArea from './contact-area';
import { useEffect, useState } from 'react';
import { animationCreate } from '../../utils/utils';
import { FooterHittpr, Header, Wrapper } from '../../layout';
import { I18N_NS } from '../../utils/i18n-utils';
import { useTranslation } from 'react-i18next';

const Contact = () => {
  const { t } = useTranslation(I18N_NS);
  const [labels, setLabels] = useState({} as any);
  useEffect(() => {
    setTimeout(() => {
      animationCreate();
    }, 500);
    setLabels({ contacts: 'common.contacts' });
  }, []);

  return (
    <Wrapper>
      <Header />
      <Breadcrumb title={t(labels.contacts)} back_home={true} />
      <ContactArea />
      <FooterHittpr />
    </Wrapper>
  );
};

export default Contact;
