const database = require('./database/db');
const savelocations = require('./database/saveLocation');

module.exports = {
    index(req, res) {
        return res.render('index')
    },

    async location(req, res) {

        const id = req.query.id;

        try {
            const db = await database;
            const results = await db.all(`SELECT * FROM LOCATIONS WHERE ID = "${id}"`);

            const location = results[0];

            location.images = location.images.split(",");
            location.firstImage = locations.images[0];

            location.open_on_weekends = '0' ? false : true;

            // if (location.open_on_weekends == '0') {
            //     location.open_on_weekends = false;
            // } else {
            //     location.open_on_weekends = true;
            // }

            return res.render('location', { location: location[0] })
        } catch (error) {
            console.log(error);
            res.send('erro');
        }
    },

    async map(req, res) {
        try {
            const db = await database;
            const locations = await db.all('SELECT * FROM LOCATIONS');
            return res.render('map', { locations })
        } catch (error) {
            console.log(error);
            return res.send('Erro');
        }
    },

    createLocation(req, res) {
        return res.render('create-location')
    }
}