import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import './CryptoPriceScroller.css';

function CryptoPriceScroller() {
  const [prices, setPrices] = useState([]);
  const scrollContainerRef = useRef(null);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        'https://api.binance.us/api/v3/ticker/price'
      );
      setPrices(result.data);
    };
    fetchData();

    const intervalId = setInterval(fetchData, 60000);

    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;
    let animationFrameId;

    const scroll = () => {
      scrollContainer.scrollLeft += 1;
      if (scrollContainer.scrollLeft > scrollContainer.scrollWidth / 2) {
        scrollContainer.scrollLeft = 0;
      }
      animationFrameId = requestAnimationFrame(scroll);
    };

    scroll();

    return () => cancelAnimationFrame(animationFrameId);
  }, []);

  return (
    <div className="crypto-prices">
      <div className="scroll-container" ref={scrollContainerRef}>
        {prices.slice(0, 20).map((price) => (
          <div key={price.symbol} className="crypto-price">
            {price.symbol}: ${price.price}
          </div>
        ))}
        {prices.slice(0, 20).map((price) => (
          <div key={price.symbol} className="crypto-price">
            {price.symbol}: ${price.price}
          </div>
        ))}
      </div>
    </div>
  );
}

export default CryptoPriceScroller;


