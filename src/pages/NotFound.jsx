import React from 'react';

const NotFound = () => {
  return (
    <div className="bg-main bg-center bg-conver bg-no-repeat h-screen w-full py-5 md:py-10 space-y-10 md:space-y-20">
      <div className="flex items-center justify-center">
        <img
          src="/images/contact.png"
          alt="notFoundImage"
          className="w-1/2 md:w-auto -rotate-[30deg]"
        />
      </div>
      <div className="flex flex-col items-center justify-center gap-4 text-2xl md:text-3xl font-MorabbaMedium">
        <h6>صفحه مورد نظر یافت نشد!</h6>
        <span>404</span>
      </div>
    </div>
  );
};

export default NotFound;
