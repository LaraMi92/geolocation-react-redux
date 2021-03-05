import axios from 'axios';

import {
  GET_DIRECTIONS, showDirections, setError,
} from 'src/store/actions';

const apiKey = 'pk.eyJ1IjoibGFyYW1pbnNraSIsImEiOiJja2xxY2R1cm4wd2FzMnBrYXRsbGF1bW5yIn0.IcsZpJa8jgkL7R2n3qNLpA';
const routingProfile = 'driving';

const getDirections = (store) => (next) => (action) => {
  if (action.type === GET_DIRECTIONS) {
    const { directions } = store.getState();
    console.log(directions);
    axios.get(`https://api.mapbox.com/directions/v5/mapbox/${routingProfile}/${directions[0]};${directions[2]}?alternatives=true&geometries=geojson&steps=true&access_token=${apiKey}`)
      .then((result) => console.log(result))
      .catch((error) => setError(error));
  }
  next(action);
};

export default getDirections;
