import React from 'react';
import axios from "axios";
import Header from './Header';

const Series = () => {
    const [input, setInput] = React.useState("");
    const [tableHTML, setTableHTML] = React.useState("");
    const postData = () => {

        const clientId = "5e5b18e63fb7";
        const query = input;
        const limit = 20;

        axios.get(`https://api.betaseries.com/search/shows?client_id=${clientId}&text=${query}&limit=${limit}`)
            .then(response => {
                console.log(response.data);
                console.log(response.data.shows[1].id) // fair un .map pour recuperer tout les id
                const shows = response.data.shows;
                const showInfo = shows.map(show => {
                    return {
                        following: show.following,
                        id: show.id,
                        poster: show.poster,
                        release_date: show.release_date,
                        slug: show.slug,
                        title: show.title
                    };

                });
                console.log(showInfo);

                const tableRows = shows.map(show => {
                    return `
                        <tr>
                        <td>${show.following} </td>
                        <td>${show.id} </td>
                        <td><img>${show.poster} </img></td>
                        <td>${show.release_date} </td>
                        <td>${show.slug} </td>
                        <td>${show.title} </td>
                        </tr> `;
                });
                const tableHTML = `
                        <table>
                          <thead>
                            <tr>
                              <th>following</th>
                              <th>id</th>
                              <th>poster</th>
                              <th>release_date</th>
                              <th>slug</th>
                              <th>title</th>
                            </tr>
                          </thead>
                          <tbody>
                            ${tableRows.join('')}
                          </tbody>
                        </table>`;
                setTableHTML(tableHTML);
                console.log(tableHTML);
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
            <button onClick={postData} id="submitButton">Chercher parmis nos séries votre bonheur</button>

            <div dangerouslySetInnerHTML={{ __html: tableHTML }} />
        </div>
    );
}

export default Series;
