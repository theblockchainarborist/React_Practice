import React, { useState } from 'react';
import './btn.css';

function ColorToggleBtn() {
  const [colors, setColors] = useState({
    button1: 'blue',
    button2: 'red',
    button3: 'green'
  });

  function handleClick(button) {
    setColors(prevColors => ({
      ...prevColors,
      [button]: prevColors[button] === 'blue' ? 'red' : 'green' && 
                prevColors[button] === 'green' ? 'blue' : 'green'
    }));
  }



  return (
    <div id="color-change-btn-div">
      <button className="color-change-btn no-select" style={{ backgroundColor: colors.button1 }} onClick={() => handleClick('button1')}>
        Button 1
      </button>
      <button className="color-change-btn no-select" style={{ backgroundColor: colors.button2 }} onClick={() => handleClick('button2')}>
        Button 2
      </button>
      <button className="color-change-btn no-select" style={{ backgroundColor: colors.button3 }} onClick={() => handleClick('button3')}>
        Button 3
      </button>
    </div>
  );
}

export default ColorToggleBtn;