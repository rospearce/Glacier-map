var mymap = L.map('mapid').setView([31.505, -0.09], 2);

L.tileLayer('https://api.mapbox.com/styles/v1/rospearce/ciwgju4yv00cy2pmqeggx1mx8/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1Ijoicm9zcGVhcmNlIiwiYSI6ImNpdm1sczJsZjAwOGMyeW1xNHc4ejJ0N28ifQ.4B24e0_HgfJj4sgqimETqA', {
    attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox://styles/rospearce/ciwgju4yv00cy2pmqeggx1mx8',
    accessToken: 'pk.eyJ1Ijoicm9zcGVhcmNlIiwiYSI6ImNpdm1sczJsZjAwOGMyeW1xNHc4ejJ0N28ifQ.4B24e0_HgfJj4sgqimETqA'
}).addTo(mymap);

var glaciers = [
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ 10.77,46.8 ]
	    },
	    "properties": {
	    "Name":"Hintereisferner",
	    "Region":"E. Alps",
	    "Change in glacier length (m)":-2800,
	    "Period":"1880-2010",
			"popupContent": "Hintereisferner"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ 8.33,46.44 ]
	    },
	    "properties": {
	    "Name":"Gries",
	    "Region":"W. Alps",
	    "Change in glacier length (m)":-2100,
	    "Period":"1880-2010"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ 7.13,61.72 ]
	    },
	    "properties": {
	    "Name":"Nigardsbreen",
	    "Region":"W. Nor.",
	    "Change in glacier length (m)":-3600,
	    "Period":"1880-2010"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -121.05,48.37 ]
	    },
	    "properties": {
	    "Name":"South Cascade",
	    "Region":"N Casc. Mtns",
	    "Change in glacier length (m)":-2300,
	    "Period":"1890-2007"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ 161,54.68 ]
	    },
	    "properties": {
	    "Name":"Koryto",
	    "Region":"Kamchatka",
	    "Change in glacier length (m)":-850,
	    "Period":"1880-2000"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ 170.22,-43.5 ]
	    },
	    "properties": {
	    "Name":"Franz Josef",
	    "Region":"New Zea.",
	    "Change in glacier length (m)":-3200,
	    "Period":"1880-2005"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.83,-41.15 ]
	    },
	    "properties": {
	    "Name":"Frias",
	    "Region":"Andes",
	    "Change in glacier length (m)":-1700,
	    "Period":"1880-2009"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -148.92,60.4 ]
	    },
	    "properties": {
	    "Name":"Wolverine",
	    "Region":"Kenai Mtns",
	    "Change in glacier length (m)":-770,
	    "Period":"1880-2006"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -116.53,51.67 ]
	    },
	    "properties": {
	    "Name":"Peyto",
	    "Region":"Rocky Mtns",
	    "Change in glacier length (m)":-2400,
	    "Period":"1897-2004"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -149.78,60.17 ]
	    },
	    "properties": {
	    "Name":"Exit",
	    "Region":"Kenai Mtns",
	    "Change in glacier length (m)":-2100,
	    "Period":"1880-2006"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -117.25,52.2 ]
	    },
	    "properties": {
	    "Name":"Athabasca",
	    "Region":"Rocky Mtns",
	    "Change in glacier length (m)":-2000,
	    "Period":"1880-1995"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -117.13,52.2 ]
	    },
	    "properties": {
	    "Name":"Saskatchewan",
	    "Region":"Rocky Mtns",
	    "Change in glacier length (m)":-2700,
	    "Period":"1895-1995"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -121.75,46.78 ]
	    },
	    "properties": {
	    "Name":"Nisqually",
	    "Region":"N. Casc. Mtns",
	    "Change in glacier length (m)":-2100,
	    "Period":"1880-2001"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -123.68,47.82 ]
	    },
	    "properties": {
	    "Name":"Blue",
	    "Region":"Olympic Mtns",
	    "Change in glacier length (m)":-940,
	    "Period":"1880-1999"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ 87.75,50.08 ]
	    },
	    "properties": {
	    "Name":"Maliy Aktru",
	    "Region":"Altai Mtns",
	    "Change in glacier length (m)":-440,
	    "Period":"1911-2005"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ 42.77,43.2 ]
	    },
	    "properties": {
	    "Name":"Djankuat",
	    "Region":"Caucasus",
	    "Change in glacier length (m)":-1200,
	    "Period":"1887-2010"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ 77.08,43.05 ]
	    },
	    "properties": {
	    "Name":"Ts.Tuyuksuyskiy",
	    "Region":"Tien Shan",
	    "Change in glacier length (m)":-1100,
	    "Period":"1923-2010"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ 74.49,42.46 ]
	    },
	    "properties": {
	    "Name":"Golubina",
	    "Region":"Tien Shan",
	    "Change in glacier length (m)":-930,
	    "Period":"1880-2003"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ 42.47,43.3 ]
	    },
	    "properties": {
	    "Name":"Garabashi",
	    "Region":"Caucasus",
	    "Change in glacier length (m)":-1600,
	    "Period":"1887-2010"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ 87.77,49.78 ]
	    },
	    "properties": {
	    "Name":"Sofiyskiy",
	    "Region":"Altai Mtns",
	    "Change in glacier length (m)":-1700,
	    "Period":"1898-2001"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ 80.23,45.08 ]
	    },
	    "properties": {
	    "Name":"Shumsky",
	    "Region":"Dzhungarsky",
	    "Change in glacier length (m)":-1200,
	    "Period":"1880-2010"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -72.02,-42.13 ]
	    },
	    "properties": {
	    "Name":"Esperanza Norte",
	    "Region":"N. Patagonia",
	    "Change in glacier length (m)":-2700,
	    "Period":"1880-2007"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -73.18,-46.9 ]
	    },
	    "properties": {
	    "Name":"Soler",
	    "Region":"N. Patagonia",
	    "Change in glacier length (m)":-980,
	    "Period":"1880-2005"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -72.33,-49.35 ]
	    },
	    "properties": {
	    "Name":"Torre",
	    "Region":"S. Patagonia",
	    "Change in glacier length (m)":-2100,
	    "Period":"1880-2007"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -70.8,-13.9 ]
	    },
	    "properties": {
	    "Name":"Quelccaya (Huancane)",
	    "Region":"Trop. Andes",
	    "Change in glacier length (m)":-1000,
	    "Period":"1880-2010"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ 170.15,-43.53 ]
	    },
	    "properties": {
	    "Name":"Fox",
	    "Region":"New Zea.",
	    "Change in glacier length (m)":-2700,
	    "Period":"1894-2009"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ 8.4,46.62 ]
	    },
	    "properties": {
	    "Name":"Rhone",
	    "Region":"W. Alps",
	    "Change in glacier length (m)":-1100,
	    "Period":"1880-2010"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ 8.03,46.5 ]
	    },
	    "properties": {
	    "Name":"Grosser Aletsch",
	    "Region":"W. Alps",
	    "Change in glacier length (m)":-2700,
	    "Period":"1880-2010"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ 13,47.03 ]
	    },
	    "properties": {
	    "Name":"Wurten",
	    "Region":"E. Alps",
	    "Change in glacier length (m)":-2400,
	    "Period":"1880-2010"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ 6.93,45.97 ]
	    },
	    "properties": {
	    "Name":"Argentiere",
	    "Region":"W. Alps",
	    "Change in glacier length (m)":-680,
	    "Period":"1880-2010"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ 8.07,46.58 ]
	    },
	    "properties": {
	    "Name":"Lower Grindelwald",
	    "Region":"W. Alps",
	    "Change in glacier length (m)":-1100,
	    "Period":"1880-1983"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ 8.13,61.57 ]
	    },
	    "properties": {
	    "Name":"Storbreen",
	    "Region":"Cent. Nor.",
	    "Change in glacier length (m)":-1600,
	    "Period":"1880-2010"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ 8.44,61.56 ]
	    },
	    "properties": {
	    "Name":"Hellstugubreen",
	    "Region":"Cent. Nor.",
	    "Change in glacier length (m)":-1200,
	    "Period":"1901-2010"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ 18.57,67.9 ]
	    },
	    "properties": {
	    "Name":"Storglaciaren",
	    "Region":"N. Sweden",
	    "Change in glacier length (m)":-760,
	    "Period":"1891-2010"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ 18.48,67.9 ]
	    },
	    "properties": {
	    "Name":"Rabots",
	    "Region":"N. Sweden",
	    "Change in glacier length (m)":-830,
	    "Period":"1910-2007"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ 7.36,60.53 ]
	    },
	    "properties": {
	    "Name":"Rembesdalsskaka",
	    "Region":"Cent. Nor.",
	    "Change in glacier length (m)":-1200,
	    "Period":"1917-2010"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ 6.43,60.03 ]
	    },
	    "properties": {
	    "Name":"Buerbreen",
	    "Region":"SW. Norway",
	    "Change in glacier length (m)":-1500,
	    "Period":"1880-2010"
	    }
	  }
];

function getColor(d) {
    return d > 3000  ? '#C7432B' :
           d > 2500  ? '#A8524B' :
           d > 2000   ? '#8A616C' :
           d > 1500   ? '#6B708C' :
           d > 1000   ? '#4D7FAD' :
					 d > 500   ? '#4D7FAD' :
                      '#2F8FCE';
}

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
