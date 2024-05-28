import React, { useEffect, useRef, useState } from 'react';
import ProductItem from '../products/ProductItem';
import products from '../../products';
import { supabase } from '../../supabaseClient';
import { useProductContext } from '../../store/ProductContext';
import Loader from '../Ui/Loader';
import { Link } from 'react-router-dom';
const NewestProducts = () => {
  const [showAll, setShowAll] = useState(false);
  const [displayCount, setDisplayCount] = useState(8);
  const {
    errorLoadingData,
    productData,
    loadingData,
    showAllProducts,
    setShowAllProducts,
  } = useProductContext();
  const newestProducts = useRef();

  return (
    <section id="newest-products" ref={newestProducts}>
      <div className="container pt-4 md:pt-32 lg:pt-48">
        {/* section title */}
        <div className="space-y-2 text-zinc-700 dark:text-white md:space-y-4">
          <h3 className="text-2xl md:text-5xl font-MorabbaMedium">
            جدیدترین محصولات
          </h3>
          <div className="flex items-center justify-between child:flex child:items-center">
            <span className="text-lg font-MorabbaLight md:text-3xl">
              فرآوری شده از دانه قهوه
            </span>
            <Link
              to="/products"
              className="flex items-center p-1 text-orange-300 transition-colors rounded-lg cursor-pointer hover:bg-orange-200/10 md:text-xl"
            >
              مشاهده همه
              <span className="hidden mr-1 md:inline-block"> محصولات </span>
              <svg viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                <path
                  fillRule="evenodd"
                  d="M11.78 5.22a.75.75 0 0 1 0 1.06L8.06 10l3.72 3.72a.75.75 0 1 1-1.06 1.06l-4.25-4.25a.75.75 0 0 1 0-1.06l4.25-4.25a.75.75 0 0 1 1.06 0Z"
                  clipRule="evenodd"
                />
              </svg>
            </Link>
          </div>
        </div>
        {/* newest products */}
        {/* show loader */}
        {loadingData && productData.length == 0 ? (
          <div className="flex items-center justify-center mt-40">
            <Loader />
          </div>
        ) : (
          <div className="grid w-full h-full grid-cols-1 gap-4 mt-4 xs:grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:gap-5 md:mt-10 ">
            {productData &&
              productData.map(product => (
                <ProductItem key={product.id} {...product} />
              ))}
          </div>
        )}
        {errorLoadingData && (
          <div className="border rounded-xl border-zinc-200 dark:border-zinc-700 shadow-sm">
            <p className="text-red-500 py-8 text-sm md:text-base font-DanaBold text-center w-full">
              {errorLoadingData}
            </p>
          </div>
        )}
        {!loadingData && !errorLoadingData && productData && (
          <div className="flex items-center justify-center pt-10 md:pt-20">
            {/* show more */}
            <button
              onClick={() => {
                setShowAllProducts(prev => !prev);
                if (!showAllProducts)
                  newestProducts.current.scrollIntoView({ behavior: 'smooth' });
              }}
              className="px-6 py-2 rounded-lg w-fit bg-gradient-to-r text-zinc-800 from-orange-300 to-orange-200 dark:hover:bg-orange-300/10"
            >
              {showAllProducts ? 'مشاهده همه' : 'مخفی کردن'}
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default NewestProducts;
