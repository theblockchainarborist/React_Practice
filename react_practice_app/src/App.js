import logo from './logo.svg';
import './App.css';
import MyDropdownMenu from './components/drop-down-menu/drop-down-menu';
import React, { useState } from 'react';
import ColorToggleBtn from './components/buttons/btn-change-color-on-click';
import CounterButton from './components/buttons/CounterButton';
import TrafficLight from './components/buttons/TrafficLight';


function App() {

  const [showButtons, setShowButtons] = useState(false);
  const [showApiCalls, setShowApiCalls] = useState(false);
  const [showRandomComponents, setShowRandomComponents] = useState(false);


  const handleDropdownChange = (value) => {
    switch (value) {
      case ('buttons'): {
        setShowRandomComponents(false);
        setShowApiCalls(false);
        setShowButtons(true);
      } break;
      case ('api-calls'): {
        setShowRandomComponents(false);
        setShowButtons(false);
        setShowApiCalls(true);
      } break;
      case ('random-components'): {
        setShowButtons(false);
        setShowApiCalls(false);
        setShowRandomComponents(true);
      } break;
      default : {
        setShowRandomComponents(false);
        setShowButtons(false);
        setShowApiCalls(false);
      }
    }
    
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


      <div id="api-call-examples-div">
        {showApiCalls === true ?
          <div>
            Hello API Calls
          </div>
          : ''}
      </div>


      <div id="random-components-div">
        {showRandomComponents === true ?
          <div>
            <div class="btn-element"> 
            <TrafficLight />
            <h2>This is a Traffic Light!</h2>
            </div>
          </div>
          : ''}
      </div>

    </div>
  );
}

export default App;
