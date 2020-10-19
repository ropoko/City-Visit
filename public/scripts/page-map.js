const map = L.map("mapid").setView([-27.2109325, -49.6448719], 15);

L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png").addTo(map);

const icon = L.icon({
    iconUrl: "/img/pointer-map.png",
    iconSize: [58, 68],
    iconAnchor: [29, 68],
    popupAnchor: [170, 2],
});

function addMarker({ id, name, lat, lng } = location) {
    const popup = L.popup({
        closeButton: false,
        className: "map-popup",
        minWidth: 240,
        minHeight: 240,
    }).setContent(
        `${name} <a href="/location?id=${id}"> <img src="/img/arrow.svg"> </a>`
    );

    L.marker([lat, lng], { icon }).addTo(map).bindPopup(popup);
}

const locationsSpan = document.querySelectorAll(".locations span");

locationsSpan.forEach((span) => {
    const location = {
        id: span.dataset.id,
        name: span.dataset.name,
        lat: span.dataset.lat,
        lng: span.dataset.lng,
    };

    addMarker(location);
});