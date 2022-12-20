import React, { useState } from 'react';

function ShrinkingButton() {
  const [width, setWidth] = useState(350);

  const handleClick = () => {
    if (width <= 120) {
        setWidth(350);
      } else {
        setWidth(width - 10);
      }
  }

  return (
    <button class="btn" style={{ width: `${width}px` }} onClick={handleClick}>
        <div class="btn-text">Click me to shrink</div>
    </button>
  );
}

export default ShrinkingButton;