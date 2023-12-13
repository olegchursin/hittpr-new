import Head from 'next/head';
import Link from 'next/link';

interface SEOProps {
  pageTitle?: string;
  font?: string;
}

const SEO = ({ pageTitle, font }: SEOProps) => (
  <Head>
    <title>{pageTitle && `${pageTitle} | HITTPR`}</title>
    <meta httpEquiv="x-ua-compatible" content="ie=edge" />
    <meta name="description" content="Продвижение бизнеса в новых условиях" />
    <meta name="robots" content="noindex, follow" />
    <meta
      name="viewport"
      content="width=device-width, initial-scale=1, shrink-to-fit=no"
    />

    {font && <Link href={font} rel="stylesheet" />}
    <Link rel="icon" href="/favicon.ico" />
  </Head>
);

export default SEO;
