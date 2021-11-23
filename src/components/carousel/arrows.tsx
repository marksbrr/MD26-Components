import { FC } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLongArrowAltLeft, faLongArrowAltRight } from '@fortawesome/free-solid-svg-icons';

interface Props {
  previousSlide: () => void,
  nextSlide: () => void,
}

const Arrows: FC<Props> = ({ previousSlide, nextSlide }) => {
  const a = 5;
  return (
    <div className="arrows">
      <span
        className="previous"
        onClick={previousSlide}
      >
        <FontAwesomeIcon
          icon={faLongArrowAltLeft}
        />
      </span>
      <span
        className="next"
        onClick={nextSlide}
      >
        <FontAwesomeIcon
          icon={faLongArrowAltRight}
        />
      </span>
    </div>
  );
};

export default Arrows;
