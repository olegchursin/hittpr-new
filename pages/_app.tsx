import * as gtag from '../utils/gtag';
import { AppProps } from 'next/app';
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import '../public/assets/css/app.2afad0c.bundle.css';
import '../public/assets/css/swiper-custom.css';
import 'react-modal-video/css/modal-video.css';

const isProd = process.env.NODE_ENV === 'production';

const App = ({ Component, pageProps }: AppProps) => {
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = (url: URL) => {
      if (isProd) {
        gtag.pageview(url);
      }
    };
    router.events.on('routeChangeComplete', handleRouteChange);
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router.events]);

  return <Component {...pageProps} />;
};

export default App;
