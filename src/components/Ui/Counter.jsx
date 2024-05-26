import React from 'react';

const Counter = ({ children }) => {
  return (
    <div className="flex-all flex-col w-30 h-16 md:w-36 md:h-24  lg:w-44 lg:h-30 bg-gradient-to-l from-orange-200 to-orange-300 rounded-2xl  shadow-lg font-MorabbaMedium">
      {children}
    </div>
  );
};

export default Counter;
