var mymap = L.map('mapid').setView([31.505, -0.09], 3);

L.tileLayer('https://api.mapbox.com/styles/v1/rospearce/ciwgju4yv00cy2pmqeggx1mx8/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1Ijoicm9zcGVhcmNlIiwiYSI6ImNpdm1sczJsZjAwOGMyeW1xNHc4ejJ0N28ifQ.4B24e0_HgfJj4sgqimETqA', {
    attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox://styles/rospearce/ciwgju4yv00cy2pmqeggx1mx8',
    accessToken: 'pk.eyJ1Ijoicm9zcGVhcmNlIiwiYSI6ImNpdm1sczJsZjAwOGMyeW1xNHc4ejJ0N28ifQ.4B24e0_HgfJj4sgqimETqA'
}).addTo(mymap);

var glaciers = [{
	"type": "Feature",
	"properties": {"name": "Hintereisferner", "region": "E. Alps", "change": "-2800", "period": "1880-2010", "popupContent": "Hintereisferner"},
	"geometry": {
		"type": "Point",
		"coordinates": [10.77, 46.8]
		}	
	},
	{
		"type": "Feature",
		"properties": {"name": "Gries", "region": "W. Alps", "change": "-2100", "period": "1880-2010"},
		"geometry": {
			"type": "Point",
			"coordinates": [8.33, 46.44]
			}	
		}
];

var geojsonMarkerOptions = {
    radius: 8,
    fillColor: "#ff7800",
    color: "#000",
    weight: 1,
    opacity: 1,
    fillOpacity: 0.8
};

function onEachFeature(feature, layer) {
    // does this feature have a property named popupContent?
    if (feature.properties && feature.properties.popupContent) {
        layer.bindPopup(feature.properties.popupContent);
    }
}

L.geoJSON(glaciers, {
    pointToLayer: function (feature, latlng) {
        return L.circleMarker(latlng, geojsonMarkerOptions);
    },
		onEachFeature: onEachFeature
}).addTo(mymap);