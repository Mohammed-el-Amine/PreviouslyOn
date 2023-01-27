import React from 'react';
import axios from "axios";
import Header from './Header';
import Cookies from 'js-cookie';

const Profile = () => {


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




    return (
        <div>
            <Header />
            <h1>Welcome to your profile page</h1>
        </div>
    );
}

export default Profile;
