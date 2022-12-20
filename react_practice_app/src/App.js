import logo from './logo.svg';
import './App.css';
import MyDropdownMenu from './components/drop-down-menu/drop-down-menu';
import React, { useState } from 'react';
import ColorToggleBtn from './components/buttons/btn-change-color-on-click';
import CounterButton from './components/buttons/CounterButton';
import TrafficLight from './components/buttons/TrafficLight';
import IncreaseDecreaseCounter from './components/buttons/IncreaseDecreaseCounter';
import WeatherForecastHourly from './components/Api-Components/WeatherForecastHourly';
import JumpingButton from './components/buttons/JumpingButton';
import SpinningButton from './components/buttons/SpinningButton';
import GrowingButton from './components/buttons/GrowingButton';
import Calendar from './components/Calendar/Calendar';
import WeatherForecastSevenDay from './components/Api-Components/WeatherForecastSevenDay';
import PopulationByCountry from './components/Api-Components/PopulationByCountry';
import BitcoinTicker from './components/Api-Components/BitcoinTicker';



function App() {

  const [showButtons, setShowButtons] = useState(false);
  const [showApiCalls, setShowApiCalls] = useState(false);
  const [showRandomComponents, setShowRandomComponents] = useState(false);
  const [showHourlyForecast, setShowHourlyForecast] = useState(false);
  const [showSevenDayForecast, setShowSevenDayForecast] = useState(false);



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
        
        <div id="drop-down-menu-div">
          <img src={logo} className="App-logo" alt="logo" />
          <MyDropdownMenu id="drop-down-menu" onChange={handleDropdownChange} />
        </div>
      </header>

      <div id="button-examples-div">
      {showButtons === true ?
          <div>

            <div class="item" id="color-toggle-btn-main-div"> 
                <ColorToggleBtn />
                <h2 class="btn-label"> These buttons change color on click!</h2>
            </div>

            <div class="item" id="counter-btn-main-div">
                <CounterButton />
            </div>

            <div class="item" id="increase-decrease-counter-div">
              <IncreaseDecreaseCounter />
            </div>

            <div class="item basic-row" id="increase-decrease-counter-div">
              <div class="basic-row">
              <p class="label">This Button Jumps!</p>
                <JumpingButton />
              </div>
              <div class="basic-row">
              <p class="label">This Button Spins!</p>
                <SpinningButton />
              </div>
              <div class="basic-row">
              <p class="label">This Button Grows! (Max size 300px)</p>
                <GrowingButton />
              </div>
              
            </div>

          </div>
      : '' }

          
        
      </div>


      <div id="api-call-examples-div">
        {showApiCalls === true ?
          <div class="api-item">

            <button class="standard-btn-short" onClick={() => setShowSevenDayForecast(!showSevenDayForecast)}>Click to show or hide the Seven Day Forecast</button>
            {showSevenDayForecast && <WeatherForecastSevenDay />}

            <button class="standard-btn-short" onClick={() => setShowHourlyForecast(!showHourlyForecast)}>Click to show or hide the Hourly Forecast</button>
            {showHourlyForecast && <WeatherForecastHourly />}
            
            <div>
              <BitcoinTicker />
            </div>

            <PopulationByCountry />

          </div>
          : ''}
      </div>


      <div id="random-components-div">
        {showRandomComponents === true ?
          <div>
            <div class="item"> 
            <TrafficLight />
            <h2>This is a Traffic Light</h2>
            <h4>(It acts like a real one!)</h4>
            </div>
            <div class="item"> 
            <Calendar />
            <h2>This is Calendar</h2>
            <h4>(Click through the months and years!)</h4>
            </div>
          </div>
          : ''}
      </div>

    </div>
  );
}

export default App;
