var map = L.map('map');

L.tileLayer('https://a.tiles.mapbox.com/v3/liedman.h9ekn0f1/{z}/{x}/{y}.png', {
	attribution: 'Maps by <a href="https://www.mapbox.com/about/maps/">MapBox</a>. ' +
		'Routes from <a href="http://project-osrm.org/">OSRM</a>, ' +
		'data uses <a href="http://opendatacommons.org/licenses/odbl/">ODbL</a> license'
}).addTo(map);

L.Routing.control({
    waypoints: [
        L.latLng(48.8588,2.3469),
        L.latLng(52.3546,4.9039)
    ],
    geocoder: L.Control.Geocoder.nominatim()
}).addTo(map);