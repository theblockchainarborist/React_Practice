import React, { useState } from 'react';
import './btn.css';

const SpinningButton = () => {
  const [spinning, setSpinning] = useState(false);

  const handleClick = () => {
    setSpinning(true);
    setTimeout(() => setSpinning(false), 1000);
  };

  return (
    <button class="btn"
      onClick={handleClick}
      style={{
        transition: 'transform 0.5s',
        transform: spinning ? 'rotate(360deg)' : 'none',
      }}
    >
      Click me to spin
    </button>
  );
};

export default SpinningButton;