const locations = require('./database/fakedata.js');

module.exports = {
    index(req, res) {
        return res.render('index')
    },

    location(req, res) {
        return res.render('location')
    },

    map(req, res) {
        return res.render('map', { locations })
    },

    createLocation(req, res) {
        return res.render('create-location')
    }
}