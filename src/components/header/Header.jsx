import React, { useState, useEffect, useRef } from 'react';
import { useAuthContext } from '../../store/AuthContext';
import { Link, NavLink } from 'react-router-dom';
import MobileMenu from './MobileMenu';
import DesktopMenuCart from './DesktopMenuCart';
import UserAuthForm from './UserAuthForm';
import { toast } from 'react-toastify';

import { useClickOutSide } from '../../Hooks/useClickOutSide';
const Header = () => {
  const [isMobileMenu, setIsMobileMenu] = useState(false);
  const [isCartMobile, setIsCartMobile] = useState(false);
  const [userProfileMenu, setUserProfileMenu] = useState(false);
  const userProfileRef = useRef();
  const { currentUser, authFormOpen, setAuthFormIsOpen, signOut, isLoading } =
    useAuthContext();
  const handleSignOut = async () => {
    signOut();
  };
  useClickOutSide(() => setUserProfileMenu(false), userProfileRef);
  // handle Dark Mode

  const [darkMode, setDarkMode] = useState(
    localStorage.getItem('darkMode') === 'true'
  );
  useEffect(() => {
    const isDarkModeEnabled = localStorage.getItem('darkMode') === 'true';
    setDarkMode(isDarkModeEnabled);
  }, []);
  useEffect(() => {
    localStorage.setItem('darkMode', darkMode);
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <div className="relative">
      {/* Authorization Form */}
      <UserAuthForm />
      {/* Menu desktop */}
      <header className="fixed top-0 left-0 right-0 z-30 md:mx-8 lg:mx-14 xl:mx-24 md:pt-8">
        <div className="hidden md:flex items-center px-3 lg:px-6 xl:px-10 justify-between bg-[#000000]/50 h-16 lg:h-24 rounded-3xl backdrop-blur-[6px]">
          <div className="flex items-center h-full gap-2 lg:gap-4 xl:gap-9 ">
            {/* main Logo */}
            <img
              src="/images/svgs/app-logo.svg"
              alt="Coffee Shop logo"
              className="w-9 lg:w-12 xl:w-[60px] cursor-pointer"
            />
            {/* menu Items & subMenu */}
            <div>
              <ul className="flex items-center gap-3 text-gray-300 font-DanaMedium lg:text-xl lg:gap-4 xl:gap-8">
                <li>
                  <NavLink
                    to="/"
                    className={({ isActive }) =>
                      isActive ? 'text-orange-300' : ''
                    }
                  >
                    صفحه اصلی
                  </NavLink>
                </li>
                <li className="relative group ">
                  <NavLink
                    to="products"
                    className={({ isActive }) =>
                      isActive ? 'text-orange-300' : ''
                    }
                  >
                    فروشگاه
                  </NavLink>
                  {/* subMenu */}
                  <ul className="absolute top-10 right-0 space-y-4 text-zinc-700 dark:text-white p-4 bg-white dark:bg-zinc-700 w-52 child:child-hover:text-orange-300 child:transition-all child:child:transition-all rounded-2xl border-t-[3px] border-t-[#FAB873] text-base  opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all delay-75">
                    <li>
                      <Link to="/">قهوه روبوستا</Link>
                    </li>
                    <li>
                      <Link to="/"> قهوه عربیکا</Link>
                    </li>
                    <li>
                      <Link to="/">قهوه آمورا</Link>
                    </li>
                    <li>
                      <Link to="/"> قهوه اتیوپی</Link>
                    </li>
                    <li>
                      <Link to="/"> قهوه لاوازا</Link>
                    </li>
                    <li>
                      <Link to="/">لوازم و تجهیزات</Link>
                    </li>
                  </ul>
                </li>
                <li>
                  <NavLink
                    to="blogs"
                    className={({ isActive }) =>
                      isActive ? 'text-orange-300' : ''
                    }
                  >
                    بلاگ
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="about-us"
                    className={({ isActive }) =>
                      isActive ? 'text-orange-300' : ''
                    }
                  >
                    درباره ما
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="contact-us"
                    className={({ isActive }) =>
                      isActive ? 'text-orange-300' : ''
                    }
                  >
                    تماس با ما
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
          {/* cart & mode &  currentUser */}
          <div className="flex items-center gap-4 text-orange-200 ">
            <div className="flex items-center gap-2 md:gap-5 ">
              <span className="relative group ">
                <svg
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-8 h-8 hover:scale-110 transition-all"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
                  />
                </svg>
                {/* desktop cart menu  */}
                <DesktopMenuCart />
              </span>
              <span
                className="child:transition-all child:hover:scale-110"
                onClick={() => setDarkMode(!darkMode)}
              >
                {darkMode ? (
                  <svg
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-7 h-7 lg:w-8 lg:h-8"
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
                    className="w-7 h-7 lg:w-8 lg:h-8"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z"
                    />
                  </svg>
                )}
              </span>
            </div>
            <span className="w-[1px] h-16 bg-slate-50/20"></span>
            {currentUser ? (
              <div className="relative">
                <button
                  className="flex items-center justify-center lg:gap-2 cursor-pointer transition-colors hover:bg-orange-300/10 rounded-[100px] py-2 px-3 lg:px-4"
                  onClick={() => setUserProfileMenu(!userProfileMenu)}
                >
                  <span>
                    <svg
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="rotate-180 w-7 h-7 lg:w-8 lg:h-8"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15.75 9V5.25A2.25 2.25 0 0 0 13.5 3h-6a2.25 2.25 0 0 0-2.25 2.25v13.5A2.25 2.25 0 0 0 7.5 21h6a2.25 2.25 0 0 0 2.25-2.25V15M12 9l-3 3m0 0 3 3m-3-3h12.75"
                      />
                    </svg>
                  </span>
                  <span className="xl:text-xl font-Dana mt-1">
                    {currentUser.user_metadata.username}
                  </span>
                </button>
                <div
                  ref={userProfileRef}
                  className={`absolute -bottom-30 flex flex-col child:flex-all min-w-40 left-0 xl:left-auto child:py-4 text-zinc-800 dark:text-white bg-zinc-100 dark:bg-zinc-600 rounded-xl divide-y divide-zinc-400 transition-all ease-linear ${
                    userProfileMenu
                      ? 'opacity-100 visible'
                      : 'opacity-0 invisible '
                  }`}
                >
                  <div className="flex items-center gap-1 hover:md:text-emerald-600 transition-colors cursor-pointer">
                    <span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-5 h-5"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
                        />
                      </svg>
                    </span>
                    <span
                      onClick={() => {
                        setUserProfileMenu(false);
                        toast.error('پررفایل در دسترس نمیباشد.', {
                          autoClose: 2000,
                        });
                      }}
                    >
                      حساب کاربری
                    </span>
                  </div>
                  <div className="flex items-center gap-1 text-red-500 cursor-pointer">
                    <span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-5 h-5"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M5.636 5.636a9 9 0 1 0 12.728 0M12 3v9"
                        />
                      </svg>
                    </span>
                    <button disabled={isLoading} onClick={handleSignOut}>
                      {isLoading ? 'خروج...' : 'خروج'}
                    </button>
                  </div>
                </div>
              </div>
            ) : (
              <button
                className="flex items-center justify-center lg:gap-2 cursor-pointer transition-colors hover:bg-orange-300/10 rounded-[100px] py-2 px-3 lg:px-4"
                onClick={() => setAuthFormIsOpen(true)}
              >
                <svg
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="rotate-180 w-7 h-7 lg:w-8 lg:h-8"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.75 9V5.25A2.25 2.25 0 0 0 13.5 3h-6a2.25 2.25 0 0 0-2.25 2.25v13.5A2.25 2.25 0 0 0 7.5 21h6a2.25 2.25 0 0 0 2.25-2.25V15M12 9l-3 3m0 0 3 3m-3-3h12.75"
                  />
                </svg>
                <span className="hidden lg:inline-block xl:text-xl font-Dana ">
                  ورود | ثبت‌نام
                </span>
              </button>
            )}
          </div>
        </div>
      </header>
      {/* mobile menu wrapper */}
      <MobileMenu
        setIsCartMobile={setIsCartMobile}
        setIsMobileMenu={setIsMobileMenu}
        isMobileMenu={isMobileMenu}
        isCartMobile={isCartMobile}
        darkMode={darkMode}
        setDarkMode={setDarkMode}
      />
      {/* overlay */}
      <div
        className={`fixed inset-0 z-20 h-full w-full bg-black/30 transition-all ${
          isCartMobile || isMobileMenu || authFormOpen || userProfileMenu
            ? 'visible opacity-100'
            : 'invisible opacity-0'
        }`}
      ></div>
    </div>
  );
};

export default Header;
