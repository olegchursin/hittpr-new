import SEO from '../../components/seo';
import ServiceDetailsMain from '../../components/service-details';
import { DEFAULT_LOCALE, I18N_NS } from '../../utils/i18n-utils';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Wrapper } from '../../layout';

import type { GetStaticProps, InferGetStaticPropsType } from 'next';
import { getServicesItems } from '../../data/service-data';

type Props = {
  // Add custom props here
};

export default function MediaSocial(
  _props: InferGetStaticPropsType<typeof getStaticProps>
) {
  const { t } = useTranslation(I18N_NS);
  const [service_item, setServiceItem] = useState({} as any);
  useEffect(() => {
    setServiceItem(getServicesItems(t)[1]);
  }, []);

  const text_3 = (
    <>
      - Направление вашей деятельности и “нужные” СМИ <br></br>- Магия
      заголовка: как самую банальную тему подать захватывающе, избегая дешевых
      уловок. <br></br>- C чего начать: как стать собственным “гуглом” и
      создавать свои идеи. <br></br>- Алгоритм работы над статьей (авторская
      методика) <br></br>- Определяемся с темой (в зависимости от ваших целей)
      <br></br>- Составляем план написания статьи<br></br>- Работаем с
      материалом <br></br>- Собираем “пазл” Подбираем крутой заголовок <br></br>
      - Бонус: темы для вашего направления (для СМИ и соц.сетей).
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
