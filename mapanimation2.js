// This array contains the coordinates for all trolly stops on the Willow River Park
const busStops = [
  [-92.678743, 45.012520],
  [-92.679730, 45.013059],
  [-92.680336, 45.013446],
  [-92.679547, 45.013954],
  [-92.680395, 45.015410],
  [-92.679881, 45.015949],
  [-92.678839, 45.016085],
  [-92.677584, 45.015418],
  [-92.678732, 45.013840],
  [-92.680395, 45.015410],
  [-92.682981, 45.013734],
  [-92.683469, 45.014208],
  [-92.684976, 45.014269],
  [-92.684703, 45.013248],
  [-92.685234, 45.013939],
  [-92.684976, 45.014265],
  [-92.684038, 45.014227],
  [-92.684016, 45.013692],

];

// TODO: add your own access token
mapboxgl.accessToken = 'pk.eyJ1IjoidGVzdHVzZXIxMDAwIiwiYSI6ImNraDkzZ2pkMzAzMHoycnBmMXpvZ3UwZnMifQ.jAE4YsPeAJv50VK92NSpOQ';

// TODO: create the map object using mapboxgl.map() function
let map = new mapboxgl.Map({
  container: 'map',
  style: 'mapbox://styles/mapbox/streets-v11',
  center: [-92.680395, 45.015410],
  zoom: 15,
});

// TODO: add a marker to the map
let marker = new mapboxgl.Marker().setLngLat([-92.678743, 45.012520]).addTo(map);

// counter here represents the index of the current bus stop
let counter = 0;
function move() {
  // TODO: move the marker on the map every 1000ms. Use the function marker.setLngLat() to update the marker coordinates
  // Use counter to access bus stops in the array busStops

  setTimeout(() => {
    if (counter >= busStops.length) return;
    marker.setLngLat(busStops[counter]);
    counter++;
    move();
  }, 1000);
}

// Do not edit code past this point
if (typeof module !== 'undefined') {
  module.exports = { move, counter, marker, busStops };
}
