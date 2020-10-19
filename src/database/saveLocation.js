function saveLocation(db, loc) {
    return db.run(`
        INSERT INTO LOCATIONS (
            LAT, 
            LNG, 
            NAME,
            ABOUT,
            WHATSAPP,
            IMAGES,
            INSTRUCTIONS,
            OPENING_HOURS,
            OPEN_ON_WEEKENDS
        ) VALUES (
            "${loc.lat}",
            "${loc.lng}",
            "${loc.name}",
            "${loc.about}"
            "${loc.whatsapp}",
            "${loc.images}",
            "${loc.instructions}",
            "${loc.opening_hours}",
            "${loc.open_on_weekends}"
        );
    `)
}

module.exports = saveLocation;