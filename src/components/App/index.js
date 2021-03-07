// == Import npm
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import mapboxgl from 'mapbox-gl';

// == Import
import './styles.scss';
import Form from 'src/containers/Form';
import Dashboard from 'src/containers/Dashboard';

// == Composant
const App = ({
  error, coordinate, showPopUp,
}) => {
  const apiKey = 'pk.eyJ1IjoibGFyYW1pbnNraSIsImEiOiJja2xxY2R1cm4wd2FzMnBrYXRsbGF1bW5yIn0.IcsZpJa8jgkL7R2n3qNLpA';

  const style = 'cklqcgjkk3osr17t6u3q4yhif';

  mapboxgl.accessToken = apiKey;

  useEffect(() => {
    const map = new mapboxgl.Map({
      container: 'map',
      style: `https://api.mapbox.com/styles/v1/laraminski/${style}?access_token=${apiKey}`,
      center: coordinate,
      zoom: 8,
    });

    const popUp = new mapboxgl.Popup({ offset: 25 })
      .setText(
        showPopUp,
      );

    const marker = new mapboxgl.Marker({
      color: '#48D1CC',
    }).setLngLat(coordinate)
      .addTo(map)
      .setPopup(popUp);
  }, [coordinate, showPopUp]);

  return (
    <>
      <div id="map" />
      {error !== '' && (error)}
      <Form />
      <Dashboard />
    </>

  );
};

// == Export
export default App;
