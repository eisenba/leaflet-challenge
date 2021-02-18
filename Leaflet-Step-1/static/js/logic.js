// Creating map object
var myMap = L.map("map", {
  center: [0, 0],
  zoom: 2
   
});

L.tileLayer("https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
  attribution: "© <a href='https://www.mapbox.com/about/maps/'>Mapbox</a> © <a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a> <strong><a href='https://www.mapbox.com/map-feedback/' target='_blank'>Improve this map</a></strong>",
  tileSize: 512,
  maxZoom: 18,
  zoomOffset: -1,
  id: "mapbox/streets-v11",
  accessToken: MapKey
}).addTo(myMap);

// Declare variables
var quakeData = "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/2.5_month.geojson"
var max_depth = 0
var min_depth = 0
// Start d3
d3.json(quakeData, function(data){
  // find min and max depth
  for (let i= 0; i< data.features.length; i++) {
    if (data.features[i].geometry.coordinates[2] > max_depth){
      max_depth = data.features[i].geometry.coordinates[2]
    } else if (data.features[i].geometry.coordinates[2] < min_depth){
      min_depth = data.features[i].geometry.coordinates[2]
    }
  }
  // Define marker size function
  function markerSize(magnitude) {
    return magnitude*5
  }

  // Define marker color function
  function markerColor(depth) {
    
  }
console.log(max_depth)
console.log(min_depth)
});
 


