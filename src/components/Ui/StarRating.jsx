import React, { useState } from 'react';
import Star from './Star';

const StarRating = ({
  maxRating = 5,
  color = '#FACC15',
  size,
  initStar,
  classes,
}) => {
  const [rating, setRating] = useState(initStar || 0);
  const [tempRating, setTempRating] = useState(0);
  return (
    <div dir="ltr" className="flex items-center justify-between gap-3">
      <div className="flex gap-0.5 md:gap-1">
        {Array.from({ length: maxRating }, (_, i) => (
          <Star
            key={i}
            classes={classes}
            onClick={() => setRating(i + 1)}
            full={tempRating ? tempRating >= i + 1 : rating >= i + 1}
            onHoverIn={() => setTempRating(i + 1)}
            onHoverOut={() => setTempRating(0)}
            color={color}
            size={size}
          />
        ))}
      </div>
      {/* <p style={textStyle}>{tempRating || rating || ''}</p>  */}
    </div>
  );
};

export default StarRating;
