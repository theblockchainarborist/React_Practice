import React, { useState, useEffect } from 'react';
import './PublicIP.css';

function PublicIP() {
  const [ip, setIp] = useState(null);

  useEffect(() => {
    fetch('https://api.ipify.org?format=json')
      .then(response => response.json())
      .then(data => {
        setIp(data.ip);
      });
  }, []);

  return (
    <div id="public-ip-div">
        <p id="public-ip-text">Your public IP address is: &nbsp; </p>
        <p id="ip-address">{ip}</p>
       
    </div>
  );
}

export default PublicIP;