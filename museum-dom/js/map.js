// TO MAKE THE MAP APPEAR YOU MUST
    // ADD YOUR ACCESS TOKEN FROM
    // https://account.mapbox.com
    mapboxgl.accessToken = 'pk.eyJ1IjoiYW5kcmV5cG90a2FzIiwiYSI6ImNrdW1td2NvbjBmeXoyb3AxaHYzMHJtczUifQ.lsbTMZj_YyLVouw-t6vCeA';
    const map = new mapboxgl.Map({
    container: 'map', // container ID
    style: 'mapbox://styles/mapbox/light-v10', // style URL
    center: [2.3364, 48.86091], // starting position [lng, lat]
    zoom: 16 // starting zoom
    
    });
    map.addControl(new mapboxgl.NavigationControl());
    const geojson = {
    type: 'FeatureCollection',
    features: [
      {
        type: 'Feature',
        geometry: {
          type: 'Point',
          coordinates: [2.3364, 48.86091]
        },
        properties: {
          title: 'Mapbox',
          description: 'Washington, D.C.'
        }
      },
      {
        type: 'Feature',
        geometry: {
          type: 'Point',
          coordinates: [2.3333, 48.8602]
        },
        properties: {
          title: 'Mapbox',
          description: 'Washington, D.C.'
        }
      },
      {
        type: 'Feature',
        geometry: {
          type: 'Point',
          coordinates: [2.3397, 48.8607]
        },
        properties: {
          title: 'Mapbox',
          description: 'San Francisco, California'
        }
      },
     
      {
        type: 'Feature',
        geometry: {
          type: 'Point',
          coordinates: [2.3330, 48.8619]
        },
        properties: {
          title: 'Mapbox',
          description: 'San Francisco, California'
        }
      },
      {
        type: 'Feature',
        geometry: {
          type: 'Point',
          coordinates: [2.3365, 48.8625]
        },
        properties: {
          title: 'Mapbox',
          description: 'San Francisco, California'
        }
      }
    ]
  };
  
  for (const { geometry, properties } of geojson.features) {
    // create a HTML element for each feature
    const el = document.createElement('div');
    el.className = 'marker';
  
    // make a marker for each feature and add to the map
    new mapboxgl.Marker(el).setLngLat(geometry.coordinates).addTo(map);
  }