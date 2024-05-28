import React from 'react';
const Landing = () => {
  return (
    <section className="home relative h-[250px] xs:h-auto w-full aspect-[2/1] md:aspect-auto bg-home-mobile md:bg-home-desktop bg-no-repeat bg-cover bg-[center_top]">
      <div className="container relative flex items-center justify-end h-full overflow-y-hidden  md:min-h-screen ">
        <div className=" text-white sm:space-y-4 md:space-y-8   justify-center ">
          <div className="">
            <h1 className="font-MorabbaBold text-xl sm:text-2xl md:text-6xl/[62px] mb-0.5 md:mb-2">
              قهوه عربیکا تانزانیا
            </h1>
            <h4 className="font-MorabbaLight sm:text-xl md:text-5xl/[64px]">
              یک فنجان بالانس !
            </h4>
          </div>
          <span className="block h-px md:h-0.5 w-[100px] bg-orange-300 my-3 md:my-8"></span>
          <p className="max-w-[201px] md:max-w-[460px] text-xs md:text-base lg:text-2xl">
            قطعا نام آشنای عربیکا را شنیده اید، عربیکا یکی از گونه های قهوه است
            که در نواحی مختلف کمربند قهوه کشت میشود.
          </p>
        </div>
        <span className="hidden md:flex-all border border-white/25 rounded-full absolute bottom-0 right-0 left-0 mx-auto h-[203px] w-[203px] translate-y-[50%]">
          <span className="flex-all border rounded-full w-[145px] h-[145px] border-white/50">
            <span className="flex-all border rounded-full w-[95px] h-[95px] border-white/80"></span>
          </span>
        </span>
      </div>
      {/* circle */}
      <span className="absolute -bottom-1 right-0 left-0 mx-auto hidden md:inline-block text-gray-100 dark:text-zinc-800 w-[100px] h-[22px] ">
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
    </section>
  );
};

export default Landing;
