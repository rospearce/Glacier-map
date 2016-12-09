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
	    "change":-2800,
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
	    "change":-2100,
	    "Period":"1880-2010",
			"popupContent": "Gries"
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
	    "change":-3600,
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
	    "change":-2300,
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
	    "change":-850,
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
	    "change":-3200,
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
	    "change":-1700,
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
	    "change":-770,
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
	    "change":-2400,
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
	    "change":-2100,
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
	    "change":-2000,
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
	    "change":-2700,
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
	    "change":-2100,
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
	    "change":-940,
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
	    "change":-440,
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
	    "change":-1200,
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
	    "change":-1100,
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
	    "change":-930,
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
	    "change":-1600,
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
	    "change":-1700,
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
	    "change":-1200,
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
	    "change":-2700,
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
	    "change":-980,
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
	    "change":-2100,
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
	    "change":-1000,
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
	    "change":-2700,
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
	    "change":-1100,
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
	    "change":-2700,
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
	    "change":-2400,
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
	    "change":-680,
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
	    "change":-1100,
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
	    "change":-1600,
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
	    "change":-1200,
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
	    "change":-760,
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
	    "change":-830,
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
	    "change":-1200,
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
	    "change":-1500,
	    "Period":"1880-2010"
	    }
	  }
];

function getColor(d) {
    return d < -3000  ? '#C7432B' :
           d < -2500  ? '#AD4F46' :
           d < -2000   ? '#945C61' :
           d < -1500   ? '#7B697C' :
           d < -1000   ? '#617597' :
					 d < -500   ? '#4882B2' :
                      '#2F8FCE';
}

function style(feature) {
    return {
        fillColor: getColor(feature.properties.change),
        weight: 1,
        opacity: 0.5,
        color: 'white',
        fillOpacity: 0.7,
			  radius: 10,
    };
}

function onEachFeature(feature, layer) {
    // does this feature have a property named popupContent?
    if (feature.properties && feature.properties.popupContent) {
        layer.bindPopup(feature.properties.popupContent, {closeButton: false, offset: L.point(0, -20)});
                layer.on('mouseover', function() { layer.openPopup(); });
                layer.on('mouseout', function() { layer.closePopup(); });
    };
}

L.geoJSON(glaciers, {
    pointToLayer: function (feature, latlng) {
        return L.circleMarker(latlng);
    },
		onEachFeature: onEachFeature,
		style: style
}).addTo(mymap);

