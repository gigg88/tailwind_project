document.addEventListener('DOMContentLoaded', () => {

    const map = L.map('map').setView([66.5075, 12.0283], 12); // Adjusted zoom

    L.tileLayer('https://cartodb-basemaps-{s}.global.ssl.fastly.net/light_all/{z}/{x}/{y}.png', {
        maxZoom: 20,
    }).addTo(map);
});
