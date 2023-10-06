import { ToastContainer } from 'react-toastify';
import { appWithTranslation } from 'next-i18next';

if (typeof window !== 'undefined') {
  require('bootstrap/dist/js/bootstrap');
}
import '../styles/index.scss';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
      <ToastContainer />
    </>
  );
}

export default appWithTranslation(MyApp);
