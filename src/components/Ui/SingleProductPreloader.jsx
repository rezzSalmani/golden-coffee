import React from 'react';
import ContentLoader from 'react-content-loader';

const SingleProductPreloader = props => (
  <>
    <div className="hidden md:block">
      <ContentLoader
        speed={2}
        // width={1200}
        // height={400}
        viewBox="0 0 1300 400"
        backgroundColor="#e3e3e3"
        foregroundColor="#d9d9d9"
        className=" sm:w-[600px] md:w-[700px] lg:w-[900px] xl:w-[1200px] md:h-[400px]"
        {...props}
      >
        <rect x="700" y="50" rx="3" ry="3" width="100" height="30" />
        <rect x="700" y="270" rx="3" ry="3" width="52" height="6" />
        <rect x="700" y="130" rx="3" ry="3" width="600" height="6" />
        <rect x="700" y="160" rx="3" ry="3" width="600" height="6" />
        <rect x="950" y="270" rx="3" ry="3" width="350" height="6" />
        <rect x="700" y="230" rx="3" ry="3" width="600" height="6" />
        <rect x="700" y="190" rx="3" ry="3" width="600" height="6" />
        <rect x="1200" y="50" rx="3" ry="3" width="100" height="30" />
        <rect x="1" y="20" rx="4" ry="4" width="450" height="300" />
      </ContentLoader>
    </div>
    <div className="block md:hidden py-10">
      <ContentLoader
        speed={2}
        // how to make it center of page
        // width={450}
        viewBox="0 0 450 450"
        backgroundColor="#e3e3e3"
        foregroundColor="#d9d9d9"
        className="w-full sm:w-[600px] h-full sm:h-[450px]"
        {...props}
      >
        <rect x="290" y="224" rx="3" ry="3" width="88" height="22" />
        {/* <rect x="100" y="400" rx="3" ry="3" width="52" height="5" /> */}
        <rect x="100" y="280" rx="3" ry="3" width="280" height="6" />
        <rect x="100" y="400" rx="3" ry="3" width="280" height="6" />
        <rect x="100" y="340" rx="3" ry="3" width="280" height="6" />
        <rect x="100" y="310" rx="3" ry="3" width="280" height="6" />
        <rect x="100" y="230" rx="3" ry="3" width="70" height="18" />
        <rect x="100" y="6" rx="4" ry="4" width="280" height="191" />
        <rect x="100" y="370" rx="3" ry="3" width="276" height="6" />
      </ContentLoader>
    </div>
  </>
);

export default SingleProductPreloader;
