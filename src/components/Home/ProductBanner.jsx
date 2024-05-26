import React from 'react';

const ProductBanner = () => {
  return (
    <section className="py-5 md:py-10">
      <div className="container flex items-center flex-col md:flex-row text-white gap-5 mt-10 md:mt-20 child:h-36 child:md:h-[248px] child:rounded-2xl child:pr-12 child:w-full child:md:w-1/2">
        <div className="flex items-start justify-center flex-col category-banner__item-1 gap-4">
          <h6 className="font-DanaBold sm:text-2xl md:text-4xl">انواع قهوه</h6>
          <span className="font-DanaMedium md:text-xl">
            ترکیبی و تک خاستگاه
          </span>
        </div>
        <div className="flex items-start justify-center flex-col category-banner__item-2 gap-4">
          <h6 className="font-DanaBold sm:text-2xl md:text-4xl">
            پودر های فوری
          </h6>
          <span className="font-DanaMedium md:text-xl">
            نسکافه ، هات چاکلت ، ماسالا
          </span>
        </div>
      </div>
    </section>
  );
};

export default ProductBanner;
