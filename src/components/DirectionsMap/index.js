// == Import npm
import React, { useEffect } from 'react';
import PropTypes, { number } from 'prop-types';
import mapboxgl from 'mapbox-gl';
import MapboxDirections from '@mapbox/mapbox-gl-directions/dist/mapbox-gl-directions';
// == Import
import './directions-map.scss';

// == Composant
const DirectionsMap = ({ directions, coordinate }) => {
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

    map.addControl(
      new MapboxDirections({
        accessToken: apiKey,
      }),
    );
  }, [directions]);

  return (
    <>
      <div id="map" />
    </>
  );
};

DirectionsMap.propTypes = {
  coordinate: PropTypes.arrayOf(number).isRequired,
};

// == Export
export default DirectionsMap;
