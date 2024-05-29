import React, { useRef, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import Breadcrumb from '../components/Ui/Breadcrumb';
import UserComment from '../components/Ui/UserComment';
import { toast } from 'react-toastify';
import { useAuthContext } from '../store/AuthContext';
import { calculateDiscount } from '../utility/priceCalc';
import { useSingleProduct } from '../Hooks/useProducts';
import SingleProductPreloader from '../components/Ui/SingleProductPreloader';
import SingleProductItem from '../components/products/SingleProductItem';
import UserCommentModal from '../components/Ui/UserCommentModal.jsx';

const ProductDetail = () => {
  const { id } = useParams();
  const { data, isLoading } = useSingleProduct(id);
  const [showCommentModal, setShowCommentModal] = useState(false);
  const { currentUser } = useAuthContext();

  const discountedPrice = calculateDiscount(data?.price, data?.discountPercent);
  const handleCommentSubmit = e => {
    e.preventDefault();
    if (currentUser) {
      toast.success('نظر شما ارسال شد.');
      setShowCommentModal(perv => !perv);
      e.target.reset();
    } else {
      toast.error('ابتدا وراد شوید');
    }
  };
  return (
    <section className="flex flex-col container py-10 md:py-20 ">
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
                {data?.category}
              </Link>
            </Breadcrumb>
            <Breadcrumb>
              <Link to={`/products/${data?.id}`} className="whitespace-nowrap">
                {data?.title}
              </Link>
            </Breadcrumb>
          </div>
        </div>
        {/* product detail */}
        {isLoading ? (
          <SingleProductPreloader />
        ) : (
          <SingleProductItem data={data} discountedPrice={discountedPrice} />
        )}

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
            <UserCommentModal
              showCommentModal={showCommentModal}
              setShowCommentModal={setShowCommentModal}
              handleCommentSubmit={handleCommentSubmit}
            />
            <div
              className={`fixed inset-0 z-30 transition-all ease-linear bg-black/20 ${
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
    </section>
  );
};
export default ProductDetail;

// export const productDetailLoader = async ({ params }) => {
//   const { id: productId } = params;
//   const { data, error } = await supabase
//     .from('coffeeProducts')
//     .select()
//     .eq('id', productId)
//     .single();
//   return { data };
// };
