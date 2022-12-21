import React, { useState, useEffect } from 'react';
import './PopulationByCountry.css';

const PopulationByCountry = () => {
  const [countries, setCountries] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState('select-country');
  const [countryName, setCountryName] = useState(null);
  const [population, setPopulation] = useState(null);
  const [countryFlag, setCountryFlag] = useState(null);

  useEffect(() => {
    // Fetch the list of countries from the RestCountries API
    fetch('https://restcountries.com/v2/all')
      .then((response) => response.json())
      .then((data) => setCountries(data));
  }, []);

  const handleChange = (event) => {
    setSelectedCountry(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Fetch the population data for the selected state
    fetch(`https://restcountries.com/v2/name/${selectedCountry}`)
      .then((response) => response.json())
      .then((data) => {
        setCountryName(data[0].name)
        setPopulation(data[0].population)
        setCountryFlag(data[0].flag)
      });
  };

  return (
    <div id="population-main-div">
      <form id="population-by-country-main" onSubmit={handleSubmit}>
        <label id="title-label">
          Select a Country
          <select id="country-selector-drop-down" value={selectedCountry} onChange={handleChange}>
            {countries.map((country) => (
              <option key={country.name} value={country.name}>
                {country.name}
              </option>
            ))}
          </select>
        </label>
        <button className="standard-btn" type="submit">Show population</button>

          {countryName ? <h1 id="country-name">{countryName}</h1> : null}
          {countryFlag ? <img className="small-img" src={countryFlag} alt="Country Flag" /> : null}
          {population ? <p className="population-text">Population</p> : null}
          {population ? <p id="country-population-num">{population}</p> : null}
          {selectedCountry === 'select-country' ? <p className="population-text">Please select a country and click Show Population to see the countries population!</p> : null}
        
      </form>
    </div>
  );
};

export default PopulationByCountry;