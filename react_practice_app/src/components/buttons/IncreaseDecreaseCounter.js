import React, { useState } from 'react';
import './btn.css';

function IncreaseDecreaseCounter() {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleDecrement = () => {
    setCount(count - 1);
  };

  return (
    <div className="two-row-grid">
      <h1>{count}</h1>
      <div className="row">
        <p className="label-text">Click to Increase</p>
        <button className="square no-select" onClick={handleIncrement}>+</button>
        <button className="square no-select" onClick={handleDecrement}>-</button>
        <p className="label-text">Click to Decrease</p>
      </div>


      
    </div>
  );
}

export default IncreaseDecreaseCounter;