import '../public/assets/css/app.2afad0c.bundle.css';
import '../public/assets/css/swiper-custom.css';
import 'react-modal-video/css/modal-video.css';

import { ThemeProvider } from 'next-themes';
import { AppProps } from 'next/app';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

import * as gtag from '../utils/gtag';

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

  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem={true}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
};

export default App;
