import React, { Component } from 'react';
import './App.css';
import MapBoxer from 'mapboxer';
import 'mapbox-gl/dist/mapbox-gl.css';
class App extends Component {
  componentDidMount() {
    this.map = new MapBoxer({container: '.map', viewport: {center: [-1, 42], zoom: 12}, style: 'https://basemaps.cartocdn.com/gl/voyager-gl-style/style.json'});
    window.map = this.map;
  }
  render() {
    return (
      <div className="App">
        <div className="map"></div>
      </div>
    );
  }
}

export default App;
