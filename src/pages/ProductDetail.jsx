import React, { useEffect, useRef, useState } from 'react';
import { Link, useLoaderData, useNavigation } from 'react-router-dom';
import Breadcrumb from '../components/Ui/Breadcrumb';
import StarRating from '../components/Ui/StarRating';
import UserComment from '../components/Ui/UserComment';
import { Slide, toast } from 'react-toastify';
import { useAuthContext } from '../store/AuthContext';
import { useProductContext } from '../store/ProductContext';
import { supabase } from '../supabaseClient';
import { data } from 'autoprefixer';
import { calculateDiscount } from '../utility/priceCalc';
const commentSent = () =>
  toast('نظر شما ارسال شد.', {
    position: 'top-center',
    autoClose: 2000,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    transition: Slide,
    theme: localStorage.getItem('darkMode') === 'true' ? 'dark' : 'light',
  });
const unableToComment = () =>
  toast('ابتدا وراد شوید', {
    position: 'top-center',
    autoClose: 2000,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    transition: Slide,
    theme: localStorage.getItem('darkMode') === 'true' ? 'dark' : 'light',
  });
const ProductDetail = () => {
  const navigation = useNavigation();
  const { data } = useLoaderData();
  console.log(data);
  const [showCommentModal, setShowCommentModal] = useState(false);
  const { currentUser } = useAuthContext();
  const commentForm = useRef();

  const discountedPrice = calculateDiscount(data.price, data.discountPercent);

  return (
    <section className="flex flex-col container py-10 md:py-20 ">
      {navigation.state === 'loading' ? (
        <div className="h-screen">
          <span className="flex-all fixed inset-0 mx-auto my-auto">
            Loading...........
          </span>
        </div>
      ) : (
        <div className="space-y-5 md:space-y-10">
          {/* Breadcrumb */}
          <div className="md:pt-[10%]">
            <div className=" flex h-7 md:h-12 items-center overflow-hidden rounded-xl border border-slate-200 dark:border-none bg-white dark:bg-zinc-700 shadow-main ">
              <Breadcrumb>
                <Link to={'/'} className="cursor-pointer">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-4 md:w-6 h-4 md:h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
                    />
                  </svg>
                </Link>
              </Breadcrumb>
              <Breadcrumb>
                <Link to={'/products'} className="whitespace-nowrap">
                  فروشگاه
                </Link>
              </Breadcrumb>
              <Breadcrumb>
                <Link to={'/products'} className="whitespace-nowrap">
                  {data.category}
                </Link>
              </Breadcrumb>
              <Breadcrumb>
                <Link to={`/products/${data.id}`} className="whitespace-nowrap">
                  {data.title}
                </Link>
              </Breadcrumb>
            </div>
          </div>
          {/* product detail */}
          <div className=" flex justify-between flex-col-reverse sm:flex-row items-center gap-4 lg:child:w-1/2 py-10">
            <div className="flex flex-col gap-5 w-full">
              <div className="flex justify-between items-center gap-4 dark:text-white">
                <h3 className="font-MorabbaMedium sm:text-lg md:text-2xl xl:text-3xl">
                  {data.title}
                </h3>
                <div className="flex flex-col text-center">
                  <span className="text-sm sm:text-base xl:text-lg font-DanaBold">
                    {discountedPrice}{' '}
                    <span className="text-xs md:text-sm">تومان</span>
                  </span>
                  <span className="line-through text-xs md:text-sm text-gray-500">
                    {data.price}{' '}
                    <span className="text-xs md:text-sm">تومان</span>
                  </span>
                </div>
              </div>
              <p className="text-justify text-xs sm:text-sm md:text-base text-gray-900 dark:text-gray-200">
                {data.description}
              </p>
              <StarRating initStar={3} />
            </div>
            <div className="flex justify-center h-full w-2/5 lg:w-1/2">
              <img
                src={data.image}
                alt={data.title}
                className="drop-shadow-xl max-w-[300px] max-h-[300px]"
              />
            </div>
          </div>
          {/* comment section */}
          <div className="bg-white dark:bg-zinc-700 text-zinc-800 dark:text-white p-5 rounded-xl shadow-main">
            <div className="flex items-center gap-2 justify-between">
              <h6 className="flex items-center gap-2 md:gap-4 md:text-lg lg:text-xl xl:text-2xl font-DanaBold">
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-5 h-5 md:w-8 md:h-8 lg:w-10 lg:h-10"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 0 1-.825-.242m9.345-8.334a2.126 2.126 0 0 0-.476-.095 48.64 48.64 0 0 0-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0 0 11.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155"
                    />
                  </svg>
                </span>
                نظرات کاربران
              </h6>
              <button
                onClick={() => setShowCommentModal(perv => !perv)}
                className="px-2 xs:px-3 md:px-6 text-sm md:text-base text-orange-400  border border-orange-300 py-1 md:py-2 rounded-xl hover:bg-orange-300 hover:text-zinc-700 transition-colors"
              >
                ایجاد نظر جدید
              </button>
              {/* send comment form */}
              <div
                className={`fixed  inset-0 my-auto mx-auto bg-white dark:bg-zinc-600 h-fit rounded-xl py-4 md:py-6 px-4 space-y-6 shadow-main drop-shadow-md transition-all duration-150 z-20 ${
                  showCommentModal
                    ? ' w-2/3 sm:w-2/4 md:w-1/2 lg:w-[400px] visible opacity-100'
                    : 'w-0 invisible opacity-0'
                }`}
              >
                <span
                  onClick={() => {
                    setShowCommentModal(perv => !perv);
                    commentForm.current.reset();
                  }}
                  className="fixed left-4 top-5 hover:bg-orange-300 hover:text-white rounded-full transition-all cursor-pointer"
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
                <h6 className="md:text-xl text-center font-DanaBold text-orange-300">
                  برای ارسال نظر ابتدا وارد شوید.
                </h6>
                <form
                  ref={commentForm}
                  action=""
                  onSubmit={e => {
                    e.preventDefault();
                    if (currentUser) {
                      commentSent();
                      setShowCommentModal(perv => !perv);
                      e.target.reset();
                    } else {
                      unableToComment();
                    }
                  }}
                  className="text-zinc-800 dark:text-white space-y-4 md:px-4"
                >
                  <div className="flex flex-col text-sm xs:text-base md:text-lg space-y-2">
                    <label htmlFor="userName">نام کاربری</label>
                    <input
                      type="text"
                      name="userName"
                      className=" py-1 xs:py-2 px-2 rounded-xl outline-none bg-[#f3f4f6] dark:bg-[#e4e4e7] text-zinc-800"
                      required
                    />
                  </div>
                  <div className="flex flex-col text-sm xs:text-base md:text-lg space-y-2">
                    <label htmlFor="">آدرس ایمیل</label>
                    <input
                      type="email"
                      name="email"
                      className=" py-1 xs:py-2 px-2 rounded-xl outline-none bg-[#f3f4f6] dark:bg-[#e4e4e7] text-zinc-800"
                      required
                    />
                  </div>
                  <div className="flex flex-col text-sm xs:text-base md:text-lg space-y-2">
                    <label htmlFor="comment">نظرتان</label>
                    <textarea
                      name="comment"
                      cols="30"
                      rows="5"
                      className=" py-1 xs:py-2 px-2 rounded-xl outline-none bg-[#f3f4f6] dark:bg-[#e4e4e7] text-zinc-800"
                      required
                    />
                  </div>
                  <button className="bg-orange-300 w-full py-2 rounded-xl md:text-xl hover:bg-orange-300/90 transition-all active:scale-95 active:-translate-y-1">
                    ارسال
                  </button>
                </form>
              </div>
              <div
                className={`fixed inset-0 z-10 transition-all bg-black  bg-opacity-10 ${
                  showCommentModal
                    ? 'visible opacity-100 '
                    : 'invisible opacity-0 overlay'
                }`}
              ></div>
            </div>
            <div className="divide-y divide-zinc-300 dark:divide-gray-600">
              <UserComment
                userName="محمد رضا یوسفی"
                comment=" محصول بسیار عالی بود فقط قیمت زیاد مناسب نبود ,ممنون از ارسال سریع و به
        موقع.❤️"
                startInit={4}
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
export default ProductDetail;

export const productDetailLoader = async ({ params }) => {
  const { id: productId } = params;

  const { data, error } = await supabase
    .from('coffeeProducts')
    .select()
    .eq('id', productId)
    .single();
  return { data };
};
