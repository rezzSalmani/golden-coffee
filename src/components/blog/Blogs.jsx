import React from 'react';
import BlogItem from './BlogItem';
import { BLOGS } from '../../data/BlogsData';
import { Link } from 'react-router-dom';

const Blogs = () => {
  return (
    <section className="container py-5 md:py-10">
      <div
        className="flex items-end justify-between 
        text-zinc-700 dark:text-white"
      >
        <h4 className="font-MorabbaMedium  text-2xl md:text-4xl lg:text-5xl">
          مطالب خواندنی
        </h4>
        <Link
          to="/blogs"
          className="flex items-center hover:bg-orange-200/10 transition-colors rounded-lg p-1 text-orange-300  md:text-xl cursor-pointer"
        >
          مشاهده همه <span className="hidden sm:block mr-1">مطالب</span>
          <svg
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-5 h-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 19.5 8.25 12l7.5-7.5"
            />
          </svg>
        </Link>
      </div>
      <div
        className="mt-4 md:mt-10 w-full grid grid-cols-1 sm:grid-cols-2
       md:grid-cols-3 lg:grid-cols-4 gap-3.5 md:gap-5 xs:px-10 sm:px-0"
      >
        {BLOGS.map(item => (
          <BlogItem {...item} key={item.id} />
        ))}
      </div>
    </section>
  );
};

export default Blogs;
