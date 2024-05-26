import React, { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../header/Header';
import Footer from '../footer/Footer';
import { scrollToTop } from '../../utility/util';

const Layout = () => {
  useEffect(() => {
    scrollToTop();
  }, []);

  return (
    <div
      className=" bg-gray-100 text-zinc-700 dark:text-white font-Dana dark:bg-zinc-800"
      dir="rtl"
    >
      <Header />
      <main>
        <Outlet />
      </main>

      <Footer />
    </div>
  );
};

export default Layout;
