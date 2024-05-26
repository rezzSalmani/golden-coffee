import React, { useState, useEffect, useRef } from 'react';

const CountUp = ({ start = 0, end, ...props }) => {
  const [value, setValue] = useState(null);
  const ref = useRef(start);

  const counter = end / 200;

  const Count = () => {
    if (ref.current < end) {
      const result = Math.ceil(ref.current + counter);
      if (result > end) return setValue(end);
      setValue(result);
      ref.current = result;
    }
    setTimeout(Count, 20);
  };

  useEffect(() => {
    let isMounted = true;
    if (isMounted) {
      Count();
    }
    return () => (isMounted = false);
  }, [end]);

  return (
    <span className="sm:text-xl md:text-2xl lg:text-3xl text-center" {...props}>
      {value}+
    </span>
  );
};

export default CountUp;
