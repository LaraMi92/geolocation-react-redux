import {
  UPDATE_LOCATION, SEND_LOCATION, SET_COORDINATE, UPDATE_MAP,
} from './actions';

const initialState = {
  location: '',
  coordinate: [49.63583, 47.29604],
  locations: [],
  coordinates: [],
};

function reducer(oldState = initialState, action) {
  switch (action.type) {
    case UPDATE_LOCATION: {
      return {
        ...oldState,
        location: action.location,
      };
    }
    case SEND_LOCATION: {
      return {
        ...oldState,
        locations: [...oldState.locations, oldState.location],
      };
    }
    case SET_COORDINATE: {
      return {
        ...oldState,
        coordinate: [...action.coordinate],
        coordinates: [...oldState.coordinates, action.coordinate],
        location: '',
      };
    }
    case UPDATE_MAP: {
      return {
        ...oldState,
      };
    }
    default:
      return { ...oldState };
  }
}

export default reducer;
