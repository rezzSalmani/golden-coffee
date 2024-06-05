import React, { useEffect, useState } from 'react';
import { useAuthContext } from '../../store/AuthContext';
import { Link } from 'react-router-dom';
import { calculateTotalPrice } from '../../utility/priceCalc';
import { toast } from 'react-toastify';
const DesktopMenuCart = () => {
  const { isLoading, removeFromCart, addToCart, userCart } = useAuthContext();
  const [totalQuantity, setTotalQuantity] = useState(0);
  useEffect(() => {
    if (userCart) {
      const totalPrice = calculateTotalPrice(userCart);
      setTotalQuantity(totalPrice);
    }
  }, [userCart]);
  return (
    <div className="absolute invisible flex-all min-h-50  top-10 left-0 w-[340px] lg:w-[400px] p-4 rounded-2xl border-t-[3px] border-t-[#FAB873] opacity-0 bg-white dark:bg-zinc-700 dark:text-white group-hover:opacity-100 group-hover:visible transition-all delay-75">
      {isLoading ? (
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-8 h-8 animate-ping"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
            />
          </svg>
        </div>
      ) : (
        <div>
          {userCart && userCart.length > 0 ? (
            <>
              {/* header */}
              <div className="flex items-center justify-between text-xs text-gray-300">
                <span>1 مورد</span>
                <Link
                  to="products"
                  className="flex items-center text-orange-300 cursor-pointer"
                >
                  مشاهده سبد خرید
                  <svg
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-5 h-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15.75 19.5 8.25 12l7.5-7.5"
                    />
                  </svg>
                </Link>
              </div>
              {/* body */}
              <div className=" divide-y-[1px] max-h-[500px] lg:max-h-[600px] divide-white/10 overflow-auto pl-4">
                {userCart &&
                  userCart.map(product => (
                    <div
                      className="flex items-center justify-center py-5"
                      key={product.id}
                    >
                      <img
                        src={product.image}
                        alt="product"
                        className="w-[120px]"
                      />
                      <div className="flex flex-col justify-between w-full gap-6 text-zinc-700 dark:text-white font-DanaMedium">
                        <h4 className="w-4/5 line-clamp-2">{product.title}</h4>
                        <div className="flex items-center justify-between gap-2 ">
                          <div className="flex flex-col gap-1">
                            {product.discountAmount > 0 && (
                              <span className="text-xs text-teal-600 ">
                                {product.discountAmount.toLocaleString()}
                                &nbsp;تومان تخفیف
                              </span>
                            )}
                            <span className=" lg:text-xl">
                              {product.discountedPrice.toLocaleString()}
                              <span className="text-sm font-DanaBold">
                                &nbsp;تومان
                              </span>
                            </span>
                          </div>
                          <div className="flex-all h-full pt-2 gap-2 lg:gap-4  text-orange-300 child:block px-2 border border-gray-300 rounded-[100px]">
                            <span
                              className="cursor-pointer"
                              onClick={() => addToCart(product)}
                            >
                              +
                            </span>
                            <span className="w-4">{product.cartQuantity}</span>
                            <span
                              className="cursor-pointer"
                              onClick={() => removeFromCart(product.id)}
                            >
                              -
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
              </div>
              {/* footer */}
              <div className="flex items-center justify-between pt-4 border-t border-t-white/10">
                <div className="flex flex-col text-zinc-700 dark:text-white">
                  <span className="text-xs text-gray-300">
                    مبلغ قابل پرداخت
                  </span>
                  <span className="text-xl ">
                    {/* total price based quantity */}
                    {totalQuantity.toLocaleString()}
                    <span className="text-sm font-DanaBold"> تومان </span>
                  </span>
                </div>
                <button
                  onClick={() => toast.error('خرید در دسترس نمیباشد!')}
                  className="w-[144px] h-[56px] text-white text-xl bg-teal-600 md:hover:bg-teal-700 transition-all rounded-xl"
                >
                  ثبت سفارش
                </button>
              </div>
            </>
          ) : (
            <div className="flex-col gap-8 py-12 flex-all">
              <div className="flex-col gap-2 flex-all child:block dark:text-orange-300 ">
                <span>
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
                <h6 className="font-DanaMedium text-zinc-700 dark:text-white">
                  هنوز محصولی به سبد خرید اضافه نشده
                </h6>
              </div>
              {/* go to shop */}
              <Link
                to="products"
                className="px-10 py-4 bg-teal-700 hover:bg-teal-700 dark:text-slate-200 rounded-xl"
                onClick={() => {
                  const newestProductsSection =
                    document.getElementById('newest-products');
                  newestProductsSection.scrollIntoView({
                    behavior: 'smooth',
                  });
                }}
              >
                مشاهده صفحه فروشگاه
              </Link>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default DesktopMenuCart;
