import React from 'react';

const Breadcrumb = ({ children }) => {
  return (
    <div className="breadcrumb__item relative flex after:h-full before:h-full md:after:h-[2.5rem] md:before:h-[2.5rem] h-full items-center pr-6 md:pr-8 pl-2 text-xs sm:text-sm md:text-base hover:pl-5 transition-all dark:text-white">
      {children}
    </div>
  );
};

export default Breadcrumb;
