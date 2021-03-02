/* import axios from 'axios';

import { UPDATE_MAP} from 'src/store/actions';

const apiKey = 'pk.eyJ1IjoibGFyYW1pbnNraSIsImEiOiJja2xxY2R1cm4wd2FzMnBrYXRsbGF1bW5yIn0.IcsZpJa8jgkL7R2n3qNLpA';
const endPoint = 'mapbox.places';
const style = 'cklqcgjkk3osr17t6u3q4yhif';

const updateMap = (store) => (next) => (action) => {
  if (action.type === UPDATE_MAP) {
    const { coordinate } = store.getState();
    axios.get(`https://api.mapbox.com/styles/v1/laraminski/${style}?access_token=${apiKey}`)
      .then((result) => setCoordinate(result.data.features[0].center))
      .catch((error) => setError(error));
  }
  next(action);
};

export default updateMap;
 */
