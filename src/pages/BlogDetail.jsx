import React, { useEffect, useRef, useState } from 'react';
import Breadcrumb from '../components/Ui/Breadcrumb';
import { BLOGS } from '../data/BlogsData';
import { Link, useParams } from 'react-router-dom';

const BlogDetail = () => {
  const { id: blogId } = useParams();
  const [blog, setBlog] = useState(null);
  const [chevronTop, setChevronTop] = useState(0);
  const breadcrumbBlogTitle = useRef();
  useEffect(() => {
    const foundBlog = BLOGS.find(item => item.id === blogId);
    if (foundBlog) {
      setBlog(foundBlog);
    }
  }, [blogId]);
  const scrollToSection = (event, id) => {
    const liElement = event.currentTarget;
    const liTopPosition = liElement.offsetTop;
    setChevronTop(liTopPosition);
    const element = document.getElementById(id);
    const y = element.getBoundingClientRect().top + window.pageYOffset - 172;
    window.scrollTo({ top: y, behavior: 'smooth' });
  };

  if (!blog) {
    return <div>Loading...</div>;
  }

  const {
    id,
    category,
    title,
    introduction,
    lastWord,
    day,
    month,
    year,
    image,
    bgImage,
    bgImage2,
    content,
  } = blog;

  return (
    <section className="container py-10 md:py-20">
      {/* Breadcrumb */}
      <div className=" md:pt-[10%] z-30">
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
            <Link to={'/blogs'} className="whitespace-nowrap">
              بلاک
            </Link>
          </Breadcrumb>
          <Breadcrumb>
            <Link to={'/blogs'} className="whitespace-nowrap">
              {category}
            </Link>
          </Breadcrumb>
          <Breadcrumb>
            <Link
              ref={breadcrumbBlogTitle}
              to={`/blogs/${id}`}
              className="whitespace-nowrap text-ellipsis"
            >
              {title}
            </Link>
          </Breadcrumb>
        </div>
      </div>
      <div className="py-10 md:py-20">
        {/* title */}
        <div className="flex flex-col sm:flex-row items-center justify-between text-zinc-800 dark:text-white gap-3">
          <h2
            className="text-2xl md:text-3xl lg:text-4xl font-MorabbaMedium text-center sm:text-right"
            id="cFirst"
          >
            {title}
          </h2>
          <div>
            <div className="flex text-xs xs:text-sm md:text-base items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-5 h-5 md:w-6 md:h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5"
                />
              </svg>
              <p className="mt-1 flex gap-1">
                <span>{day}</span>
                <span>{month}</span>
                <span>{year}</span>
              </p>
            </div>
            <span className="flex gap-2 text-xs md:text-sm  items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-5 h-5 md:w-6 md:h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"
                />
              </svg>
              <span className="mt-2">
                <span className="hidden sm:inline-flex">ارسال توسط</span> تیم
                گلدن کافی
              </span>
            </span>
          </div>
        </div>
        {/* intro and content and helper menu */}
        <div
          className="relative flex justify-between text-zinc-800
         dark:text-white my-10"
        >
          {/* intro and content */}
          <div className="w-full flex flex-col items-start gap-10 md:gap-10 h-full lg:w-4/5 child:lg:w-[90%]">
            <p className="text-sm xs:text-base md:text-lg text-justify dark:text-gray-200 text-gray-700 ">
              {introduction}
            </p>
            {/* background 1 */}
            <img
              src={bgImage}
              alt="bgImage"
              className=" xs:max-h-[350px] md:max-h-[450px] w-full rounded-lg object-cover"
            />
            {content.map(item => (
              <div key={item.id} className="space-y-5">
                <h6
                  className="font-DanaBold text-sm xs:text-base md:text-xl lg:text-2xl"
                  id={item.id}
                >
                  {item.subTitle}
                </h6>
                {item.description?.map((itemDes, index) => (
                  <div key={index} className="space-y-1">
                    {itemDes.heading && (
                      <h6 className="font-DanaMedium text-sm md:text-lg">
                        {itemDes.heading}
                      </h6>
                    )}
                    <p className="text-sm xs:text-base md:text-lg text-justify dark:text-gray-200 text-gray-700 ">
                      {itemDes.text}
                    </p>
                  </div>
                ))}
              </div>
            ))}
            {/* background 2 */}
            <img
              src={bgImage2}
              alt="bgImage2"
              className="xs:max-h-[350px] md:max-h-[450px] w-full object-cover rounded-lg"
            />
            {/* last Word */}
            <div className="space-y-4">
              <h5
                className="font-DanaBold text-sm xs:text-base md:text-xl lg:text-2xl"
                id="cLast"
              >
                و در آخر
              </h5>
              <p className="text-sm xs:text-base md:text-lg text-justify dark:text-gray-200 text-gray-700 ">
                {lastWord}
              </p>
            </div>
          </div>
          {/* helper menus */}
          <div className="hidden lg:block sticky top-[20%] w-[25%] p-3 xl:p-5 border space-y-3 border-gray-300 dark:border-zinc-600 rounded-xl overflow-hidden shadow-lg h-fit">
            <h6 className="flex gap-2 text-base">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M8.25 6.75h12M8.25 12h12m-12 5.25h12M3.75 6.75h.007v.008H3.75V6.75Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0ZM3.75 12h.007v.008H3.75V12Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm-.375 5.25h.007v.008H3.75v-.008Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
                />
              </svg>
              آنچه در این مقاله میخوانید:
            </h6>
            <div className="pr-6 text-sm relative font-DanaMedium">
              {/* chevron-left to li which active */}
              <span
                className={`absolute -right-2 text-orange-300 `}
                style={{ top: `${chevronTop}px` }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    fillRule="evenodd"
                    d="M11.78 5.22a.75.75 0 0 1 0 1.06L8.06 10l3.72 3.72a.75.75 0 1 1-1.06 1.06l-4.25-4.25a.75.75 0 0 1 0-1.06l4.25-4.25a.75.75 0 0 1 1.06 0Z"
                    clipRule="evenodd"
                  />
                </svg>
              </span>
              <ul className="flex flex-col space-y-2 child:transition-all child:duration-200 child-hover:text-teal-700 child:w-fit child-hover:cursor-pointer">
                <li onClick={event => scrollToSection(event, 'cFirst')}>
                  مقدمه
                </li>
                {content.map(item => (
                  <li
                    onClick={event => scrollToSection(event, item.id)}
                    key={item.id}
                    className={`line-clamp-2`}
                  >
                    {item.subTitle}
                  </li>
                ))}
                <li onClick={event => scrollToSection(event, 'cLast')}>
                  سخن آخر
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogDetail;
