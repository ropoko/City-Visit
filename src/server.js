const express = require('express');
const server = express();
const pages = require('./pages.js');

const path = require('path');

server
    .use(express.static('public'))
    .set('views', path.join(__dirname, 'views'))
    .set('view engine', 'hbs')
    .get('/', pages.index)
    .get('/location', pages.location)
    .get('/map', pages.map)
    .get('/create-location', pages.createLocation)

server.listen(5500);