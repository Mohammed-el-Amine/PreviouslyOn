import React from 'react';
import axios from "axios";
import Header from './Header';
import Cookies from 'js-cookie';

const Profile = () => {

    const [favorites, setFavorites] = React.useState([]);
    const [movieFavorites, setmovieFavorites] = React.useState([]);

    React.useEffect(() => {
        data();
        dataMovie();
    }, []);

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
                console.log(response.data.access_token);
                const token = response.data.access_token ;
                Cookies.set('token', token);
            })
            .catch(error => {
                console.log(error);
            });
    }
    if (code) {
        postData()
    }

    const data = () => {
        const clientId = "5e5b18e63fb7";
        const token = Cookies.get('token');
        const limit = 20;

        axios.get(`https://api.betaseries.com/shows/favorites?client_id=${clientId}&token=${token}&limit=${limit}`)
            .then(response => {
                setFavorites(response.data.shows)
                console.log(response.data.shows);
            })
            .catch(error => {
                console.log(error);
            });
    }

    const dataMovie = () => {
        const clientId = "5e5b18e63fb7";
        const token = Cookies.get('token');
        const limit = 50; // 1000 par default
        // const start = "0 par default";

        axios.get(`https://api.betaseries.com/movies/favorites?client_id=${clientId}&token=${token}&limit=${limit}`)
            .then(response => {
                setmovieFavorites(response.data.movies)
                console.log(response.data.movies);
            })
            .catch(error => {
                console.log(error);
            });
    }



    return (
        <div>
            <Header />
            {/* afficahge des series favorite */}

            <h2>Mes series favorite</h2><br/>
            <div className="card-container">
                {favorites.map((favorite, index) => (
                    <div key={index} className="card">
                        <img src={favorite.images.show} alt={favorite.title} />
                        <div className="card-content">
                            <h2>{favorite.title}</h2>
                            <p>Date of creation: {favorite.creation}</p>
                            <p>Season: {favorite.seasons}</p>
                            <p>Episode: {favorite.episodes}</p>
                            <p>Status : {favorite.status}</p>
                            <p>Followiyyng: {favorite.followers}</p>
                        </div>
                    </div>
                ))}
            </div>
            <br/><h2>Mes films favoris</h2><br/>
            <div className="card-container">
                {movieFavorites.map((movie, index) => (
                    <div key={index} className="card">
                        <img src={movie.poster} alt={movie.title} />
                        <div className="card-content">
                            <h2>{movie.title}</h2>
                            <p>Date of creation: {movie.release_date}</p>
                            <p>Synopsis:<br/><br/> {movie.synopsis}</p>
                            <p>Episode: {movie.episodes}</p>
                            <p>Status : {movie.status}</p>
                            <p>Followiyyng: {movie.followers}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Profile;
