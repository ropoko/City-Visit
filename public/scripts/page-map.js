const map = L.map('mapid').setView([-22.4975187, -48.5619259], 16);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png')
    .addTo(map);

const icon = L.icon({
    iconUrl: "/img/pointer-map.png",
    iconSize: [58, 68],
    iconAnchor: [29, 68],
    popupAnchor: [170, 2]
})


function addMarker({ id, name, lat, lng }) {

    const popup = L.popup({
        closeButton: false,
        className: 'map-popup',
        minWidth: 240,
        minHeight: 240
    }).setContent(`${name} <a href="location?id=${id}" class="choose-location"> <img src="/img/arrow.svg"></a>`)

    L.marker([lat, lng], { icon })
        .addTo(map)
        .bindPopup(popup)
}


// image gallery

function selectImage(event) {
    const button = event.currentTarget;

    const buttons = document.querySelectorAll(".images button");
    buttons.forEach((button) => {
        button.classList.remove("active");
    });

    const image = button.children[0];

    const imageContainer = documen.querySelector('.location-details > img');
    imageContainer.src = image.src;

    button.classList.add('active');
}

const locationsSpan = document.querySelectorAll('.locations span')
locationsSpan.forEach((el) => {
    const location = {
        id: el.dataset.id,
        name: el.dataset.name,
        lat: el.dataset.lat,
        lng: el.dataset.lng
    }

    addMarker(location);
})