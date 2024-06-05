import React from 'react';

const Contact = () => {
  return (
    <section className="container py-5 md:py-10">
      <div className="flex flex-col gap-4 md:gap-8 space-y-8 items-center md:flex-row">
        <img
          src="/images/contact.png"
          alt="ContactUs"
          className="w-[190px] sm:w-[260px] md:w-[300px] "
        />
        <div className="flex flex-col items-center justify-center md:items-start md:text-right text-zinc-700 dark:text-white space-y-4 text-center">
          <h5 className="text-3xl xs:text-4xl lg:text-5xl font-MorabbaMedium">
            یکی از بهترین قهوه ها !
          </h5>
          <span className="font-MorabbaLight text-xl xs:text-2xl block">
            کیفیت قهوه را از ما بخواهید ...
          </span>
          <span className="text-2xl">...</span>
          <p className="text-lg xs:text-xl lg:text-2xl md:text-justify text-center px-4 md:px-0">
            فضای گرم و دنج ما را احساس کنید، جایی که همه می توانند قهوه معطری
            پیدا کنند و دسرهای خوشمزه ما را که کاملاً با قهوه داغ همراه شده است،
            امتحان کنند. فضای داخلی شیک و کارکنان خوش برخورد ما روز شما را می
            سازد!
          </p>
          <button className="flex-all gap-2 w-fit py-2.5 px-3 lg:py-4 lg:px-6 text-orange-300 border-2 text-sm md:text-xl font-DanaMedium border-orange-300 rounded-[100px] md:hover:bg-gradient-to-r from-orange-300 to-orange-400 md:hover:text-zinc-700 transition-all active:scale-95 active:-translate-y-1">
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
                d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"
              />
            </svg>
            ثبت سفارش تلفنی
          </button>
        </div>
      </div>
    </section>
  );
};

export default Contact;
