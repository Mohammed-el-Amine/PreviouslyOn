import React, { useState, useEffect } from 'react';
import axios from "axios";

const BetaseriesOAuth2 = () => {
  const [url, setUrl] = useState('');

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const code = urlParams.get('code');
    console.log(code);
  }, []);

  const handleClick = () => {
    const clientId = "5e5b18e63fb7";
    const redirectUri = "http://localhost:3000/Profile";
    setUrl(`https://www.betaseries.com/authorize?client_id=${clientId}&redirect_uri=${redirectUri}`);
  }

  return (
    <div>
      <button onClick={handleClick}>Connecter avec Betaseries</button>
      {url && <a href={url}>Se connecter</a>}
    </div>
  );
}

export default BetaseriesOAuth2;
