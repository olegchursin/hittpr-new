import BackToTop from '../elements/BackToTop';
import Footer from './Footer';
import Header from './Header';
import Sidebar from './Sidebar';
import { useState } from 'react';

const Layout: React.FC<any> = ({ children, headerStyle }) => {
  const [openClass, setOpenClass] = useState('');

  const handleOpen = () => {
    document.body.classList.add('mobile-menu-active');
    setOpenClass('sidebar-visible');
  };

  const handleRemove = () => {
    if (openClass === 'sidebar-visible') {
      setOpenClass('');
      document.body.classList.remove('mobile-menu-active');
    }
  };
  return (
    <>
      <div className={openClass && 'body-overlay-1'} onClick={handleRemove} />

      <Header handleOpen={handleOpen} headerStyle={headerStyle} />
      <Sidebar openClass={openClass} />
      <main className="main mt-80">{children}</main>
      <Footer />
      <BackToTop />
    </>
  );
};

export default Layout;
