import React from 'react';
import StarRating from './StarRating';
const UserComment = ({ userName, comment, startInit }) => {
  return (
    <div className="p-2 xs:px-4 py-8 space-y-3">
      <div className="flex justify-between items-center gap-2  ">
        <span className="flex gap-2 items-center md:text-xl">
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
              d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
            />
          </svg>
          {userName}
        </span>
        <span className="text-sm md:text-base text-teal-600 underline underline-offset-8 cursor-pointer">
          پاسخ دهید
        </span>
      </div>
      <div className="flex flex-col xs:flex-row justify-between items-center gap-3">
        <p className="pr-7 text-sm md:text-base">{comment}</p>
        <StarRating initStar={startInit} size="w-4" />
      </div>
    </div>
  );
};

export default UserComment;
