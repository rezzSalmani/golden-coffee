import React from 'react';
import Landing from '../components/Home/Landing';
import NewestProducts from '../components/Home/NewestProducts';
import ProductBanner from '../components/Home/ProductBanner';
import Category from '../components/category/Category';
import HighSaleProducts from '../components/Home/HighSaleProducts';
import Club from '../components/Home/Club';
import Blogs from '../components/blog/Blogs';
import Contact from '../components/Home/Contact';
import Services from '../components/services/Services';

const Home = () => {
  return (
    <div className="backGroundImage">
      <Landing />
      <NewestProducts />
      <ProductBanner />
      <Category />
      <HighSaleProducts />
      <Club />
      <Blogs />
      <Contact />
      <Services />
    </div>
  );
};

export default Home;
