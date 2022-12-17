import React, { useState } from 'react';
import './btn-change-color-on-click.css';

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
      <button class="color-change-btn" style={{ backgroundColor: colors.button1 }} onClick={() => handleClick('button1')}>
        Button 1
      </button>
      <button class="color-change-btn" style={{ backgroundColor: colors.button2 }} onClick={() => handleClick('button2')}>
        Button 2
      </button>
      <button class="color-change-btn" style={{ backgroundColor: colors.button3 }} onClick={() => handleClick('button3')}>
        Button 3
      </button>
    </div>
  );
}

export default ColorToggleBtn;