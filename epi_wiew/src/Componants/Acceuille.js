import React, { useState } from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";

const BetaseriesOAuth2 = () => {
  const [token, setToken] = useState(null);
  const [error, setError] = useState(null);

  const handleAuth = async () => {
    try {
      // Requête de demande de jeton
      const response = await axios.post('https://api.betaseries.com/oauth/access_token', {
        client_id: '5e5b18e63fb7',
        client_secret: '8a63bc9f71009ec837ce294dd27d919e',
        redirect_uri: 'http://localhost:3000/Profile',
        code: 'AUTHORIZATION_CODE',
        grant_type: 'authorization_code'
      });
      setToken(response.data.access_token);
    } catch (err) {
      setError(err);
    }

  };

  return (
    <div>
          
        <h1>Idientifier-vous</h1> <br/>
      <button onClick={handleAuth}>Authorize</button>
      {token && <p>Access token: {token}</p>}
      {error && <p>Error: {error.message}</p>}
      {token && <Link to="/Profile">Profile</Link>}
    </div>
  );
};

export default BetaseriesOAuth2;
