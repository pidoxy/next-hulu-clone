const express = require('express');
const spotifyWebApi = require('spotify-web-api-node');

const app = express();

app.post('/login', (req, res) => {
    const code = req.body.code
    const spotifyApi = new SpotifyWebApi({
        redirectUri: 'http://localhost:3000',
        clientId: '2ef0f1d2a16344ca92d32b269cba9f3c',
        clientSecret: '1445a9b4a8fb4e1da066e45ad8101d48'
    })

    spotifyApi
        .authorizationCodeGrant(code)
        .then((data) => {
            res.json({
                accessToken: data.body.access_token,
                refreshToken: data.body.refresh_token,
                expiresIn: data.body.expires_in,


            })
        }).catch(() => {
            res.sendStatus(400);
        })
})