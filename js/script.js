var map = L.map('map').setView([64.5604849401424, 39.8209352694743], 13);
L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: 'OpenStreetMap'
}).addTo(map);


var customLayer = L.geoJson(null, {
    style: function(feature) {
        return { color: '#ff0000',
                weight: 3,
                opacity: 0.9
              }
    },
    onEachFeature: function(feature, layer) {
      layer.bindPopup(feature.properties.name);
}
});
omnivore.kml('./kml/sevsk.kml', null, customLayer).addTo(map); 
