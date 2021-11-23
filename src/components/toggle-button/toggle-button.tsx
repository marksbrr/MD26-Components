import { useState } from 'react';
import './toggle-button.scss';

function ToggleButton() {
  const [onToggle, setOnToggle] = useState(false);

  const toggle = () => {
    setOnToggle(!onToggle);
  };

  return (
    <div>
      <div className="toggle-container">
        <button
          onClick={toggle}
          className={`toggle--button ${onToggle ? 'toggle--close' : ''}`}
        >
          {onToggle ? 'Close' : 'Open'}
        </button>
      </div>
    </div>
  );
}

export default ToggleButton;
