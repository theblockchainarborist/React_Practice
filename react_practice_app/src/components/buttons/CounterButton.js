import React, { useState } from 'react';

function CounterButton() {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 1);
  }

  return (
    <div>
      <button id="increase-count-btn" onClick={handleClick}>
        Click me to increase the count!
      </button>
      <div>
        <h2 class="btn-label">
          Current count: {count}
        </h2>
      </div>
    </div>
  );
}

export default CounterButton;