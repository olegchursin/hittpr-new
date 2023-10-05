import SEO from '../../components/seo';
import ServiceDetailsMain from '../../components/service-details';
import { DEFAULT_LOCALE, I18N_NS } from '../../utils/i18n-utils';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { TFunction } from 'next-i18next';
import { useTranslation } from 'react-i18next';
import { Wrapper } from '../../layout';

import type { GetStaticProps, InferGetStaticPropsType } from 'next';
import { useEffect, useState } from 'react';
import { getServicesItems } from '../../data/service-data';

type Props = {
  // Add custom props here
};

export default function index(
  _props: InferGetStaticPropsType<typeof getStaticProps>
) {
  const { t } = useTranslation(I18N_NS);
  const [service_item, setServiceItem] = useState({} as any);
  useEffect(() => {
    setServiceItem(getServicesItems(t)[0]);
  }, []);

  const text_3 = (
    <>
      - Зачем нужен пиар в СМИ в эпоху интернета? <br></br>- Какие СМИ
      эффективнее и почему? <br></br>- Где брать контакты ? <br></br>- Через
      каких работников СМИ проще “заходить”? <br></br>- Кто вы, что вы, для чего
      - определяемся с целью пиара. <br></br>- Как составлять файл о
      себе/клиенте/бренде/компании/услуге? Что в него входит? Для чего он?{' '}
      <br></br>- Как выбирать темы для конкретного СМИ (предлагая свои варианты)
      с наилучшим результатом для вас? Ваша фишка + интерес СМИ <br></br>- Как
      составлять такой пресс-релиз, чтобы всегда получать обратную связь?
    </>
  );

  return (
    <Wrapper>
      <SEO pageTitle={service_item.title} />
      <ServiceDetailsMain service={service_item} text_3={text_3} />
    </Wrapper>
  );
}

export const getStaticProps: GetStaticProps<Props> = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale ?? DEFAULT_LOCALE, [I18N_NS]))
  }
});
