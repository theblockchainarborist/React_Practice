import React, { useState } from 'react';

function GrowingButton() {
  const [width, setWidth] = useState(120);

  const handleClick = () => {
    if (width >= 400) {
        setWidth(120);
      } else {
        setWidth(width + 10);
      }
  }

  return (
    <button class="btn" style={{ width: `${width}px` }} onClick={handleClick}>
        <div class="btn-text">Click me to grow</div>
    </button>
  );
}

export default GrowingButton;