const database = require('sqlite-async');

function execute(db) {
    return db.exec(`
        CREATE TABLE IF NOT EXISTS LOCATIONS(
            ID INTEGER PRIMARY KEY AUTOINCREMENT,
            LAT TEXT,
            LNG TEXT,
            NAME TEXT,
            ABOUT TEXT,
            WHATSAPP TEXT,
            IMAGES TEXT,
            INSTRUCTIONS TEXT,
            OPENING_HOURS TEXT,
            OPEN_ON_WEEKENDS TEXT
        );
    `);
}

module.exports = database.open(__dirname + '/database.sqlite').then(execute);