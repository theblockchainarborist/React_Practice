import logo from './logo.svg';
import './App.css';
import MyDropdownMenu from './components/drop-down-menu/drop-down-menu';
import React, { useState } from 'react';
import ColorToggleBtn from './components/buttons/btn-change-color-on-click';
import CounterButton from './components/buttons/CounterButton';


function App() {

  const [showButtons, setShowButtons] = useState(false)


  const handleDropdownChange = (value) => {
    {value === 'buttons' ? setShowButtons(true) : setShowButtons(false)}
  }


  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <div id="drop-down-menu-div">
          <MyDropdownMenu id="drop-down-menu" onChange={handleDropdownChange} />
        </div>
      </header>

      <div id="button-examples-div">
      {showButtons === true ?
          <div>

            <div class="btn-element" id="color-toggle-btn-main-div"> 
                {showButtons === true ? <ColorToggleBtn /> : ""}
                {showButtons === true ? <h2 class="btn-label"> "These buttons change color on click! " </h2> : "" } 
            </div>

            <div class="btn-element" id="counter-btn-main-div">
                {showButtons === true ? <CounterButton /> : ""}
            </div>
            
          </div>
      : '' }

          
        
      </div>

    </div>
  );
}

function Option1() {
  return <div>Option 1 selected</div>;
}

function Option2() {
  return <div>Option 2 selected</div>;
}

function Option3() {
  return <div>Option 3 selected</div>;
}
export default App;
