import React from 'react';
import Contact from '../components/Home/Contact';
const ContactUs = () => {
  return (
    <section>
      <div>
        {/* landing */}
        <div className="bg-contactUsBg relative w-full bg-no-repeat bg-bottom bg-cover min-h-[322px] xs:h-[423px] sm:h-[495px] md:h-[567px] lg:h-screen aspect-[2/1] md:aspect-auto overflow-hidden md:custom-radius">
          {/* overlay */}
          <div className="absolute inset-0 z-0 transition-all bg-black bg-opacity-30"></div>
          {/* texts */}
          <div className="absolute top-[25%] md:top-[40%] right-[20%] text-white w-fit  z-10">
            <h2 className="font-MorabbaBold text-xl sm:text-2xl md:text-4xl lg:text-6xl/[62px]">
              ارتباط با ما
            </h2>
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
          <span className="absolute bottom-0  right-0 left-0 mx-auto hidden md:inline-block text-gray-100 dark:text-zinc-800 w-[100px] h-[22px]">
            <svg viewBox="0 0 100 22" fill="currentColor">
              <path d="M50 0C69 0 81 22 100 22L0 22C18.75 22 31 0 50 0Z"></path>
            </svg>
          </span>
          {/* arrow down */}
          <div className="absolute bottom-0 right-0 left-0 mx-auto w-[30px] h-[30px] hidden md:flex-all dark:text-white text-zinc-700 translate-y-2/4 border-2 rounded-full border-orange-300 cursor-pointer">
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
      <div className="flex-all flex-col space-y-10 md:space-y-20 py-10 md:py-20">
        <Contact />
        {/* contact form */}
        <div className="w-auto bg-white dark:bg-zinc-600 h-fit rounded-xl mx-6 xs:mx-10 px-4 py-4 md:py-6 space-y-6 shadow-main drop-shadow-md">
          <h6 className="text-sm xs:text-base md:text-xl text-center font-DanaBold text-orange-300">
            برای مشکلات فنی یا همکاری میتوانید از طریق فرم زیر با ما در ارتباط
            باشید.
          </h6>
          <form
            action=""
            onSubmit={e => {
              e.preventDefault();
              e.target.reset();
            }}
            className="text-zinc-800 dark:text-white space-y-6 md:px-4 w-full"
          >
            <div className="flex flex-col text-sm xs:text-base md:text-lg space-y-2 child:w-full">
              <label htmlFor="userName">نام و نام خونوادگی</label>
              <input
                type="text"
                name="userName"
                className="py-2 px-2 rounded-xl outline-none bg-[#f3f4f6] dark:bg-[#e4e4e7] text-zinc-800"
                placeholder="محمد محمدی"
                required
              />
            </div>
            <div className="flex flex-col text-sm xs:text-base md:text-lg space-y-2 child:w-full">
              <label htmlFor="">آدرس ایمیل</label>
              <input
                type="email"
                name="email"
                className="py-2 px-2 rounded-xl outline-none bg-[#f3f4f6] dark:bg-[#e4e4e7] text-zinc-800"
                placeholder="email@address.com"
                required
              />
            </div>
            <div className="flex flex-col text-sm xs:text-base md:text-lg space-y-2 child:w-full">
              <label htmlFor="">شماره تلفن</label>
              <input
                type="number"
                name="number"
                className="py-2 px-2 rounded-xl outline-none bg-[#f3f4f6] dark:bg-[#e4e4e7] text-zinc-800"
                placeholder="09123456789"
                required
              />
            </div>
            <div className="flex flex-col text-sm xs:text-base md:text-lg space-y-2 child:w-full">
              <label htmlFor="comment">متن پیام</label>
              <textarea
                name="comment"
                cols="30"
                rows="5"
                className="py-2 px-2 rounded-xl outline-none bg-[#f3f4f6] dark:bg-[#e4e4e7] text-zinc-800"
                required
              />
            </div>
            <button className="bg-gradient-to-l from-orange-200 to-orange-300 w-full py-2 rounded-xl md:text-xl text-zinc-700  transition-all active:scale-95 active:-translate-y-1">
              ارسال
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
