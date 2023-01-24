import React, { useState } from 'react'; // add , useEffect if u want use it

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
  
  return (
    <div>
      <button onClick={handleClick}>Se connecter avec Betaseries</button>
      {url && <a href={url}>Clic ici pour poursuivre l'identification</a>}
    </div>
  );
}

export default BetaseriesOAuth2;
