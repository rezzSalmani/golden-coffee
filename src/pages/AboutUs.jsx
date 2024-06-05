import React, { useEffect, useRef } from 'react';
import CountUp from '../components/Ui/CountUp';
import Counter from '../components/Ui/Counter';
import Services from '../components/services/Services';
const AboutUs = () => {
  const counterElm = useRef();
  // useEffect(() => {
  //   const y =
  //     counterElm.current.getBoundingClientRect().top + window.pageYOffset - 172;
  //   window.scrollTo({ top: y, behavior: 'smooth' });
  // }, []);

  return (
    <section>
      <div>
        {/* landing */}
        <div className="bg-aboutUsBg relative w-full bg-no-repeat bg-[center] bg-cover min-h-[322px] xs:h-[423px] sm:h-[495px] md:h-[567px] lg:h-screen aspect-[2/1] md:aspect-auto overflow-hidden md:custom-radius">
          {/* overlay */}
          <div className="absolute inset-0 z-0 transition-all bg-black bg-opacity-30"></div>
          {/* texts */}
          <div className="absolute top-[25%] md:top-[40%] right-[20%] text-white w-fit space-y-4 z-10">
            <h2 className="font-MorabbaBold text-xl sm:text-2xl md:text-4xl lg:text-6xl/[62px]">
              درباره ما
            </h2>
            <p className=" w-[70%] lg:w-[40%] text-xs xs:text-sm md:text-lg lg:text-xl text-justify line-clamp-[8]">
              ما برآنیم تا با پیشرو بودن در فرآیند تولید، نوع و کیفیت محصول،
              خدمات و توزیع، الگویی برای تولیدکنندگان ایرانی باشیم و به مرجع
              فرهنگ قهوه در ایران تبدیل شویم. می‌پنداریم که نظر مردم ایران و
              منطقه باید نسبت به کالای ایرانی بهبود یابد و در این راستا با
              اشتیاق می‌کوشیم.
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
      {/* about us */}
      <div className="container py-10 md:py-20 space-y-10 md:space-y-20">
        {/* counters */}
        <div
          ref={counterElm}
          className="flex flex-wrap justify-evenly items-center gap-3  mx-auto dark:text-zinc-700 child:transition-all child-hover:-translate-y-1"
        >
          <Counter>
            <CountUp end={200} />
            <span>محصولات</span>
          </Counter>
          <Counter>
            <CountUp end={1000} />
            <span>خریداران</span>
          </Counter>
          <Counter>
            <CountUp end={100} />
            <span>کارکنان</span>
          </Counter>
          <Counter>
            <CountUp end={50} />
            <span>شرکای تجاری</span>
          </Counter>
        </div>
        <div className="flex-all flex-col gap-8">
          <h5 className="text-3xl xs:text-4xl lg:text-5xl text-center font-MorabbaMedium">
            داستان ما از کجا شروع شد؟
          </h5>
          <p className="md:w-[80%]  md:text-xl  text-center px-4 md:px-0">
            داستان گلدن کافی داستان رشد بذر قهوه است؛ همان بذری که از دل خاک
            جوانه زد و در تمامی این سال‌ها با ذوق زیر نور خورشید نشست تا قدش
            بلند و بلندتر شود. بذر ما در یکی از روزهای گرم اولین ماه تابستان
            کاشته شد و ریشه آن هر روز در خاک محکم‌تر شد تا درخت آن به ثمر
            بنشیند. سال‌های زیادی گذشت، ما در کنار شما رشد کردیم و علاقه
            مشترک‌مان یعنی قهوه، انگیزه گفت‌وگوهای بسیار و دست یافتن به یک
            ماموریت واضح و مشخص شد: خلق تجربه‌ای یکتا از نوشیدن قهوه‌ای تازه
            برشت و باکیفیت.
          </p>
        </div>

        <Services />
      </div>
    </section>
  );
};

export default AboutUs;
