import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './WeatherForecast.css';

const WeatherForecastHourly = () => {
  const [forecast, setForecast] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const result = await axios.get('https://api.weather.gov/gridpoints/CLE/83,66/forecast/hourly');
      setForecast(result.data);
    }
    fetchData();
  }, []);

  return (
    <div>
      {forecast ? (
        <div class="weather-data-main-div">
          <h2>Hourly Weather Forecast</h2>
            <div class=" weather-data-header-div">
                <h4 id="header-date">Date</h4>
                <h4 id="header-time">Time</h4>
                <h4 id="header-temp">Temperature</h4>
                <h4 id="header-forecast">Forecast</h4>
            </div>
            {forecast.properties.periods.map(period => (
              <div key={period.number}>
                <div id="forecast-data-div" class="weather-data-row">
                    <div id="weather-date" class="weather-data">
                        {getDate(period.startTime)}
                    </div>

                    <div id="weather-time" class="weather-data">
                        {getTimeOfDay(period.startTime)}
                    </div>
                    <div id="weather-temp" class="weather-data">
                        {period.temperature}
                        {period.temperatureUnit}
                    </div>
                    <div id="weather-forecast" class="weather-data">
                        {period.shortForecast}
                    </div>
                </div>
              </div>
            ))}
        </div>
      ) : (
        <p>Loading forecast...</p>
      )}
    </div>
  );
};


function getTimeOfDay(dateString) {
    const date = new Date(dateString);

    let hours = date.getHours();
    let minutes = date.getMinutes();

    const ampm = hours >= 12 ? 'pm' : 'am';
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'

    // pad the minutes with a leading zero if needed
    if (minutes < 10) {
        minutes = "0" + minutes.toString();
    } else {
        minutes = minutes.toString();
    }

    return `${hours}:${minutes} ${ampm}`;
  }

  function getDate (thisDate) {
    const date = new Date(thisDate);
  
    const month = date.getMonth(); // months are 0-indexed, so add 1 to get the correct month number
    const monthName = date.toLocaleString('default', { month: 'long' }); // get the month name
    const day = date.getDate(); // get the day of the month
  
    return `${monthName} ${day}`;
  }
  


export default WeatherForecastHourly;