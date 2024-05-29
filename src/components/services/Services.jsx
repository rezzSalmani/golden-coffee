import React from 'react';
import ServicesItem from './ServicesItem';
const servicesData = [
  {
    title: 'پشتیبانی شبانه روزی',
    desc: '7 روز هفته ، 24 ساعته',
    svg: 'images/services/support.svg',
    svgDark: 'images/services/support-dark.svg',
  },
  {
    title: 'امکان تحویل اکسپرس',
    desc: 'ارسال بسته با سرعت باد',
    svg: 'images/services/express-delivery.svg',
    svgDark: 'images/services/express-delivery-dark.svg',
  },
  {
    title: 'رست تخصصی',
    desc: 'تازه برشته شده و با کیفیت',
    svg: 'images/services/coffee.svg',
    svgDark: 'images/services/pitcher.svg',
  },
  {
    title: 'اکسسوری قهوه',
    desc: 'وسایل و ادوات دم آوری',
    svg: 'images/services/pitcher.svg',
    svgDark: 'images/services/pitcher-dark.svg',
  },
];
const Services = () => {
  return (
    <section className="container py-10 md:py-20">
      <div className="services-wrapper flex items-center justify-evenly  flex-wrap text-zinc-700 dark:text-white child:w-1/2 gap-y-11 lg:child:w-auto child:text-center lg:child:text-right ">
        {servicesData?.map((service, index) => (
          <ServicesItem
            key={index}
            title={service.title}
            desc={service.desc}
            svg={service.svg}
            svgDark={service.svgDark}
          />
        ))}
      </div>
    </section>
  );
};

export default Services;
