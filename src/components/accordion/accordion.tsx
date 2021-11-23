import React, { FC, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';

import './accordion.scss';

interface Props {
  question: string;
  answer: string;
  index: number;
}

const Accordion: FC<Props> = ({ question, answer, index }) => {
  const [selected, setSelected] = useState(-1);

  const toggleSelected = (i: number) => {
    if (selected === i) {
      return setSelected(-1);
    }
    return setSelected(i);
  };

  return (

    <div className="accordion">
      <div className="accordion__container">
        <div className="accordion__card">
          <div className="accordion__card-question" onClick={() => toggleSelected(index)}>
            <h2>{question}</h2>
            <span>
              {selected === index ? (
                <FontAwesomeIcon
                  icon={faMinus}
                />
              ) : (
                <FontAwesomeIcon
                  icon={faPlus}
                />
              )}

            </span>
          </div>
          <div className={selected === index ? 'accordion__card-answer.visible' : 'accordion__card-answer'}>
            {answer}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Accordion;
