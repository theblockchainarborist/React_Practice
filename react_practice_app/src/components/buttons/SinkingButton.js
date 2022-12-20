import React, { useState } from 'react';
import './btn.css';

const SinkingButton = () => {
  const [jumping, setJumping] = useState(false);

  const handleClick = () => {
    setJumping(true);
    setTimeout(() => setJumping(false), 1000);
  };

  return (
    <button class="btn"
      onClick={handleClick}
      style={{
        transition: 'transform 0.5s',
        transform: jumping ? 'translateY(20px)' : 'none',
      }}
    >
      Click me to sink
    </button>
  );
};

export default SinkingButton;