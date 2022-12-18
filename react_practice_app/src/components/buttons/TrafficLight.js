
import React, { useState, useEffect } from 'react';
import './btn.css';

function TrafficLight() {
  // Declare a state variable called "color" with an initial value of "red"
  const [color, setColor] = useState('red');
  const [lastColor, setLastColor] = useState('red')
  const [waitTime, setWaitTime] = useState(8000)

    // Here we control which color the light displays and how long it displays it.
  useEffect(() => {
    const changeColor = setInterval(() => {
        if (color === 'red') {
            setLastColor('red')
            setWaitTime(3000)
            setColor('yellow');
        } else if (color === 'green') {
            setLastColor('green')
            setWaitTime(3000)
            setColor('yellow');
        } else {
            if (lastColor === 'red') {
                setWaitTime(12000)
                setColor('green')
            } else {
                setWaitTime(8000)
                setColor('red')
            }
        }
    }, waitTime);
        return () => clearInterval(changeColor);
    }, [color, lastColor, waitTime]);



  return (
    <div id="traffic-light-div">
        <div id="traffic-light-body">
            {color === 'red' 
                ? <div class="traffic-light" style={{ backgroundColor: 'red', width: 100, height: 100, border: '3px solid black' }}></div> 
                : <div class="traffic-light" style={{ backgroundColor: 'rgba(133, 3, 3, 0.712)', width: 100, height: 100 }}></div> 
            }

            {color === 'yellow' 
                ? <div class="traffic-light" style={{ backgroundColor: 'yellow', width: 100, height: 100, border: '3px solid black' }}></div> 
                : <div class="traffic-light" style={{ backgroundColor: 'rgba(121, 113, 3, 0.664)', width: 100, height: 100 }}></div> 
            }

            {color === 'green' 
                ? <div class="traffic-light" style={{ backgroundColor: '#30df30', width: 100, height: 100, border: '3px solid black' }}></div>
                : <div class="traffic-light" style={{ backgroundColor: 'rgba(3, 121, 19, 0.664)', width: 100, height: 100 }}></div>
            }
        </div>
    </div>
  );
}

export default TrafficLight;