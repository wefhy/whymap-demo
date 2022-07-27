let config = {
  minZoom: 16,
  maxZoom: 24,
  fadeAnimation: false,
  zoomSnap: 0,
  wheelDebounceTime: 16,
  noWrap: true,
};
// magnification with which the map will start
const zoom = 17;
// co-ordinates
const lat = 0;
const lng = 0;

// calling map
const map = L.map("map", config).setView([lat, lng], zoom);
L.tileLayer("tiles/17/{x}/{y}", {tileSize: 256, maxNativeZoom: 17, maxZoom: 24, minZoom: 16, minNativeZoom: 17, noWrap: true}).addTo(map); 
L.tileLayer("tiles/{z}/{x}/{y}", {tileSize: 256, maxNativeZoom: 22, maxZoom: 24, minZoom: 22, minNativeZoom: 22, noWrap: true}).addTo(map); 



var playerMarker = L.marker([0, 0], {rotationAngle: 45}).addTo(map).bindPopup("Player");

function updatePlayerPosition() {
  fetch("player").then(function(response) {
    return response.json();
  }).then(function(player) {
    console.log(player);
    var pos = new L.LatLng(player.position.lat, player.position.lng)
    // map.panTo(pos);
    map.removeLayer(playerMarker)
    playerMarker = L.marker(pos, {rotationAngle: player.angle}).addTo(map).bindPopup("Player");
    // playerMarker.setLatLng(pos)
    // map.setView(L.LatLng(player.position.lat, player.position.lng), map.getZoom(), {
    //   "animate": true,
    //   "pan": {
    //     "duration": 10
    //   }
    // });
  }).catch(function() {
    console.log("Booo");
  });
}

fetch("player").then(function(response) {
  return response.json();
}).then(function(player) {
  console.log(player);
  var pos = new L.LatLng(player.position.lat, player.position.lng)
  map.panTo(pos);
}).catch(function() {
  console.log("Booo");
});



setInterval(updatePlayerPosition, 500)

updatePlayerPosition()






// Used to load and display tile layers on the map
// Most tile servers require attribution, which you can set under `Layer`
//   L.tileLayer("run/map/chunk_{y}-{x}.png").addTo(map); 

//, zoomOffset: -1

// L.tileLayer("tiles/{z}/{x}/{y}", {tileSize: 256, nativeZooms: [17, 22], maxNativeZoom: maxn, maxZoom: maxx, minZoom: minz, minNativeZoom: minz, noWrap: true}).addTo(map); 

L.marker([50.5, 30.5], {title: "Second marker", draggable: true}).addTo(map).bindPopup("home");
// center = L.marker([lat, lng], {title: "First marker"}).addTo(map).bindPopup("echest");
// center._icon.style.filter = "alpha(opacity=20)";
var redMarker = L.AwesomeMarkers.icon({
  icon: 'coffee',
  markerColor: 'purple'
});
    
// L.marker([0,0], {icon: redMarker}).addTo(map);
// L.marker([20, 20]).addTo(map);
// L.marker([30, 20]).addTo(map);
// L.marker([40, 20]).addTo(map);
// L.marker([20, 30]).addTo(map);
// L.marker([30, 30]).addTo(map);
// L.marker([40, 30]).addTo(map);
// L.marker([20, 40]).addTo(map);
// L.marker([30, 40]).addTo(map);
// L.marker([40, 40]).addTo(map);

// L.marker([90, -50]).addTo(map);
// L.marker([80, -50]).addTo(map);
// L.marker([70, -50]).addTo(map);
// L.marker([60, -50]).addTo(map);
// L.marker([50, -50]).addTo(map);
// L.marker([40, -50]).addTo(map);
// L.marker([30, -50]).addTo(map);
// L.marker([20, -50]).addTo(map);
// L.marker([10, -50]).addTo(map);
// L.marker([0, -50]).addTo(map);

fetch("waypoints").then(function(response) {
  return response.json();
}).then(function(data) {
  console.log(data);
  // console.log(data[0].name)
  data.forEach(function(entry) {
    var marker = L.AwesomeMarkers.icon({
      icon: 'coffee',
      markerColor: entry.color
    });
    L.marker([entry.loc.lat, entry.loc.lng], {icon: marker}).addTo(map).bindPopup(entry.name);
    console.log(entry.name)
  })
}).catch(function() {
  console.log("Booo");
});

// L.marker([85, -50]).addTo(map);
// L.marker([82, -50]).addTo(map);
// L.marker([79, -50]).addTo(map);
// L.marker([74, -50]).addTo(map);
// L.marker([66, -50]).addTo(map);
// L.marker([55, -50]).addTo(map);
// L.marker([40, -50]).addTo(map);
// L.marker([21, -50]).addTo(map);
// L.marker([0, -50]).addTo(map);
// L.marker([-21, -50]).addTo(map);

