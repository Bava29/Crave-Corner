const map = L.map('map', {
    zoomControl: false
}).setView([13.0827, 80.2707], 6);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; OpenStreetMap contributors'
}).addTo(map);

L.marker([13.0827, 80.2707]).addTo(map)
    .bindPopup("<b>Chennai Store</b>");

L.marker([11.0168, 76.9558]).addTo(map)
    .bindPopup("<b>Coimbatore Store</b>");

L.marker([9.9252, 78.1198]).addTo(map)
    .bindPopup("<b>Madurai Store</b>");

L.marker([12.9716, 77.5946]).addTo(map)
    .bindPopup("<b>Bengaluru Store</b>");