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
    <div class="two-row-grid">
      <h1>{count}</h1>
      <div class="row">
        <p class="label-text">Click to Increase</p>
        <button class="square" onClick={handleIncrement}>+</button>
        <button class="square" onClick={handleDecrement}>-</button>
        <p class="label-text">Click to Decrease</p>
      </div>


      
    </div>
  );
}

export default IncreaseDecreaseCounter;