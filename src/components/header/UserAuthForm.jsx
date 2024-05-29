import React, { useState, Fragment } from 'react';
import { useAuthContext } from '../../store/AuthContext';
import { Dialog, Transition } from '@headlessui/react';
import { toast } from 'react-toastify';
const UserAuthForm = () => {
  const [isLogin, setIsLogin] = useState(false);
  const {
    userData,
    setIsError,
    setUserData,
    handleChangeUserData,
    isError,
    signUp,
    signIn,
    isLoading,
    authFormOpen,
    setAuthFormIsOpen,
    resetUserData,
  } = useAuthContext();

  const handleSubmit = async e => {
    e.preventDefault();
    if (!isLogin) {
      signUp();
      toast.success('ثبت نام با موفقیت انجام شد', {
        autoClose: 2000,
      });
    } else {
      await signIn();
      await toast.success('ورود با موفقیت انجام شد', {
        autoClose: 2000,
      });
    }
  };
  const changeLoginOrSignUp = () => {
    setIsLogin(prev => !prev);
    setIsError('');
    resetUserData();
  };
  return (
    <Transition
      show={authFormOpen}
      as={Fragment}
      enter="ease-out duration-200"
      enterFrom="opacity-0"
      enterTo="opacity-100"
      leave="ease-in duration-200"
      leaveFrom="opacity-100"
      leaveTo="opacity-0"
    >
      <Dialog onClose={() => setAuthFormIsOpen(false)}>
        <Dialog.Panel>
          <div className="w-full xs:w-[400px] fixed inset-0 my-auto mx-auto z-40 h-fit bg-white -translate-y-10 rounded-2xl shadow-main dark:bg-zinc-700 transition-all duration-200 p-4 md:p-6">
            <div className="relative flex flex-col items-center gap-5 md:gap-10 ">
              <div className="absolute left-1 top-1">
                <span
                  className="w-8 h-8 transition-colors rounded-full flex-all hover:bg-orange-300/20 dark:text-white dark:hover:text-zinc-800"
                  onClick={() => {
                    setAuthFormIsOpen(prev => !prev);
                    resetUserData();
                    setIsLogin(false);
                  }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18 18 6M6 6l12 12"
                    />
                  </svg>
                </span>
              </div>
              <img
                src="/images/svgs/app-logo-type.svg"
                alt="main logo"
                className="w-1/4"
              />
              <div className="relative w-full space-y-6 ">
                <div className="flex-all flex-col gap-4 text-center">
                  <h2 className="mb-2 text-2xl md:text-4xl font-MorabbaMedium text-zinc-700 dark:text-white sm:mb-3">
                    {isLogin ? 'ورود' : 'عضویت'}
                  </h2>
                  <span className="md:text-lg help-alert font-Dana text-slate-500 dark:text-gray-500">
                    {isLogin ? 'حساب کاربری ندارید؟' : 'حساب کاربری دارید؟'}
                    <span
                      onClick={changeLoginOrSignUp}
                      className="pr-2 text-orange-300 transition-colors text-primary cursor-pointer"
                    >
                      {isLogin ? 'عضویت' : 'ورود'}
                    </span>
                  </span>
                </div>
                {isLogin ? (
                  <form className="space-y-6">
                    <div className="space-y-2.5 sm:space-y-3.5">
                      <div className="relative">
                        <input
                          required
                          type="email"
                          className="user-data__email en-value pl-9 sm:pl-12 input"
                          placeholder="آدرس ایمیل"
                          inputMode="email"
                          formNoValidate=""
                          value={userData.email}
                          onChange={e => handleChangeUserData(e, 'email')}
                        />
                        <span className="inputSvg left-3 sm:left-4">
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
                              d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
                            />
                          </svg>
                        </span>
                      </div>
                      <div className="relative">
                        <input
                          required
                          value={userData.password}
                          onChange={e => handleChangeUserData(e, 'password')}
                          type="password"
                          className="user-data__password en-value pl-9 sm:pl-12 input"
                          placeholder="رمز عبور"
                        />
                        <span className="inputSvg left-3 sm:left-4">
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
                              d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z"
                            />
                          </svg>
                        </span>
                      </div>
                    </div>
                    <span
                      className={`flex-all w-full px-4 h-4 text-sm text-center text-red-500 font-DanaBold ${
                        isError
                          ? 'opacity-100 visible w-full'
                          : 'opacity-0 invisible w-0'
                      }`}
                    >
                      {isError}
                    </span>
                    <div className="space-y-4">
                      <button
                        type="submit"
                        disabled={isLoading}
                        onClick={handleSubmit}
                        className="w-full py-1.5 md:py-3 transition-colors bg-orange-300/80 rounded-xl hover:bg-orange-300 font-DanaBold"
                      >
                        {isLoading ? 'ورود...' : 'ورود'}
                      </button>
                      <button
                        type="button"
                        className="flex-all w-full py-2 mt-auto text-sm text-center shadow-sm font-DanaBold bg-zinc-200  text-zinc-700 border border-zinc-100 rounded-lg cursor-pointer"
                      >
                        بازیابی رمز عبور
                      </button>
                    </div>
                  </form>
                ) : (
                  <form className="space-y-6">
                    <div className="space-y-2.5 sm:space-y-3.5">
                      <div className="relative w-full h-full">
                        <input
                          required
                          type="text"
                          className="user-data__username en-value pl-9 sm:pl-12 input"
                          placeholder="نام کاربری"
                          autoFocus=""
                          value={userData.userName}
                          onChange={e => handleChangeUserData(e, 'userName')}
                        />
                        <span className="inputSvg left-3 sm:left-4">
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
                      </div>
                      <div className="relative">
                        <input
                          required
                          type="email"
                          className="user-data__email en-value pl-9 sm:pl-12 input"
                          placeholder="آدرس ایمیل"
                          inputMode="email"
                          formNoValidate=""
                          value={userData.email}
                          onChange={e => handleChangeUserData(e, 'email')}
                        />
                        <span className="inputSvg left-3 sm:left-4">
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
                              d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
                            />
                          </svg>
                        </span>
                      </div>
                      <div className="relative">
                        <input
                          required
                          value={userData.password}
                          onChange={e => handleChangeUserData(e, 'password')}
                          type="password"
                          className="user-data__password en-value pl-9 sm:pl-12 input"
                          placeholder="رمز عبور"
                        />
                        <span className="inputSvg left-3 sm:left-4">
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
                              d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z"
                            />
                          </svg>
                        </span>
                      </div>
                      <div className="flex items-center gap-1">
                        <input
                          id="policy"
                          name="policy"
                          type="checkbox"
                          onChange={() => {
                            setIsError('');
                            setUserData(prev => ({
                              ...prev,
                              policy: !userData.policy,
                            }));
                          }}
                        />
                        <label
                          htmlFor="policy"
                          className=" mt-6 text-xs xs:text-sm  font-DanaBold text-zinc-700 dark:text-white"
                        >
                          با عضویت در سایت، تمامی{' '}
                          <span className="text-orange-300 cursor-pointer">
                            قوانین و شرایط
                          </span>{' '}
                          استفاده از خدمت ما را پذیرفته اید.
                        </label>
                      </div>
                    </div>
                    <span
                      className={`flex-all w-full px-4 h-4 text-sm text-center text-red-500 font-DanaBold ${
                        isError
                          ? 'opacity-100 visible w-full'
                          : 'opacity-0 invisible w-0'
                      }`}
                    >
                      {isError}
                    </span>
                    <button
                      onClick={handleSubmit}
                      className="w-full py-1.5 md:py-3 font-DanaBold transition-colors bg-orange-300/80 rounded-xl hover:bg-orange-300"
                    >
                      {isLoading ? 'ثبت نام...' : 'ثبت نام'}
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
          ;
        </Dialog.Panel>
      </Dialog>
    </Transition>
  );
};

export default UserAuthForm;
