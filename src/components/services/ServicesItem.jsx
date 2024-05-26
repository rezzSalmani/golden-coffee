import React from 'react';

const ServicesItem = ({ title, desc, svg, svgDark }) => {
  return (
    <div className="flex flex-col items-center justify-center gap-2 sm:flex-row xl:gap-4 lg:w-auto">
      <div className="flex-all">
        <img
          className="block dark:hidden min-w-[50px] h-[73px]"
          src={svg}
          alt="Services"
        />
        <img
          className="hidden dark:block min-w-[50px] h-[73px]"
          src={svgDark}
          alt="Services"
        />
      </div>
      <div className="space-y-2 text-center  text-zinc-700 dark:text-white sm:text-right">
        <h6 className="font-DanaMedium lg:text-lg">{title}</h6>
        <span className="block text-sm">{desc}</span>
      </div>
    </div>
  );
};

export default ServicesItem;
