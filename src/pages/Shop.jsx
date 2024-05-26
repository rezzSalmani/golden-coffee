import React, { useEffect, useState } from 'react';
import Category from '../components/category/Category';
import ProductItem from '../components/products/ProductItem';

import { supabase } from '../supabaseClient';
const options = [
  {
    id: 1,
    label: 'پیش فرض',
    value: 'default',
  },
  {
    id: 2,
    label: 'محبوب ترین',
    value: 'popular',
  },
  {
    id: 3,
    label: 'ارزان ترین',
    value: 'cheapest',
  },
  {
    id: 4,
    label: 'گران ترین',
    value: 'expensive',
  },
];
const Shop = () => {
  const [allProducts, setAllProducts] = useState([]);
  const [filteredProducts, setFilter] = useState([]);
  const [option, setOption] = useState('');
  const [isError, setIsError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage] = useState(8); // Number of products to display per page
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  useEffect(() => {
    const getAllProducts = async () => {
      setIsLoading(true);
      setIsError('');
      try {
        let { data, error } = await supabase.from('coffeeProducts').select('*');
        if (error) throw new Error(error);
        if (data) {
          setAllProducts(data);
          const currentProducts = data.slice(
            indexOfFirstProduct,
            indexOfLastProduct
          );

          setFilter(currentProducts);
        }
      } catch (error) {
        setIsError(error.message);
      } finally {
        setIsLoading(false);
      }
    };
    getAllProducts();
  }, []);

  useEffect(() => {
    if (option === 'default') {
      const currentProducts = allProducts.slice(
        indexOfFirstProduct,
        indexOfLastProduct
      );
      setFilter(currentProducts);
    } else if (option === 'popular') {
      setFilter(
        [...allProducts]
          .sort((a, b) => b.rating - a.rating)
          .slice(indexOfFirstProduct, indexOfLastProduct)
      );
    } else if (option === 'cheapest') {
      setFilter(
        [...allProducts]
          .sort((a, b) => a.price - b.price)
          .slice(indexOfFirstProduct, indexOfLastProduct)
      );
    } else if (option === 'expensive') {
      setFilter(
        [...allProducts]
          .sort((a, b) => b.price - a.price)
          .slice(indexOfFirstProduct, indexOfLastProduct)
      );
    }
  }, [option]);

  useEffect(() => {
    const currentProducts = allProducts.slice(
      indexOfFirstProduct,
      indexOfLastProduct
    );

    setFilter(currentProducts);
  }, [currentPage, productsPerPage]);

  const paginate = pageNumber => setCurrentPage(pageNumber);
  return (
    <section>
      <div className="relative bg-shopBg w-full bg-no-repeat bg-cover bg-top min-h-[322px] xs:h-[423px] sm:h-[495px] md:h-[567px] lg:h-screen aspect-[2/1] md:aspect-auto overflow-hidden md:custom-radius">
        {/* overlay */}
        <div className="absolute inset-0 z-0 transition-all bg-black bg-opacity-20"></div>
        {/* texts */}
        <div className="absolute top-[25%] md:top-[40%] right-[20%] text-white w-fit space-y-4">
          <h2 className="font-MorabbaBold text-xl sm:text-2xl md:text-4xl lg:text-6xl/[62px]">
            محصولات ما
          </h2>
          <p className=" w-[70%] lg:w-[40%] text-sm md:text-lg lg:text-xl text-justify">
            گروه ما مدام در حال تحقیق، آزمایش و اجرای بهترین شیوه‌ها هستند و
            معتقدیم نه تنها قهوه خوب نیازی به ترکیبات پیچیده ندارد؛ بلکه برخلاف
            آن ‌چیزی که بقیه فکر می‌کنند تنها چیزی که به آن نیاز داریم قهوه با
            بالاترین کیفیت است.
          </p>
        </div>
        {/* faded circles */}
        <span className="hidden md:flex-all border border-white/25 rounded-full absolute bottom-0 right-0 left-0 mx-auto h-[203px] w-[203px] translate-y-[50%]">
          <span className="flex-all border rounded-full w-[145px] h-[145px] border-white/50">
            <span className="flex-all border rounded-full w-[95px] h-[95px] border-white/80"></span>
          </span>
        </span>
      </div>
      {/* curve shape and chevron down */}
      <div className="relative">
        <span className="absolute bottom-0  right-0 left-0 mx-auto hidden md:inline-block text-gray-100 dark:text-zinc-800 w-[100px] h-[22px]">
          <svg viewBox="0 0 100 22" fill="currentColor">
            <path d="M50 0C69 0 81 22 100 22L0 22C18.75 22 31 0 50 0Z"></path>
          </svg>
        </span>
        {/* arrow down */}
        <div className="absolute bottom-0 right-0 left-0 mx-auto w-[30px] h-[30px] hidden md:flex-all dark:text-white text-zinc-700 translate-y-2/4 border-2 rounded-full border-orange-300 cursor-pointer">
          <svg viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
            <path
              fillRule="evenodd"
              d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z"
              clipRule="evenodd"
            />
          </svg>
        </div>
      </div>
      {/* category */}
      <div className="container mt-10 md:mt-20 space-y-2 text-zinc-700 dark:text-white md:space-y-8">
        <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-5xl font-MorabbaMedium">
          دسته بندی محصولات
        </h3>
        <Category />
      </div>
      {/* products */}
      <div className="container pb-10 md:pb-20">
        <div className="flex justify-between items-center gap-2">
          <h3 className="text-2xl md:text-3xl lg:text-5xl font-MorabbaMedium text-zinc-700 dark:text-white md:space-y-8">
            محصولات با کیفیت
          </h3>
          <select
            name=""
            id="products-sort"
            onChange={e => setOption(e.target.value)}
            className="w-30 sm:w-44 lg:w-52 md:py-1 rounded-xl border-2 dark:bg-zinc-300 font-DanaMedium outline-none child:outline-none dark:text-zinc-700"
          >
            {options.map(option => (
              <option key={option.id} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>
        {isError && <p className="text-sm text-center py-10">{isError}</p>}
        {isLoading ? (
          <div className="flex-all flex-col gap-6 py-10 md:py-20">
            <span className="animate-ping">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-12 h-12"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
                />
              </svg>
            </span>
            <span className="font-DanaBold text-xl">بارگذاری محصولات...</span>
          </div>
        ) : (
          <div className="grid w-full h-full grid-cols-1 gap-4 mt-4 xs:grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:gap-5 md:mt-10">
            {filteredProducts.map(product => (
              <ProductItem key={product.id} {...product} />
            ))}
          </div>
        )}

        <div class="flex justify-center items-center gap-4 py-10 md:py-20 dark:text-white font-DanaBold flex-wrap">
          {/* previous button */}
          <button
            class="flex items-center gap-2 px-3 py-1 md:px-6 md:py-2  text-center border border-zinc-200 dark:border-zinc-600 transition-all duration-200 rounded-full select-none hover:bg-gradient-to-l from-orange-200 to-orange-300/80 hover:text-zinc-800 active:bg-orange-200 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
            type="button"
            onClick={() => {
              if (currentPage > 1) {
                setCurrentPage(currentPage - 1);
              }
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="2"
              stroke="currentColor"
              aria-hidden="true"
              class="w-4 h-4"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
              ></path>
            </svg>
            قبلی
          </button>
          <div class="flex items-center gap-2 child:border  child:border-zinc-200 child:dark:border-zinc-600 child-hover:bg-gradient-to-l from-orange-200 to-orange-300/80 child:transition-all child:duration-200 child-hover:text-zinc-800 text-xs md:text-sm">
            {/* page numbers buttons */}
            {Array(Math.ceil(allProducts.length / productsPerPage))
              .fill()
              .map((_, index) => (
                <button
                  key={index}
                  class={`relative h-8 w-8 md:h-10 max-h-[40px] w-10 max-w-[40px] select-none rounded-full text-center align-middle  font-medium uppercase transition-all  disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none active:bg-orange-200 ${
                    index + 1 === currentPage
                      ? 'bg-orange-300 text-zinc-800'
                      : ''
                  }`}
                  type="button"
                  onClick={() => paginate(index + 1)}
                >
                  <span class="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
                    {index + 1}
                  </span>
                </button>
              ))}
          </div>
          {/* next button */}
          <button
            class="flex items-center gap-2 px-3 py-1 md:px-6 md:py-2  text-center border border-zinc-200 dark:border-zinc-600 transition-all duration-200 rounded-full select-none hover:bg-gradient-to-l from-orange-200 to-orange-300/80 hover:text-zinc-800 active:bg-orange-200 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
            type="button"
            onClick={() => {
              if (
                currentPage < Math.ceil(allProducts.length / productsPerPage)
              ) {
                setCurrentPage(currentPage + 1);
              }
            }}
          >
            بعدی
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="2"
              stroke="currentColor"
              aria-hidden="true"
              class="w-4 h-4"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
              ></path>
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Shop;
