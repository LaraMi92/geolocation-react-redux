import {
  UPDATE_LOCATION, SEND_LOCATION, SET_COORDINATE, SET_ERROR, SEARCH_FORMER_COORDINATE, SET_DIRECTIONS, SHOW_COOR_DIR, SET_POP_UP, SUBMIT_POP_UP,
} from './actions';

const initialState = {
  location: '',
  coordinate: [49.63583, 47.29604],
  locations: [],
  coordinates: [],
  error: '',
  start: '',
  end: '',
  directions: [],
  popUpText: '',
  showPopUp: '',
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
    case SET_ERROR: {
      return {
        ...oldState,
        error: action.error,
      };
    }

    case SEARCH_FORMER_COORDINATE: {
      const found = oldState.locations.indexOf(action.locationName);
      const coord = oldState.coordinates[found];
      return {
        ...oldState,
        coordinate: coord,
      };
    }

    case SET_DIRECTIONS: {
      return {
        ...oldState,
        [action.payload.name]: action.payload.value,
      };
    }
    case SHOW_COOR_DIR: {
      return {
        ...oldState,
        directions: [...oldState.directions, action.directions],
      };
    }
    case SET_POP_UP: {
      return {
        ...oldState,
        popUpText: action.popUp,
      };
    }
    case SUBMIT_POP_UP: {
      return {
        ...oldState,
        showPopUp: oldState.popUpText,
        popUpText: '',
      };
    }
    default:
      return { ...oldState };
  }
}

export default reducer;
