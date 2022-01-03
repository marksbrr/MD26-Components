import { useState } from 'react';
import { FaStar } from 'react-icons/fa';
import './rating.scss';

const ratingArray = ['0', '1', '2', '3', '4'];

const Rating = () => {
  const [rating, setRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);
  return (
    <div className="rating-container">
      {ratingArray.map((star, i) => {
        const ratingValue = i + 1;

        return (
          <div key={Math.random()}>
            <label
              htmlFor={star}
            >
              <input
                id={star}
                type="radio"
                name="rating"
                value={ratingValue}
                className="rating-radio"
                onClick={() => setRating(ratingValue)}
              />
              <FaStar
                className="star"
                color={ratingValue <= (hoverRating || rating) ? 'yellow' : 'e5e5e5'}
                size={25}
                onMouseEnter={() => setHoverRating(ratingValue)}
                onMouseLeave={() => setHoverRating(0)}
              />
            </label>
          </div>
        );
      })}
    </div>
  );
};

export default Rating;
