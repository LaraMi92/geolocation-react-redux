import axios from 'axios';

import {
  SEND_LOCATION, setCoordinate, setError, updateMap,
} from 'src/store/actions';

const apiKey = 'pk.eyJ1IjoibGFyYW1pbnNraSIsImEiOiJja2xxY2R1cm4wd2FzMnBrYXRsbGF1bW5yIn0.IcsZpJa8jgkL7R2n3qNLpA';
const endPoint = 'mapbox.places';

const getGeo = (store) => (next) => (action) => {
  if (action.type === SEND_LOCATION) {
    const { location } = store.getState();
    axios.get(`https://api.mapbox.com/geocoding/v5/${endPoint}/${location}.json?access_token=${apiKey}`)
      .then((result) => store.dispatch(setCoordinate(result.data.features[0].center)))
      .catch((error) => setError(error));
  }
  next(action);
};

export default getGeo;
