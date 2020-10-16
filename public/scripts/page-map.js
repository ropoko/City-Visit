const map = L.map('mapid').setView([-22.4975187, -48.5619259], 16);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png')
    .addTo(map);

const icon = L.icon({
    iconUrl: "./public/img/favicon.png",
    iconSize: [58, 68],
    iconAnchor: [29, 68],
    popupAnchor: [170, 2]
})

const popup = L.popup({
    closeButton: false,
    className: 'map-popup',
    minWidth: 240,
    minHeight: 240
}).setContent('Patos <a href="location.html?id=1" class="choose-location"> <img src="./public/img/arrow-white.svg"></a>')

L.marker([-22.4975187, -48.5619259], { icon })
    .addTo(map)
    .bindPopup('A pretty CSS3 popup.<br> Easily customizable.')
    .openPopup();

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