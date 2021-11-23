import { useState, useEffect } from 'react';
import './carousel.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLongArrowAltLeft, faLongArrowAltRight } from '@fortawesome/free-solid-svg-icons';
import carouselArray from '../data/carouselData';

export default function Carousel() {
  const [slideIndex, setSlideIndex] = useState(0);

  useEffect(() => {
    setSlideIndex(0);
  }, []);

  const nextSlide = () => {
  };

  const previousSlide = () => {
  };

  return (
    <div className="container-slider">
      {carouselArray.map((item, index) => (
        <div>
          <img
            key={item.id}
            src={item.imgUrl}
            alt={item.title}
          />
        </div>
      ))}
      <button onClick={previousSlide}>
        <FontAwesomeIcon
          icon={faLongArrowAltLeft}
        />
      </button>
      <button onClick={nextSlide}>
        <FontAwesomeIcon
          icon={faLongArrowAltRight}
        />
      </button>
    </div>
  );
}
