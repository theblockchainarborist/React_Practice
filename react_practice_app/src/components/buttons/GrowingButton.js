import React, { useState } from 'react';

function GrowingButton() {
  const [width, setWidth] = useState(50);

  const handleClick = () => {
    if (width >= 300) {
        setWidth(50);
      } else {
        setWidth(width + 10);
      }
  }

  return (
    <button class="btn" style={{ width: `${width}px` }} onClick={handleClick}>
        <p class="btn-text">Click me to grow</p>
    </button>
  );
}

export default GrowingButton;