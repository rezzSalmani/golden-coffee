import React, { useRef } from 'react';
import { useClickOutSide } from '../../Hooks/useClickOutSide';

const UserCommentModal = ({
  showCommentModal,
  setShowCommentModal,
  handleCommentSubmit,
}) => {
  const commentModalRef = useRef();
  const commentForm = useRef();
  useClickOutSide(() => setShowCommentModal(false), commentModalRef);

  return (
    <div
      ref={commentModalRef}
      className={`fixed inset-0 my-auto mx-auto bg-white dark:bg-zinc-600 h-fit rounded-xl py-4 md:py-6 px-4 space-y-6 shadow-main drop-shadow-md transition-all ease-linear z-40 ${
        showCommentModal
          ? 'opacity-100 w-2/3 sm:w-2/4 md:w-1/2 lg:w-[400px] visible '
          : 'opacity-0 w-0 invisible '
      }`}
    >
      <span
        onClick={() => {
          setShowCommentModal(false);
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
        onSubmit={handleCommentSubmit}
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
  );
};

export default UserCommentModal;
