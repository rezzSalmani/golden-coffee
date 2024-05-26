import React from 'react';

const CategoryItem = ({ img, title }) => {
  return (
    <div className="flex-all flex-col  hover:scale-110 transition-all cursor-pointer gap-2">
      <img src={img} alt={title} className="w-24 md:w-full" />
      <span
        className="text-zinc-700 text-center dark:text-white 
      font-DanaBold text-sm sm:text-base md:text-lg h-14"
      >
        {title}
      </span>
    </div>
  );
};

export default CategoryItem;
