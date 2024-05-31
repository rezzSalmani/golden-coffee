import React from 'react';
import { Link } from 'react-router-dom';
import StarRating from '../Ui/StarRating';
import { toast } from 'react-toastify';
import { useAuthContext } from '../../store/AuthContext';

const ProductItem = props => {
  const {
    id,
    title,
    image,
    price,
    category,
    isSale,
    quantity,
    rating,
    isPopular,
    isDiscount,
    discountPercent,
    isAvailable,
  } = props;
  const { currentUser, addToCart } = useAuthContext();

  const calculateDiscount = (price, discountPercent) => {
    return (price * discountPercent) / 100;
  };
  // Calculate the discounted price
  const discountAmount = isSale ? calculateDiscount(price, discountPercent) : 0;
  const discountedPrice = price - discountAmount;

  const handleAddToCart = () => {
    if (currentUser) {
      toast.success('محصول به سبد خرید اضافه شد');
      addToCart({
        id,
        title,
        image,
        price,
        discountedPrice,
        discountAmount,
        quantity,
      });
    } else {
      toast.error('لطفا ابتدا وارد حساب کاربری خود شوید');
    }
  };
  return (
    <>
      <div className="hidden xs:flex-all relative flex-col px-2 sx:px-3 xl:px-5 py-3 xl:py-5 xl:h-[467px] w-full gap-2 sm:gap-5 bg-white dark:bg-zinc-700 rounded-2xl overflow-hidden shadow-main drop-shadow-sm">
        {/* image and discount */}
        {isDiscount && (
          <span
            className="absolute pt-1 top-4 right-4 text-xs xl:text-sm bg-orange-300
           rounded-[100px] px-1.5 xl:px-2.5 text-white dark:text-zinc-700 font-DanaBold"
          >
            {discountPercent}%
          </span>
        )}
        <div className="">
          <Link to={`/products/${id}`}>
            <img
              loading="lazy"
              src={image}
              alt="Product Image"
              className="image-hover xs:h-32 xs:w-32 md:w-44 md:h-44 xl:w-[260px] xl:h-[257px] object-cover mx-auto transition-all hover:scale-105 duration-300"
            />
          </Link>
        </div>
        {/* title */}
        <div className="flex flex-col justify-between space-y-1 xs:space-y-2.5 w-full">
          <h3 className="h-10 text-sm text-right md:text-base lg:text-xl font-DanaMedium text-zinc-700 sm:h-14 dark:text-white line-clamp-2">
            <Link to={`/products/${id}`}> {title}</Link>
          </h3>
          <div className="flex items-center w-full text-teal-600 xs:gap-2 font-DanaBold dark:text-emerald-500">
            {isAvailable ? (
              <>
                <span className="text-sm md:text-base lg:text-xl">
                  {discountedPrice.toLocaleString()}
                  <span className="text-sm font-Dana tracking-tightest">
                    &nbsp;تومان
                  </span>
                </span>
                {isDiscount && (
                  <span className="text-xs text-gray-400 md:text-sm lg:text-base offer">
                    {price.toLocaleString()}
                    <span className="text-xs font-Dana tracking-tightest">
                      &nbsp;تومان
                    </span>
                  </span>
                )}
              </>
            ) : (
              <span className="text-sm text-red-400 md:text-base">
                فعلا موجود نیست{' '}
              </span>
            )}
          </div>
        </div>
        <div className="flex items-center justify-between w-full">
          <div className="flex items-center h-5 gap-1 text-gray-400 xs:gap-2 md:h-auto">
            {isAvailable ? (
              <span
                className="p-1 transition-colors rounded-full hover:bg-teal-600 dark:bg-zinc-800 dark:hover:bg-emerald-500 hover:text-white"
                onClick={handleAddToCart}
              >
                <svg
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-4 h-4 md:w-6 md:h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
                  />
                </svg>
              </span>
            ) : (
              ''
            )}
            <span className="transition-colors hover:text-teal-600">
              <svg
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-4 h-4 md:w-6 md:h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M7.5 21 3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5"
                />
              </svg>
            </span>
          </div>
          <div className="">
            <StarRating classes="" initStar={rating} />
          </div>
        </div>
      </div>
      {/* mobile Ui */}
      <div className="flex p-2 overflow-hidden bg-white xs:hidden dark:bg-zinc-700 rounded-2xl shadow-main min-h-[150px]">
        <Link to={`/products/${id}`} className="my-auto">
          <img src={image} alt={title} className="object-cover w-32" />
        </Link>
        <div className="flex flex-col w-full h-full gap-4 justify-between min-h-[134px]">
          {/* discount and rating */}
          <div className="flex justify-between">
            {isDiscount && (
              <span
                className="flex-all w-7 h-4 pt-1 top-4 right-4 text-xs bg-orange-300
           rounded-[100px] text-white dark:text-zinc-700 font-DanaBold"
              >
                {discountPercent}%
              </span>
            )}
            <div className="flex items-end justify-end w-full">
              <StarRating classes="" initStar={rating} />
            </div>
          </div>
          <Link to={`/products/${id}`}>
            <h4 className="text-sm font-DanaMedium text-zinc-700 dark:text-white">
              {title}
            </h4>
          </Link>
          <div className="flex items-end h-full">
            <div className="flex flex-wrap items-center justify-start space-x-2 w-full font-DanaBold text-teal-600 dark:text-emerald-500 h-[45px]">
              {isAvailable ? (
                <>
                  <span className="text-sm">
                    {discountedPrice.toLocaleString()}
                    <span className="text-sm font-Dana tracking-tightest">
                      &nbsp;تومان
                    </span>
                  </span>
                  {isDiscount && (
                    <span className="block text-xs text-gray-400 offer">
                      {price.toLocaleString()}
                      <span className="text-xs font-Dana tracking-tightest">
                        &nbsp;تومان
                      </span>
                    </span>
                  )}
                </>
              ) : (
                <span className="text-xs text-red-400 ">فعلا موجود نیست </span>
              )}
            </div>
            <div className="flex flex-col items-center justify-end h-5 gap-1 text-gray-400 xs:gap-2 ">
              <span className="block transition-colors hover:text-teal-600">
                <svg
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-4 h-4 md:w-6 md:h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M7.5 21 3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5"
                  />
                </svg>
              </span>
              {isAvailable ? (
                <span
                  className="block p-1 transition-colors rounded-full hover:bg-teal-600 dark:bg-zinc-800 dark:hover:bg-emerald-500 hover:text-white"
                  onClick={handleAddToCart}
                >
                  <svg
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-4 h-4 md:w-6 md:h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
                    />
                  </svg>
                </span>
              ) : (
                ''
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductItem;
