import React, { useState, useEffect } from 'react';
import axios from 'axios';

const WeatherForecastSevenDay = () => {
  const [forecast, setForecast] = useState(null);

  useEffect(() => {
    axios.get('https://api.weather.gov/gridpoints/CLE/83,66/forecast')
      .then(response => {
        setForecast(response.data.properties.periods);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  return (
    <div className="weather-forecast">
      { forecast && forecast.map(day => (
        <div className="day" key={day.number}>
          <h3>{day.name}</h3>
          <div id="temp-forecast-div">
            <h4>{day.temperature}{day.temperatureUnit}</h4>
            <p>{day.shortForecast}</p>
          </div>
          
        </div>
      ))}
    </div>
  );
};

export default WeatherForecastSevenDay;