import React, { useEffect, useMemo, useState } from 'react';
import Category from '../components/category/Category';
import ProductItem from '../components/products/ProductItem';
import Loader from '../components/Ui/Loader.jsx';
import { useAllProduct } from '../Hooks/useProducts';
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
  const { data, isLoading } = useAllProduct();
  const { data: products, error } = data || {};
  const [allProducts, setAllProducts] = useState(products || []);
  const [filteredProducts, setFilter] = useState([]);
  const [option, setOption] = useState('');
  const [isError, setIsError] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage] = useState(8);

  const indexOfLastProduct = useMemo(
    () => currentPage * productsPerPage,
    [currentPage, productsPerPage]
  );
  const indexOfFirstProduct = useMemo(
    () => indexOfLastProduct - productsPerPage,
    [indexOfLastProduct, productsPerPage]
  );
  useEffect(() => {
    if (products) {
      setAllProducts(products);
      setFilter(() => products.slice(indexOfFirstProduct, indexOfLastProduct));
    }
    if (error && error.message === 'TypeError: Failed to fetch') {
      return setIsError('دریافت اطلاعات موفقیت آمیز نبود.');
    }
    if (error) {
      setIsError(error.message);
    }
  }, [data]);

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
        <span className="absolute -bottom-1  right-0 left-0 mx-auto hidden md:inline-block text-gray-100 dark:text-zinc-800 w-[100px] h-[22px]">
          <svg viewBox="0 0 100 22" fill="currentColor">
            <path d="M50 0C69 0 81 22 100 22L0 22C18.75 22 31 0 50 0Z"></path>
          </svg>
        </span>
        {/* arrow down */}
        <div className="absolute bottom-0 right-0 left-0 mx-auto w-[30px] h-[30px] hidden md:flex-all dark:text-white text-zinc-700 translate-y-2/4 border-2 rounded-full border-orange-300 ">
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
        {isError && (
          <div className="border rounded-xl border-zinc-200 dark:border-zinc-700 shadow-sm mt-20">
            <p className="text-red-500 py-8 text-sm md:text-base font-DanaBold text-center w-full">
              {isError}
            </p>
          </div>
        )}
        {isLoading ? (
          <div className="flex-all flex-col gap-6 mt-40">
            <Loader />
            <span className="font-DanaBold text-zinc-800 md:text-xl">
              بارگذاری محصولات...
            </span>
          </div>
        ) : (
          <div className="grid w-full h-full grid-cols-1 gap-4 mt-4 xs:grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:gap-5 md:mt-10">
            {filteredProducts.map(product => (
              <ProductItem key={product.id} {...product} />
            ))}
          </div>
        )}
        {!isError && !isLoading && (
          <div className="flex justify-center items-center gap-4 py-10 md:py-20 dark:text-white font-DanaBold flex-wrap">
            {/* previous button */}
            <button
              className="flex items-center gap-2 px-3 py-1 md:px-6 md:py-2 text-center border border-zinc-200 dark:border-zinc-600 transition-all duration-200 rounded-full select-none hover:bg-gradient-to-l from-orange-200 to-orange-300/80 hover:text-zinc-800 active:bg-orange-200 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
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
                strokeWidth="2"
                stroke="currentColor"
                aria-hidden="true"
                className="w-4 h-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                ></path>
              </svg>
              قبلی
            </button>
            <div className="flex items-center gap-2 child:border child:border-zinc-200 child:dark:border-zinc-600 child-hover:bg-gradient-to-l from-orange-200 to-orange-300/80 child:transition-all child:duration-200 child-hover:text-zinc-800 text-xs md:text-sm">
              {/* page numbers buttons */}
              {Array(Math.ceil(allProducts.length / productsPerPage))
                .fill()
                .map((_, index) => (
                  <button
                    key={index}
                    className={`relative h-8  md:h-10 max-h-[40px] w-10 max-w-[40px] select-none rounded-full text-center align-middle  font-medium uppercase transition-all  disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none active:bg-orange-200 ${
                      index + 1 === currentPage
                        ? 'bg-orange-300 text-zinc-800'
                        : ''
                    }`}
                    type="button"
                    onClick={() => paginate(index + 1)}
                  >
                    <span className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
                      {index + 1}
                    </span>
                  </button>
                ))}
            </div>
            {/* next button */}
            <button
              className="flex items-center gap-2 px-3 py-1 md:px-6 md:py-2  text-center border border-zinc-200 dark:border-zinc-600 transition-all duration-200 rounded-full select-none hover:bg-gradient-to-l from-orange-200 to-orange-300/80 hover:text-zinc-800 active:bg-orange-200 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
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
                strokeWidth="2"
                stroke="currentColor"
                aria-hidden="true"
                className="w-4 h-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
                ></path>
              </svg>
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Shop;
