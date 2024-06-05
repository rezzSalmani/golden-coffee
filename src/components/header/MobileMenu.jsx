import React, { forwardRef, useEffect, useRef, useState } from 'react';

import MobileMenuItem from './MobileMenuItem';
import MobileCartMenu from './MobileCartMenu';
import { useAuthContext } from '../../store/AuthContext';
import { Link, useLocation } from 'react-router-dom';
import { useRemoveScroll } from '../../Hooks/useRemoveScroll';
import { useClickOutSide } from '../../Hooks/useClickOutSide';
import LogOutModal from './LogOutModal';
const MobileMenu = ({
  setIsCartMobile,
  setIsMobileMenu,
  isMobileMenu,
  isCartMobile,
  handleSignOut,
  darkMode,
  setDarkMode,
}) => {
  const location = useLocation();
  const [subMenuMobile, setSubMenuMobile] = useState(false);
  const [isLogoutModalOpen, setLogoutModalOpen] = useState(false);
  const { currentUser } = useAuthContext();
  const { setAuthFormIsOpen } = useAuthContext();
  const mobileMenuRef = useRef();
  useRemoveScroll(isMobileMenu);
  useClickOutSide(() => setIsMobileMenu(false), mobileMenuRef);
  useEffect(() => {
    setIsMobileMenu(false);
  }, [location]);

  return (
    <div className=" flex items-center justify-between w-full h-16 px-6 bg-white md:hidden dark:bg-zinc-700 dark:text-white z-30">
      {/* menu hamburger*/}
      <div>
        <span
          className="cursor-pointer"
          onClick={() => setIsMobileMenu(prev => !prev)}
        >
          <svg
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        </span>
        {/* mobile menu*/}
        <div
          ref={mobileMenuRef}
          className={`fixed space-y-4 xs:space-y-6 p-4 top-0 right-0 bg-white h-screen divide-y divide-zinc-200 dark:divide-gray-100/10 dark:bg-zinc-700 transition-all ease-linear z-30 overflow-y-auto ${
            isMobileMenu
              ? 'w-2/3 xs:w-3/6 sm:w-2/5 opacity-100 visible'
              : 'w-0 opacity-0 invisible'
          }`}
        >
          {/* menu header */}
          <div className="flex items-center justify-between text-orange-300 fill-orange-300">
            <img
              src="/images/svgs/app-logo.svg"
              alt="main Logo"
              className="w-8 xs:w-auto fill-orange-300 "
            />
            <img
              src="/images/svgs/app-logo-type.svg"
              alt="Mobile Logo"
              className="w-16 xs:w-auto"
            />
            <span
              className="md:hover:bg-orange-200/30 transition-colors dark:text-white rounded-full cursor-pointer p-1"
              onClick={() => setIsMobileMenu(prev => !prev)}
            >
              <svg
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-5 h-5 "
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18 18 6M6 6l12 12"
                />
              </svg>
            </span>
          </div>
          {/* menu body */}
          <ul
            className="flex flex-col items-center justify-center font-Dana  gap-1
           text-zinc-700 dark:text-white pt-3 xs:pt-6"
          >
            <MobileMenuItem
              title="صفحه اصلی"
              path="/"
              svg={
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
                    d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
                  />
                </svg>
              }
            />
            <MobileMenuItem
              title="فروشگاه"
              path="products"
              svg={
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
                    d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
                  />
                </svg>
              }
              chevronDown={
                <span
                  className={`absolute left-1 top-0 bottom-0 h-fit w-fit my-auto
                 cursor-pointer  transition-all ${
                   subMenuMobile ? 'rotate-180' : ''
                 }`}
                  onClick={() => setSubMenuMobile(perv => !perv)}
                >
                  <svg
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="w-5 h-5"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z"
                      clipRule="evenodd"
                    />
                  </svg>
                </span>
              }
            >
              {/* submenu as children */}
              <div
                className={`flex flex-col gap-3 w-full pr-7 text-sm
               md:child-hover:submenu__item--active child:duration-200
               child:ease-linear
                child:transition-all  child:w-fit transition-all duration-200  ${
                  subMenuMobile
                    ? 'h-full opacity-100 visible mt-2 translate-y-1 pb-2'
                    : 'h-0 opacity-0 invisible '
                }`}
              >
                <Link to="/">قهوه ویژه</Link>
                <Link to="/">ویژه در سطح جهانی</Link>
                <Link to="/">قهوه درجه یک</Link>
                <Link to="/">ترکیبات تجاری</Link>
                <Link to="/">کپسول قهوه</Link>
                <Link to="/">قهوه زینو برزیلی</Link>
              </div>
            </MobileMenuItem>
            <MobileMenuItem
              title="بلاگ"
              path="blogs"
              svg={
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
                    d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 0 0 .75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 0 0-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0 1 12 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 0 1-.673-.38m0 0A2.18 2.18 0 0 1 3 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 0 1 3.413-.387m7.5 0V5.25A2.25 2.25 0 0 0 13.5 3h-3a2.25 2.25 0 0 0-2.25 2.25v.894m7.5 0a48.667 48.667 0 0 0-7.5 0M12 12.75h.008v.008H12v-.008Z"
                  />
                </svg>
              }
            />
            <MobileMenuItem
              title="درباره ما"
              path="about-us"
              svg={
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
                    d="M14.25 9.75v-4.5m0 4.5h4.5m-4.5 0 6-6m-3 18c-8.284 0-15-6.716-15-15V4.5A2.25 2.25 0 0 1 4.5 2.25h1.372c.516 0 .966.351 1.091.852l1.106 4.423c.11.44-.054.902-.417 1.173l-1.293.97a1.062 1.062 0 0 0-.38 1.21 12.035 12.035 0 0 0 7.143 7.143c.441.162.928-.004 1.21-.38l.97-1.293a1.125 1.125 0 0 1 1.173-.417l4.423 1.106c.5.125.852.575.852 1.091V19.5a2.25 2.25 0 0 1-2.25 2.25h-2.25Z"
                  />
                </svg>
              }
            />
            <MobileMenuItem
              title="ارتباط با ما"
              path="contact-us"
              svg={
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
                    d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z"
                  />
                </svg>
              }
            />
          </ul>
          {/* menu footer */}
          <div className="child:flex child:items-center child:gap-2 text-orange-300 pt-3 xs:pt-6 child:w-fit child:cursor-pointer pr-2.5 space-y-4">
            {currentUser ? (
              <button
                className="flex items-center cursor-pointer"
                onClick={() => {
                  setLogoutModalOpen(true);
                  setIsMobileMenu(false);
                }}
              >
                <svg
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-5 h-5 rotate-180"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.75 9V5.25A2.25 2.25 0 0 0 13.5 3h-6a2.25 2.25 0 0 0-2.25 2.25v13.5A2.25 2.25 0 0 0 7.5 21h6a2.25 2.25 0 0 0 2.25-2.25V15M12 9l-3 3m0 0 3 3m-3-3h12.75"
                  />
                </svg>
                <span className=" xl:text-xl font-Dana">خارج شوید</span>
              </button>
            ) : (
              <button className="flex items-center cursor-pointer">
                <span>
                  <svg
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-5 h-5 rotate-180"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15.75 9V5.25A2.25 2.25 0 0 0 13.5 3h-6a2.25 2.25 0 0 0-2.25 2.25v13.5A2.25 2.25 0 0 0 7.5 21h6a2.25 2.25 0 0 0 2.25-2.25V15M12 9l-3 3m0 0 3 3m-3-3h12.75"
                    />
                  </svg>
                </span>
                <span
                  className=" lg:inline-block xl:text-xl font-Dana"
                  onClick={() => {
                    setAuthFormIsOpen(prev => !prev);
                    setIsMobileMenu(prev => !prev);
                  }}
                >
                  ورود | ثبت‌نام
                </span>
              </button>
            )}
            <p onClick={() => setDarkMode(perv => !perv)}>
              <span>
                {darkMode ? (
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
                      d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
                    />
                  </svg>
                ) : (
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
                      d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z"
                    />
                  </svg>
                )}
              </span>
              تم {darkMode ? 'روشن' : 'تیره'}
            </p>
            <span
              onClick={() => {
                setIsCartMobile(prev => !prev);
                setIsMobileMenu(prev => !prev);
              }}
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
                  d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
                />
              </svg>
              سبد خرید
            </span>
          </div>
        </div>
      </div>
      {/* logo mobile */}
      <div className="cursor-pointer flex items-center justify-center">
        <img
          src="/images/svgs/app-logo-type.svg"
          alt="mobile logo"
          className="w-3/4"
        />
      </div>
      {/* cart mobile */}
      <div>
        <span
          className="cursor-pointer "
          onClick={() => setIsCartMobile(prev => !prev)}
        >
          <svg
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
            />
          </svg>
        </span>
        {/* cart menu mobile */}
        <MobileCartMenu
          setIsCartMobile={setIsCartMobile}
          isCartMobile={isCartMobile}
        />
      </div>
      <LogOutModal
        isLogoutModalOpen={isLogoutModalOpen}
        setLogoutModalOpen={setLogoutModalOpen}
        handleSignOut={handleSignOut}
      />
    </div>
  );
};

export default MobileMenu;
