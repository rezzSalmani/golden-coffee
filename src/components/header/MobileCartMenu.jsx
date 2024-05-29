import React, { useEffect, useState } from 'react';
import { useAuthContext } from '../../store/AuthContext';
import { calculateTotalPrice } from '../../utility/priceCalc';

const MobileCartMenu = ({ setIsCartMobile, isCartMobile }) => {
  const { isLoading, removeFromCart, addToCart, userCart } = useAuthContext();
  const [totalQuantity, setTotalQuantity] = useState(0);
  useEffect(() => {
    if (userCart) {
      const totalPrice = calculateTotalPrice(userCart);
      setTotalQuantity(totalPrice);
    }
  }, [userCart]);
  return (
    <div
      className={`fixed left-0 top-0 bottom-0 min-h-screen flex flex-col bg-white divide-y divide-white/10 dark:bg-zinc-700 transition-all z-30 overflow-y-auto text-zinc-700 dark:text-white py-3 px-4 ${
        isCartMobile
          ? 'w-full xs:w-3/5 sm:w-2/4 visible opacity-100'
          : 'w-0 opacity-0 invisible'
      }`}
    >
      {/* cart Header */}
      <div className="flex items-center justify-between py-3 ">
        <span
          className="cursor-pointer"
          onClick={() => setIsCartMobile(prev => !prev)}
        >
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
              d="M6 18 18 6M6 6l12 12"
            />
          </svg>
        </span>
        <span className="font-DanaMedium">سبد خرید</span>
      </div>
      {/* cart body */}
      <div className="pt-5 space-y-2 first:border-b">
        {userCart
          ? userCart.map(item => (
              <div key={item.id} className="flex items-center w-full">
                <img
                  src={item.image}
                  alt="Product Image"
                  className="w-[90px]"
                />
                <div className="space-y-2 w-full">
                  <h4 className="text-sm font-DanaMedium line-clamp-2">
                    {item.title}
                  </h4>
                  <div className="flex items-end justify-between gap-2">
                    <div className="text-xs child:block">
                      <span>
                        <span className="text-base font-DanaBold">
                          {' '}
                          {item.discountedPrice.toLocaleString()}
                        </span>{' '}
                        تومان
                      </span>
                    </div>
                    <div className="flex items-center justify-end gap-1 child:flex-all text-sm ">
                      <span
                        className="rounded-full bg-zinc-300  px-2 pt-1 cursor-pointer dark:text-zinc-700"
                        onClick={() => addToCart(item)}
                      >
                        +
                      </span>
                      <span className="font-bold pt-1 w-4">
                        {item.cartQuantity}
                      </span>
                      <span
                        className="rounded-full bg-zinc-300  px-2 pt-1 cursor-pointer dark:text-zinc-700"
                        onClick={() => removeFromCart(item.id)}
                      >
                        -
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))
          : ''}
      </div>
      {/* cart footer */}
      <div className="py-6 mt-auto xs:py-8">
        <div className="flex flex-wrap items-center gap-2 justify-evenly">
          <button className="py-2.5 px-4 bg-teal-600 hover:bg-teal-700 text-white rounded-xl">
            ثبت سفارش
          </button>
          <div className="child:block">
            <span className="text-xs text-gray-300 font-DanaMedium">
              مبلغ قابل پرداخت
            </span>
            <span className="text-sm">
              <span className="text-base font-DanaBold">
                {totalQuantity.toLocaleString()}
              </span>{' '}
              تومان
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileCartMenu;
