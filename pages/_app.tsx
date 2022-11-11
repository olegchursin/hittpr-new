import Preloader from '../components/elements/Preloader';
import React, { useEffect, useState } from 'react';
import '../public/assets/css/app.2afad0c.bundle.css';
import '../public/assets/css/swiper-custom.css';
import 'react-modal-video/css/modal-video.css';

function MyApp({ Component, pageProps }) {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);

    const isServer = typeof window === 'undefined';
    const WOW = !isServer ? require('wowjs').WOW : null;

    new WOW().init();
  }, []);
  return <>{!loading ? <Component {...pageProps} /> : <Preloader />}</>;
}

export default MyApp;
