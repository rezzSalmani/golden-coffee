import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import ProductItem from '../products/ProductItem';
import products from '../../products';
import { useProductContext } from '../../store/ProductContext';
const settings = {
  dots: false,
  infinite: true,
  slidesToShow: 4,
  slidesToScroll: 1,
  centerMode: true,
  centerPadding: '8px',
  autoplay: true,
  speed: 1000,
  autoplaySpeed: 4000,
  cssEase: 'linear',
  pauseOnHover: true,
  responsive: [
    {
      breakpoint: 480, // Adjust the breakpoint as per your needs
      settings: {
        slidesToShow: 1, // Number of slides to show on mobile
      },
    },
    {
      breakpoint: 640, // Adjust the breakpoint as per your needs
      settings: {
        slidesToShow: 2, // Number of slides to show on mobile
      },
    },
    {
      breakpoint: 1025, // Adjust the breakpoint as per your needs
      settings: {
        slidesToShow: 3, // Number of slides to show on mobile
      },
    },
  ],
};
const HighSaleProducts = () => {
  const { productData } = useProductContext();
  const [highSaleProducts, setHighSaleProducts] = useState([]);

  useEffect(() => {
    if (productData)
      setHighSaleProducts(productData.filter(product => product.isPopular));
  }, [productData]);

  const slider = React.useRef(null);
  return (
    <div className="container py-5 md:py-10">
      <div className="relative text-zinc-700 dark:text-white space-y-2 md:space-y-4">
        <h3 className="text-2xl md:text-5xl font-MorabbaMedium">
          محصولات پر فروش
        </h3>
        <div className="flex justify-between items-center child:flex child:items-center">
          <span className="font-MorabbaLight text-lg md:text-3xl">
            پیشنهاد قهوه خور ها ...
          </span>
          <div className="gap-3 child:cursor-pointer">
            {/* custom keys */}
            <span
              onClick={() => slider?.current?.slickPrev()}
              className="hover:bg-gray-300 hover:text-zinc-700 transition-colors rounded-full p-1 md:p-2 dark:bg-zinc-700 dark:hover:bg-white bg-white "
            >
              <svg
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m8.25 4.5 7.5 7.5-7.5 7.5"
                />
              </svg>
            </span>
            <span
              onClick={() => slider?.current?.slickNext()}
              className="hover:bg-gray-300 hover:text-zinc-700 transition-colors rounded-full p-1 md:p-2 dark:bg-zinc-700 dark:hover:bg-white bg-white "
            >
              <svg
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6 "
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 19.5 8.25 12l7.5-7.5"
                />
              </svg>
            </span>
          </div>
        </div>
      </div>
      <Slider ref={slider} {...settings} arrows={false} className="py-6">
        {highSaleProducts.map(product => (
          <div dir="rtl" className="px-2" key={product.id}>
            <ProductItem {...product} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default HighSaleProducts;
