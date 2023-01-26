import React from 'react';
import axios from "axios";
import Header from './Header';

const Movies = () => {
    const [input, setInput] = React.useState("");
    const postData = () => {

        const clientId = "5e5b18e63fb7";
        const query = input;
        const limit = 20;

        axios.get(`https://api.betaseries.com/search/movies?client_id=${clientId}&text=${query}&limit=${limit}`)
            .then(response => {
                console.log(response.data);
            })
            .catch(error => {
                console.log(error);
            });
    }

    return (
        <div>
            <Header />
            <h1>Welcome to your movies page</h1>
            <input type="text" onChange={(e) => setInput(e.target.value)} value={input} id="search"></input>
            <button onClick={postData} id="submitButton">Chercher parmis nos films votre bonheur</button>
        </div>
    );
}

export default Movies;