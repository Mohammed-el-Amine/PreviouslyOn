import React from 'react';
import axios from "axios";
import Header from './Header';
// import Cookies from 'js-cookie';


const Series = () => {
    const [input, setInput] = React.useState("");
    const [shows, setShows] = React.useState([]);


    const postData = () => {
        const clientId = "5e5b18e63fb7";
        const query = input;
        const limit = 20;

        axios.get(`https://api.betaseries.com/search/shows?client_id=${clientId}&text=${query}&limit=${limit}`)
            .then(response => {
                setShows(response.data.shows);
            })
            .catch(error => {
                console.log(error);
            });
    }


    return (
        <div>
            <Header />
            <h1>Welcome to your series page</h1>
            <input type="text" onChange={(e) => setInput(e.target.value)} value={input} id="search"></input>
            <button onClick={postData} id="submitButton">Chercher votre bonheur parmis nos séries </button>
            <div className="card-container">
                {shows.map((show, index) => (
                    <div key={index} className="card">
                        <img src={show.poster} alt={show.title} />
                        <div className="card-content">
                            <h2>{show.title}</h2>
                            <p>ID: {show.id}</p>
                            <p>Following: {show.following ? "Yes" : "No"}</p>
                            <p>Release Date: {show.release_date}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Series;
