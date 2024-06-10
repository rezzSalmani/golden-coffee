import React, { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Header from '../header/Header';
import Footer from '../footer/Footer';
import { scrollToTop } from '../../utility/util';

const Layout = () => {
  const location = useLocation();
  useEffect(() => {
    scrollToTop();
  }, [location]);

  return (
    <div className="font-Dana" dir="rtl">
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
