import React, { useState } from 'react'; // add , useEffect if u want use it
import axios from "axios";

const BetaseriesOAuth2 = () => {
  const [url, setUrl] = useState('');

  // useEffect(() => {
  //   const urlParams = new URLSearchParams(window.location.search);
  //   const code = urlParams.get('code');
  // }, []);

  const handleClick = () => {

    const clientId = "5e5b18e63fb7";
    const redirectUri = "http://localhost:3000/Profile";
    setUrl(`https://www.betaseries.com/authorize?client_id=${clientId}&redirect_uri=${redirectUri}`)
  }

  const urlParams = new URLSearchParams(window.location.search);
  const code = urlParams.get('code');
  console.log(code);
  const clientId = "5e5b18e63fb7";
  const clientSecret = "8a63bc9f71009ec837ce294dd27d919e";
  const redirectUri = "http://localhost:3000/Profile";
  
  const postData = () => {
    const config = {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    }
    const data = `client_id=${clientId}&client_secret=${clientSecret}&redirect_uri=${redirectUri}&code=${code}`;
    axios.post('https://api.betaseries.com/oauth/access_token', data, config)
      .then(response => {
        console.log(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }
  if (code) {
    postData()
  }
  
  return (
    <div>
      <button onClick={handleClick}>Se connecter avec Betaseries</button>
      {url && <a href={url}>Clic ici pour poursuivre l'identification</a>}
    </div>
  );
}

export default BetaseriesOAuth2;
