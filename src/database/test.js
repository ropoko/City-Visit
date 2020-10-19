const database = require('./db');

database.then(async db => {
    // await db.run(`
    //     INSERT INTO LOCATIONS (
    //         LAT, 
    //         LNG, 
    //         NAME,
    //         ABOUT,
    //         WHATSAPP,
    //         IMAGES,
    //         INSTRUCTIONS,
    //         OPENING_HOURS,
    //         OPEN_ON_WEEKENDS
    //     ) VALUES (
    //         "-22.4875187",
    //         "-48.5519259",
    //         "Lugar Legal 2",
    //         "è isso ae"
    //         "998839115",
    //         "https://images.unsplash.com/photo-1586458132313-b6191b25f567?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9",
    //         "ASDASDASDASDASDASDASDASDSA",
    //         "Horario de visita das 18h as 8h",
    //         "1"
    //     );
    // `)

    //const selectedLocations = await db.all("SELECT * FROM LOCATIONS")
    
    console.log(location)
})
