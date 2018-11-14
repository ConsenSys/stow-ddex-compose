const express = require('express');
const proxy = require('http-proxy-middleware');
const port = process.env.STOW_PORT;
const serverUrl = 'http://server';
const ddexServerUrl = 'http://ddex-server';
const authUrl = 'http://ddex-auth';

const app = express();

app.use('/auth', proxy({ target: authUrl }));
app.use('/offers', proxy({ target: ddexServerUrl }));
app.use('/*', proxy({ target: serverUrl }));

app.listen(port || 3000);

