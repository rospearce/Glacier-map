var mymap = L.map('mapid').setView([31.505, 7], 2);

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
	    "name":"Hintereisferner",
	    "region":"E. Alps",
	    "change":-2800,
	    "period":"1880-2010",
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
	    "name":"Gries",
	    "region":"W. Alps",
	    "change":-2100,
	    "period":"1880-2010",
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
	    "name":"Nigardsbreen",
	    "region":"W. Nor.",
	    "change":-3600,
	    "period":"1880-2010"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -121.05,48.37 ]
	    },
	    "properties": {
	    "name":"South Cascade",
	    "region":"N Casc. Mtns",
	    "change":-2300,
	    "period":"1890-2007"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ 161,54.68 ]
	    },
	    "properties": {
	    "name":"Koryto",
	    "region":"Kamchatka",
	    "change":-850,
	    "period":"1880-2000"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ 170.22,-43.5 ]
	    },
	    "properties": {
	    "name":"Franz Josef",
	    "region":"New Zea.",
	    "change":-3200,
	    "period":"1880-2005"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.83,-41.15 ]
	    },
	    "properties": {
	    "name":"Frias",
	    "region":"Andes",
	    "change":-1700,
	    "period":"1880-2009"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -148.92,60.4 ]
	    },
	    "properties": {
	    "name":"Wolverine",
	    "region":"Kenai Mtns",
	    "change":-770,
	    "period":"1880-2006"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -116.53,51.67 ]
	    },
	    "properties": {
	    "name":"Peyto",
	    "region":"Rocky Mtns",
	    "change":-2400,
	    "period":"1897-2004"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -149.78,60.17 ]
	    },
	    "properties": {
	    "name":"Exit",
	    "region":"Kenai Mtns",
	    "change":-2100,
	    "period":"1880-2006"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -117.25,52.2 ]
	    },
	    "properties": {
	    "name":"Athabasca",
	    "region":"Rocky Mtns",
	    "change":-2000,
	    "period":"1880-1995"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -117.13,52.2 ]
	    },
	    "properties": {
	    "name":"Saskatchewan",
	    "region":"Rocky Mtns",
	    "change":-2700,
	    "period":"1895-1995"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -121.75,46.78 ]
	    },
	    "properties": {
	    "name":"Nisqually",
	    "region":"N. Casc. Mtns",
	    "change":-2100,
	    "period":"1880-2001"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -123.68,47.82 ]
	    },
	    "properties": {
	    "name":"Blue",
	    "region":"Olympic Mtns",
	    "change":-940,
	    "period":"1880-1999"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ 87.75,50.08 ]
	    },
	    "properties": {
	    "name":"Maliy Aktru",
	    "region":"Altai Mtns",
	    "change":-440,
	    "period":"1911-2005"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ 42.77,43.2 ]
	    },
	    "properties": {
	    "name":"Djankuat",
	    "region":"Caucasus",
	    "change":-1200,
	    "period":"1887-2010"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ 77.08,43.05 ]
	    },
	    "properties": {
	    "name":"Ts.Tuyuksuyskiy",
	    "region":"Tien Shan",
	    "change":-1100,
	    "period":"1923-2010"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ 74.49,42.46 ]
	    },
	    "properties": {
	    "name":"Golubina",
	    "region":"Tien Shan",
	    "change":-930,
	    "period":"1880-2003"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ 42.47,43.3 ]
	    },
	    "properties": {
	    "name":"Garabashi",
	    "region":"Caucasus",
	    "change":-1600,
	    "period":"1887-2010"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ 87.77,49.78 ]
	    },
	    "properties": {
	    "name":"Sofiyskiy",
	    "region":"Altai Mtns",
	    "change":-1700,
	    "period":"1898-2001"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ 80.23,45.08 ]
	    },
	    "properties": {
	    "name":"Shumsky",
	    "region":"Dzhungarsky",
	    "change":-1200,
	    "period":"1880-2010"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -72.02,-42.13 ]
	    },
	    "properties": {
	    "name":"Esperanza Norte",
	    "region":"N. Patagonia",
	    "change":-2700,
	    "period":"1880-2007"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -73.18,-46.9 ]
	    },
	    "properties": {
	    "name":"Soler",
	    "region":"N. Patagonia",
	    "change":-980,
	    "period":"1880-2005"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -72.33,-49.35 ]
	    },
	    "properties": {
	    "name":"Torre",
	    "region":"S. Patagonia",
	    "change":-2100,
	    "period":"1880-2007"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -70.8,-13.9 ]
	    },
	    "properties": {
	    "name":"Quelccaya (Huancane)",
	    "region":"Trop. Andes",
	    "change":-1000,
	    "period":"1880-2010"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ 170.15,-43.53 ]
	    },
	    "properties": {
	    "name":"Fox",
	    "region":"New Zea.",
	    "change":-2700,
	    "period":"1894-2009"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ 8.4,46.62 ]
	    },
	    "properties": {
	    "name":"Rhone",
	    "region":"W. Alps",
	    "change":-1100,
	    "period":"1880-2010"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ 8.03,46.5 ]
	    },
	    "properties": {
	    "name":"Grosser Aletsch",
	    "region":"W. Alps",
	    "change":-2700,
	    "period":"1880-2010"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ 13,47.03 ]
	    },
	    "properties": {
	    "name":"Wurten",
	    "region":"E. Alps",
	    "change":-2400,
	    "period":"1880-2010"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ 6.93,45.97 ]
	    },
	    "properties": {
	    "name":"Argentiere",
	    "region":"W. Alps",
	    "change":-680,
	    "period":"1880-2010"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ 8.07,46.58 ]
	    },
	    "properties": {
	    "name":"Lower Grindelwald",
	    "region":"W. Alps",
	    "change":-1100,
	    "period":"1880-1983"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ 8.13,61.57 ]
	    },
	    "properties": {
	    "name":"Storbreen",
	    "region":"Cent. Nor.",
	    "change":-1600,
	    "period":"1880-2010"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ 8.44,61.56 ]
	    },
	    "properties": {
	    "name":"Hellstugubreen",
	    "region":"Cent. Nor.",
	    "change":-1200,
	    "period":"1901-2010"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ 18.57,67.9 ]
	    },
	    "properties": {
	    "name":"Storglaciaren",
	    "region":"N. Sweden",
	    "change":-760,
	    "period":"1891-2010"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ 18.48,67.9 ]
	    },
	    "properties": {
	    "name":"Rabots",
	    "region":"N. Sweden",
	    "change":-830,
	    "period":"1910-2007"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ 7.36,60.53 ]
	    },
	    "properties": {
	    "name":"Rembesdalsskaka",
	    "region":"Cent. Nor.",
	    "change":-1200,
	    "period":"1917-2010"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ 6.43,60.03 ]
	    },
	    "properties": {
	    "name":"Buerbreen",
	    "region":"SW. Norway",
	    "change":-1500,
	    "period":"1880-2010"
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
        weight: 1.4,
        opacity: 0.85,
        color: 'white',
        fillOpacity: 0.85,
			  radius: 12,
    };
}

function onEachFeature(feature, layer) {
    // does this feature have a property named popupContent?
    if (feature.properties) {
        layer.bindPopup('<h1>'+feature.properties.name+'</h1>Distance retreated: <b>'+feature.properties.change+'m</b><br />Period: <b>'+feature.properties.period+'</b>', {closeButton: false, offset: L.point(0, -20)});
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

