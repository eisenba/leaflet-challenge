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
var depthCount = 0
var depthSum = 0
var avg_depth = 0
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
  // create array of depths to calc average
  for (let i= 0; i< data.features.length; i++) {
    depthCount++;
    depthSum += data.features[i].geometry.coordinates[2]
  }
  // Calc avg depth
  avg_depth = depthSum/depthCount
  // Define marker size function
  function markerSize(magnitude) {
    return magnitude*100000
  }

  // Define marker color function
  markerColor = d3.scaleLinear()
  .domain([min_depth, avg_depth, max_depth])
  .range(["chartreuse", "gold", "red"])
  
console.log(max_depth)
console.log(min_depth)
console.log(avg_depth)

// Add circle markers for each earthquake
for (var i = 0; i < data.features.length; i++) {
  L.circle([data.features[i].geometry.coordinates[1],data.features[i].geometry.coordinates[0]], {
    fillOpacity: 0.75,
    color: "white",
    weight: 1,
    fillColor: markerColor(data.features[i].geometry.coordinates[2]),
    radius: markerSize(data.features[i].properties.mag)
  }).bindPopup("<h2>" + data.features[i].properties.place + "</h2> <hr> <h3>Magnitude: " + data.features[i].properties.mag + "</h3> <h3>Depth: " + data.features[i].geometry.coordinates[2] + " km</h3>").addTo(myMap);
}


});
 


