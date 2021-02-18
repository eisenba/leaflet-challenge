# Earthquake Map - Leaflet Challenge
In this project, I created a map of all earthquakes detected over the last thirty days with a magnitude over 2.5. Magnitude of each earthquake is represented by the size of the marker. Depth of the earthquake is represented by the color of the marker ranging from green for most shallow quakes through yellow to red for the deepest quakes. The data is available from the USGS here: https://earthquake.usgs.gov/earthquakes/feed/v1.0/geojson.php. The relavent files are contained in the Leaflet-Step-1 folder. Below is a description of the files in this repository.

### Leaflet-Step-1
- index.html: html page to display the map
- static
    - css: contains style.css to give give style to divs used
    - js: contains config.js and logic.js. Config.js stores the key for mapbox. Logic.js builds the maps
