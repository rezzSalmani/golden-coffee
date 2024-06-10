import React from 'react';
import StarRating from '../Ui/StarRating';

const SingleProductItem = ({ data, discountedPrice }) => {
  return (
    <div className=" flex justify-between flex-col-reverse sm:flex-row items-center gap-4 lg:child:w-1/2 py-10">
      <div className="flex flex-col gap-5 w-full">
        <div className="flex justify-between items-center gap-4 dark:text-white">
          <h3 className="font-MorabbaMedium sm:text-lg md:text-2xl xl:text-3xl">
            {data?.title}
          </h3>
          <div className="flex flex-col text-center">
            <span className="text-sm sm:text-base xl:text-lg font-DanaBold">
              {discountedPrice?.toLocaleString()}
              <span className="text-xs md:text-sm pr-1">تومان</span>
            </span>
            <span className="line-through text-xs md:text-sm text-gray-500">
              {data?.price.toLocaleString()}{' '}
              <span className="text-xs md:text-sm">تومان</span>
            </span>
          </div>
        </div>
        <p className="text-justify text-xs sm:text-sm md:text-base text-gray-900 dark:text-gray-200">
          {data?.description}
        </p>
        <StarRating initStar={3} />
      </div>
      <div className="flex justify-center h-full max-w-[400px] max-h-[400px]">
        <img src={data?.image} alt={data?.title} className="drop-shadow-xl " />
      </div>
    </div>
  );
};

export default SingleProductItem;
