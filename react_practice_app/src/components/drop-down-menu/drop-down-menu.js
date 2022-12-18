import './drop-down-menu.css';
import React, { useState } from 'react';

function MyDropdownMenu(props) {
  const [selectedOption, setSelectedOption] = useState('option1');

  const handleChange = (event) => {
    setSelectedOption(event.target.value);
    props.onChange(event.target.value);
  }

  return (
    <div>
      <select id="drop-down-menu" value={selectedOption} onChange={handleChange}>
        <option value={"makeSelection"}>Select Element </option>
        <option value="buttons">Buttons</option>
        <option value="option2">Option 2</option>
        <option value="option3">Option 3</option>
      </select>
      {selectedOption === 'buttons' && <Buttons />}
      {selectedOption === 'option2' && <Option2 />}
      {selectedOption === 'option3' && <Option3 />}
    </div>
  );
}

function Buttons() {
  return <div>Here are some Button Elements</div>;
}

function Option2() {
  return <div>Option 2 selected</div>;
}

function Option3() {
  return <div>Option 3 selected</div>;
}

export default MyDropdownMenu;
