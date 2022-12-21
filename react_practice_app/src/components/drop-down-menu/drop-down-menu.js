import './drop-down-menu.css';
import React, { useState } from 'react';

function MyDropdownMenu(props) {
  const [selectedOption, setSelectedOption] = useState('option1');

  const handleChange = (event) => {
    setSelectedOption(event.target.value);
    props.onChange(event.target.value);
  }

  return (
    <div className="row">
      <select id="drop-down-menu" value={selectedOption} onChange={handleChange}>
        <option value={"makeSelection"}>Select Display Options </option>
        <option value="buttons">Buttons</option>
        <option value="api-calls">API Calls</option>
        <option value="random-components">Random Components</option>
      </select>
      {selectedOption === 'buttons' && <Buttons />}
      {selectedOption === 'api-calls' && <ApiCalls />}
      {selectedOption === 'random-components' && <RandomComponents />}
    </div>
  );
}

function Buttons() {
  return <div>Here are some Button Elements!</div>;
}

function ApiCalls() {
  return <div>Here are some API Calls!</div>;
}

function RandomComponents() {
  return <div>Here are some Random Components!</div>;
}

export default MyDropdownMenu;
