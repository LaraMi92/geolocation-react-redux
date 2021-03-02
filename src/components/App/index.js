// == Import npm
import React, { useEffect, useState, useRef } from 'react';
import mapboxgl from 'mapbox-gl';

// == Import
import './styles.scss';
import Form from 'src/containers/Form';
import Dashboard from 'src/containers/Dashboard';

// == Composant
const App = ({ error, coordinate }) => {
  const apiKey = 'pk.eyJ1IjoibGFyYW1pbnNraSIsImEiOiJja2xxY2R1cm4wd2FzMnBrYXRsbGF1bW5yIn0.IcsZpJa8jgkL7R2n3qNLpA';
  // const endPoint = 'mapbox.places';
  // const [location, setLocation] = useState('');
  const style = 'cklqcgjkk3osr17t6u3q4yhif';
  // const [coordinates, setCoordinates] = useState(['47.57183', '67.25398']);
  mapboxgl.accessToken = apiKey;
  // const [error, setError] = useState('');
  // const [locations, addLocations] = useState([]);

  /* const getGeo = () => {
    addLocations([...locations, location]);
    axios.get(`https://api.mapbox.com/geocoding/v5/${endPoint}/${location}.json?access_token=${apiKey}`)
      .then((result) => setCoordinates(result.data.features[0].center))
      .catch(() => setError('Oops can you try another location?'))
      .finally(() => setLocation(''));
  };
  console.log(locations); */

  /* const handleChange = (event) => {
    setLocation(event.target.value);
  }; */

  useEffect(() => {
    const map = new mapboxgl.Map({
      container: 'map',
      style: `https://api.mapbox.com/styles/v1/laraminski/${style}?access_token=${apiKey}`,
      center: coordinate,
      zoom: 8,
    });
    console.log(coordinate);
    const marker = new mapboxgl.Marker({
      color: '#48D1CC',
    }).setLngLat(coordinate)
      .addTo(map);
  }, [coordinate]);

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
