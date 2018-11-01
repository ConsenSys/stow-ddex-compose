const express = require('express');
const proxy = require('http-proxy-middleware');
const port = process.env.STOW_PORT;
const serverUrl = process.env.STOW_SERVER_URL;
const ddexServerUrl = process.env.STOW_DDEX_SERVER_URL;
const authUrl = process.env.STOW_DDEX_AUTH_URL;

const app = express();

app.use('/auth', proxy({ target: authUrl }));
app.use('/offers', proxy({ target: ddexServerUrl }));
app.use('/*', proxy({ target: serverUrl }));

app.listen(port || 3000);

