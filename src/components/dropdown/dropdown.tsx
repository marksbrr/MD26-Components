import { useState } from 'react';
import './dropdown.scss';
import dropdownArray from '../data/dropdownData';

export default function Dropdown() {
  const [selectOption, setSelectOption] = useState('');

  return (
    <div className="dropdown-container">
      <form>
        <select className="dropdown-select" value={selectOption} onChange={(e) => setSelectOption(e.target.value)}>
          <option
            value=""
            disabled
            hidden
          >
            Select
          </option>
          {dropdownArray.map((option) => (
            <option
              key={option.id}
            >
              {option.title}
            </option>
          ))}
        </select>
      </form>
    </div>
  );
}
