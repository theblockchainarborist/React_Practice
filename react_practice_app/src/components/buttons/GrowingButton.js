import React, { useState } from 'react';

function GrowingButton() {
  const [width, setWidth] = useState(120);

  const handleClick = () => {
    if (width >= 350) {
        setWidth(120);
      } else {
        setWidth(width + 10);
      }
  }

  return (
    <button className="btn no-select" style={{ width: `${width}px` }} onClick={handleClick}>
        <div className="btn-text">Click me to grow</div>
    </button>
  );
}

export default GrowingButton;