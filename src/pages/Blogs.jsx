import React from 'react';
import BlogItem from '../components/blog/BlogItem';
import { BLOGS } from '../data/BlogsData';
const Blogs = () => {
  return (
    <section>
      <div>
        {/* landing */}
        <div className="bg-blogBg relative w-full bg-no-repeat bg-cover bg-top min-h-[322px] xs:h-[423px] sm:h-[495px] md:h-[567px] lg:h-screen aspect-[2/1] md:aspect-auto overflow-hidden md:custom-radius">
          {/* overlay */}
          <div className="absolute inset-0 z-0 transition-all bg-black bg-opacity-30"></div>
          {/* texts */}
          <div className="absolute top-[25%] md:top-[40%] right-[20%] text-white w-fit space-y-4 z-10">
            <h2 className="font-MorabbaBold text-xl sm:text-2xl md:text-4xl lg:text-6xl/[62px]">
              بلاگ ها
            </h2>
            <p className=" w-[70%] lg:w-[40%] text-sm md:text-lg lg:text-xl text-justify">
              اگر مایل‌ هستید وارد دنیای پیچیده قهوه شوید و اطلاعات‌ و دانش‌
              خودتان را بالا ببرید، ما در این دسته‌بندی همه چیزهایی که باید در
              مورد قهوه بدانید را به شما گفته‌ایم.
            </p>
          </div>
          {/* faded circles */}
          <span className="hidden md:flex-all border border-white/25 rounded-full absolute bottom-0 right-0 left-0 mx-auto h-[203px] w-[203px] translate-y-[50%]">
            <span className="flex-all border rounded-full w-[145px] h-[145px] border-white/50">
              <span className="flex-all border rounded-full w-[95px] h-[95px] border-white/80"></span>
            </span>
          </span>
        </div>
        {/* scroll down */}
        <div className="relative">
          <span className="absolute -bottom-1 right-0 left-0 mx-auto hidden md:inline-block text-gray-100 dark:text-zinc-800 w-[100px] h-[22px]">
            <svg viewBox="0 0 100 22" fill="currentColor">
              <path d="M50 0C69 0 81 22 100 22L0 22C18.75 22 31 0 50 0Z"></path>
            </svg>
          </span>
          {/* arrow down */}
          <div className="absolute bottom-0 right-0 left-0 mx-auto w-[30px] h-[30px] hidden md:flex-all dark:text-white text-zinc-700 translate-y-2/4 border-2 rounded-full border-orange-300 ">
            <svg viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
              <path
                fillRule="evenodd"
                d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z"
                clipRule="evenodd"
              />
            </svg>
          </div>
        </div>
      </div>
      {/* blogs */}
      <div className="container py-5 md:py-10">
        <div
          className="flex items-end justify-between 
        text-zinc-700 dark:text-white"
        >
          <h4 className="font-MorabbaMedium  text-2xl md:text-4xl lg:text-5xl">
            اخرین مطالب
          </h4>
        </div>
        <div className="mt-4 md:mt-10 w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5 md:gap-5 px-4 sm:px-0 ">
          {BLOGS.map(item => (
            <BlogItem {...item} key={item.id} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blogs;
