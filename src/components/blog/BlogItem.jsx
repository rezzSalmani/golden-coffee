import React from 'react';
import { Link } from 'react-router-dom';

const BlogItem = ({ id, title, image, month, year, day }) => {
  return (
    <div
      className=" flex flex-row md:flex-col gap-4 shadow-main 
    bg-white dark:bg-zinc-700 rounded-2xl py-3 px-1.5 sm:h-30 md:h-full md:p-2.5 md:pb-2 group gap-x-2.5 overflow-hidden"
    >
      <div className="relative rounded-2xl rounded-bl-4xl overflow-hidden w-2/3 md:w-full">
        <Link to={`/blogs/${id}`}>
          <img
            src={image}
            loading="lazy"
            alt="Blog Image"
            className="h-full w-full object-cover "
          />
          <div className="invisible absolute inset-0 w-full h-full flex-all opacity-0 group-hover:opacity-100 group-hover:visible bg-gradient-to-r from-orange-200/80 to-orange-300/80 transition-all delay-100 duration-200 ">
            <span className="flex-all w-[64px] md:w-full text-amber-900">
              <svg
                width="136"
                height="54"
                viewBox="0 0 100 40"
                fill="currentColor"
              >
                <path d="M7.22937 0.610531C4.44214 1.47319 2.66845 3.11226 1.2326 6.17471C-1.55463 12.1271 0.514679 18.0795 6.13137 20.2361C8.49629 21.0988 14.7887 21.487 15.8867 20.7537C16.1401 20.5812 16.3934 18.9421 16.4779 16.8717C16.6468 12.5584 16.4779 12.3859 12.5504 12.5584C9.76321 12.6878 9.00306 13.3348 10.6923 14.1112C11.917 14.6719 12.4237 16.2247 12.0437 17.9069C11.7903 18.8559 11.5791 18.9853 10.6078 18.7265C7.35606 17.9069 6.13137 15.7934 6.13137 10.9625C6.08914 8.11571 6.30029 7.20991 7.10267 5.74338C9.00306 2.29272 5.28675 2.55152 53.2186 2.55152C83.9626 2.55152 96.1251 2.68092 96.5474 3.02599C97.1808 3.58672 97.3498 13.3348 96.7163 13.3348C96.5051 13.3348 94.9848 11.4801 93.3378 9.23717L90.3395 5.13951H87.8056C86.412 5.13951 85.2718 5.22578 85.2718 5.35518C85.2718 5.48458 85.5674 6.04531 85.9475 6.60604C86.4542 7.46871 86.5387 8.71957 86.412 13.4211C86.3275 16.5698 86.1164 19.5891 85.9475 20.1499C85.6096 21.0988 85.6518 21.1419 87.2144 21.0125L88.8614 20.8831L88.9881 16.4404C89.0303 14.025 89.2837 12.0408 89.4948 12.0408C89.6638 12.0408 91.0996 13.9818 92.6199 16.3541C95.4494 20.7969 96.1251 21.3145 98.6167 21.0125L99.8414 20.8831L99.9681 11.8683C100.095 1.68886 99.9681 1.2144 97.2231 0.437998C96.1673 0.136066 81.1754 -0.0364666 52.3318 0.00666618C17.4492 0.00666618 8.70744 0.136066 7.22937 0.610531Z" />
                <path d="M24.0797 5.13955C22.1371 5.61401 19.3921 7.64127 18.3785 9.40973C17.8718 10.3587 17.5762 11.6958 17.5339 13.3349C17.4917 15.4052 17.7029 16.0522 18.7164 17.3894C20.2789 19.4598 21.9682 20.5381 24.8398 21.142C29.3585 22.0909 34.384 20.193 36.1577 16.8718C39.5784 10.5312 35.3553 4.57882 27.5426 4.75135C26.4446 4.79448 24.8821 4.96702 24.0797 5.13955ZM29.5697 7.85694C29.9498 8.15887 30.6677 9.06467 31.1745 9.8842C34.0461 14.7151 29.1896 21.2714 25.1355 18.0364C22.1371 15.6209 21.9259 11.0057 24.7132 8.37454C25.9801 7.16681 28.3872 6.95114 29.5697 7.85694Z" />
                <path d="M52.9652 12.9466V21.1851L58.2441 21.0125C64.3253 20.7969 66.3524 20.0636 68.1683 17.3462C69.5197 15.2758 69.6463 11.2644 68.4217 9.19403C66.4368 5.87278 63.4807 4.75132 56.9771 4.70818H52.9652V12.9466ZM62.7205 8.7627C64.0297 10.0998 64.1564 10.488 64.1564 12.6447C64.1564 16.6561 62.7627 18.5108 59.7644 18.5108H58.2441V13.2054C58.2441 10.2724 58.3707 7.72751 58.5397 7.59811C59.2998 6.77858 61.3691 7.38244 62.7205 8.7627Z" />
                <path d="M71.2508 12.3426C71.3353 16.5696 71.462 20.2791 71.5465 20.5379C71.6731 20.9692 73.2357 21.0986 77.4165 21.0986C82.8221 21.0986 83.1599 21.0555 83.7511 20.1497C84.6802 18.7694 84.638 17.4323 83.7089 17.9068C83.2866 18.1224 81.6396 18.295 79.9926 18.295H77.0364V16.1383V13.9817L79.0213 13.8523C80.4994 13.766 81.2173 13.4641 81.6818 12.7739C82.0197 12.2563 82.3153 11.6956 82.3153 11.5231C82.3153 11.3505 81.1328 11.178 79.697 11.0917L77.0364 10.9623L76.9098 9.40954C76.7408 7.20975 77.501 6.64902 80.0771 7.25288C81.8085 7.64108 82.1886 7.59795 82.6531 6.99408C82.9065 6.60588 83.1599 5.91575 83.1599 5.48442C83.1599 4.75116 82.6531 4.70802 77.1631 4.70802H71.1241L71.2508 12.3426Z" />
                <path d="M39.1559 12.5583C39.2403 16.8284 39.4937 20.236 39.7471 20.5379C40.0427 20.9261 41.6052 21.0986 44.6881 21.0986C49.4602 21.0986 50.347 20.7967 50.7271 19.1145C50.9382 18.2087 50.8115 18.1656 47.9399 18.2518L44.9415 18.295V11.6956V5.13935H41.9853H39.0292L39.1559 12.5583Z" />
                <path d="M4.31542 24.2908C2.11942 25.3691 0.683576 27.0513 0.134577 29.208C-0.287731 30.847 0.387961 34.7721 1.35927 36.2387C3.13296 38.9129 7.65165 40.25 13.0572 39.7756C15.5066 39.5168 15.6755 39.4736 16.2667 38.0071C16.6046 37.1876 16.7735 36.4112 16.689 36.2818C16.5623 36.1955 15.591 36.4112 14.493 36.7994C12.0436 37.6621 10.3966 37.6621 8.91857 36.8857C6.25803 35.4623 4.94888 32.788 5.54011 30.0275C6.46919 25.671 9.08749 24.5496 13.6062 26.4906C14.2819 26.7925 14.3663 26.62 14.2396 25.1534L14.1129 23.4712L10.3122 23.3418C7.01819 23.2556 6.2158 23.385 4.31542 24.2908Z" />
                <path d="M24.9239 23.9024C20.363 25.1964 17.7447 28.7333 18.2515 33.0035C18.7583 37.6187 23.108 40.4224 29.2315 39.9479C35.735 39.5166 39.7047 33.823 37.382 28.302C35.7772 24.42 30.1183 22.4359 24.9239 23.9024ZM31.0896 27.353C32.5255 29.0352 33.0745 31.3644 32.5255 33.4779C31.0896 38.9559 25.2196 38.8265 23.5726 33.2192C22.0945 28.1726 27.8801 23.6436 31.0896 27.353Z" />
                <path d="M40.0431 23.5574C40.0008 23.7731 40.0431 24.075 40.1275 24.3338C40.212 24.5495 40.3809 28.0432 40.5076 32.0978L40.7187 39.4304L43.4637 39.5598L46.251 39.6892L46.2087 36.1092V32.5291L48.4047 32.3997C50.6852 32.2703 51.7832 31.4939 51.3187 30.3724C51.1497 29.898 50.4318 29.7254 48.5314 29.7254H45.9976V27.8276C45.9976 25.4984 46.6311 25.1533 49.6294 25.8435C51.4454 26.2748 51.741 26.2317 52.2477 25.5415C52.5434 25.1102 52.7123 24.5063 52.67 24.1181C52.5434 23.6005 51.4876 23.4711 46.2932 23.3417C42.8725 23.2986 40.0431 23.3849 40.0431 23.5574Z" />
                <path d="M55.2453 23.5574C55.2031 23.7731 55.2453 24.075 55.3298 24.3338C55.4143 24.5495 55.5832 28.0432 55.7099 32.0978L55.921 39.4304L58.666 39.5598L61.4532 39.6892L61.411 36.1092V32.5291L63.607 32.3997C65.8875 32.2703 66.9855 31.4939 66.5209 30.3724C66.352 29.898 65.6341 29.7254 63.7337 29.7254H61.1999V27.8276C61.1999 25.4984 61.8333 25.1533 64.8317 25.8435C66.6476 26.2748 66.9432 26.2317 67.45 25.5415C67.7456 25.1102 67.9145 24.5063 67.8723 24.1181C67.7456 23.6005 66.6899 23.4711 61.4955 23.3417C58.0748 23.2986 55.2453 23.3849 55.2453 23.5574Z" />
                <path d="M70.4486 23.5576C70.4064 23.7732 70.4486 24.0752 70.4909 24.334C70.5753 24.5496 70.5753 27.8709 70.5753 31.6235C70.5331 36.0231 70.702 38.7404 70.9976 39.0855C71.3355 39.5168 72.9403 39.6462 77.0789 39.6462H82.7378L83.4557 38.1366C84.3426 36.2819 84.0469 35.9368 82.3155 36.8426C81.4709 37.2739 80.2462 37.4896 78.8103 37.4033L76.6143 37.2739L76.4876 34.7722L76.3609 32.3136H78.4303C80.584 32.3136 81.4709 31.796 81.4709 30.502C81.4709 29.855 81.0908 29.7256 78.8948 29.7256H76.3609L76.4876 27.6552C76.6143 25.4123 76.8677 25.2829 80.2884 25.973C81.6398 26.275 81.9354 26.1887 82.3155 25.4123C83.329 23.4713 82.78 23.2556 76.4032 23.2556C73.1514 23.2556 70.4486 23.385 70.4486 23.5576Z" />
                <path d="M86.4542 30.4589C86.4964 34.4703 86.6654 38.1366 86.7498 38.6542C86.961 39.6462 87.0877 39.6462 92.9155 39.6462H98.8278L99.4613 38.1366C100.264 36.1093 100.264 36.1093 98.5322 36.8426C96.674 37.619 93.1267 37.7052 92.5777 36.9288C92.3665 36.6701 92.2398 35.7211 92.282 34.9016C92.3243 34.0821 92.4087 33.1331 92.4087 32.8312C92.451 32.4861 93.1689 32.3136 94.5203 32.3136C96.674 32.3136 97.8143 31.5372 97.392 30.4157C97.223 29.9844 96.3784 29.7256 94.6892 29.6393L92.2398 29.5099L92.1131 27.9571C91.9442 25.7142 92.7044 25.1966 95.4494 25.8005C97.392 26.2318 97.6876 26.1887 98.1944 25.5417C98.5322 25.1104 98.7434 24.4634 98.6589 24.1183C98.5744 23.6007 97.4764 23.4713 92.451 23.3419L86.3275 23.2125L86.4542 30.4589Z" />
              </svg>
            </span>
          </div>
        </Link>
      </div>
      <div className="flex items-start md:items-start justify-between flex-col md:flex-row w-full divide-white/10 divide-y md:divide-none px-2">
        <h6 className="text-sm md:text-base xl:text-lg text-zinc-700 dark:text-white line-clamp-2 md:w-4/5 text-right pl-2">
          <Link to={`/blogs/${id}`}>{title}</Link>
        </h6>
        <span className="hidden md:block w-px h-[60px] bg-gray-100 dark:bg-white/10 "></span>
        <div className="flex justify-between items-center w-full md:w-fit gap-2 pt-2 md:pt-0">
          <div className="flex items-center gap-1 md:flex-col w-full text-xs md:text-sm md:pr-4 text-teal-600">
            <span className="md:text-lg h-4">{day}</span>
            <span className="">{month}</span>
            <span className="">{year}</span>
          </div>
          <div className="flex-all px-1.5 py-1 md:hidden rounded-md bg-orange-200/20">
            <Link
              to={`/blogs/${id}`}
              className="flex-all text-xs text-orange-300"
            >
              مطالعه
              <span>
                <svg
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="w-4 h-4"
                >
                  <path
                    fillRule="evenodd"
                    d="M17 10a.75.75 0 0 1-.75.75H5.612l4.158 3.96a.75.75 0 1 1-1.04 1.08l-5.5-5.25a.75.75 0 0 1 0-1.08l5.5-5.25a.75.75 0 1 1 1.04 1.08L5.612 9.25H16.25A.75.75 0 0 1 17 10Z"
                    clipRule="evenodd"
                  />
                </svg>
              </span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogItem;
