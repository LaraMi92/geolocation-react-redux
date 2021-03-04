import axios from 'axios';

import {
  SEND_DIRECTIONS, showDirections, setError,
} from 'src/store/actions';

const apiKey = 'pk.eyJ1IjoibGFyYW1pbnNraSIsImEiOiJja2xxY2R1cm4wd2FzMnBrYXRsbGF1bW5yIn0.IcsZpJa8jgkL7R2n3qNLpA';
const routingProfile = 'driving';

const getDirections = (store) => (next) => (action) => {
  /*  if (action.type === SEND_DIRECTIONS) {
    const { start, end } = store.getState();
    axios.get(`https://api.mapbox.com/directions/v5/${routingProfile}/${start};${end}?alternatives=false&geometries=geojson&steps=true&access_token=${apiKey}`)
      .then((result) => console.log(result.data.routes))
      .catch((error) => setError(error));
  } */
  next(action);
};

export default getDirections;
