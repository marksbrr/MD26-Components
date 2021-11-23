import React, { useState } from 'react';
import './switch.scss';

export default function Switch() {
  const [isChecked, setIsChecked] = useState(false);

  return (
    <div className="switch-container">
      <label htmlFor="switch" className="switch">
        <input type="checkbox" id="switch" checked={isChecked} onChange={() => setIsChecked(!isChecked)} />
        <span className="slider" />
      </label>
    </div>
  );
}
