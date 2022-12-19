import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './WeatherForecast.css';

const BitcoinTicker = () => {
  const [price, setPrice] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Make a request to a Bitcoin price API to get the latest price
        const response = await axios.get('https://api.coindesk.com/v1/bpi/currentprice.json');
        const data = response.data;
        // Update the price state with the latest price
        setPrice(data.bpi.USD.rate);
      } catch (error) {
        // Update the error state if there was an error making the request
        setError(error);
      }
    };

    // Fetch the initial data
    fetchData();

    // Set up an interval to update the price every 30 seconds
    const interval = setInterval(fetchData, 30000);

    // Clear the interval when the component unmounts
    return () => clearInterval(interval);
  }, []);

  if (error) {
    return <p>An error occurred: {error.message}</p>;
  }

  if (price) {
    return <p class="btn-price">The current Bitcoin price is ${price}</p>;
  }

  return <p>Loading...</p>;
};

export default BitcoinTicker;