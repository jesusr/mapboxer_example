import React, { Component } from 'react';
import './App.css';
import MapBoxer from 'mapboxer';
import 'mapbox-gl/dist/mapbox-gl.css';
class App extends Component {
  componentDidMount() {
    this.map = new MapBoxer({
      container: '.map',
      // done
      viewport: { center: [-3.7511741, 40.437423], zoom: 12, radius: 1 },
      controls: {
        zoom: { config: { showCompass: true, showZoom: true }, position: 'top-left' },
        freedraw: {
          config: {
            button: {
              class: 'freedraw-custom-class',
              width: '100px',
              height: '100px',
              background: {
                color: '#333'
              },
              text: {
                size: '30px',
                color: 'red',
                text: 'FD'
              }
            },
            populateFilteredFeatures: {
              active: true,
              layers: ['points']
            }
          }, position: 'top-right'
        },
        segmentdraw: { config: {}, position: '' }
      },
      style: 'https://basemaps.cartocdn.com/gl/voyager-gl-style/style.json',
      namedMaps: {
        services: {
          user: 'emergya',
          name: 'tpl_36634877_22d3_46be_9e9a_51d6dff117d6',
          baseUrl: 'https://:user.carto.com/api/v1/map/named/:name'
        }
      },
      sources: {
        services: [{
          id: '1d949618-774c-4d8c-bc84-f0f426036c30',
          name: 'services1',
          type: 'vector',
          autoAdd: true
        }]
      },
      layers: {
        servicesLayer: [
          {
            id: 'points',
            source: 'services1',
            'source-layer': '1d949618-774c-4d8c-bc84-f0f426036c30',
            type: 'circle',
            minzoom: 0,
            maxzoom: 16,
            layout: {},
            paint: {
              'circle-radius': 5,
              'circle-color': 'red'
            },
            autoAdd: true
          },
        ]
      },
      filterProperties: {
        layers: [{ layer: 'points', field: 'cartodb_id' }]
      }
    });
    this.map
      .on('startFreeDraw', () => {
        console.log('startFreeDraw');
      })
      .on('filteredPropertiesInPolygon', (properties) => {
        console.log(properties);
      });
    window.map = this.map;
  }
  render() {
    return (
      <div className='App'>
        <div className='map'></div>
      </div>
    );
  }
}

export default App;
