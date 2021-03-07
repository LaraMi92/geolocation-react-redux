export const UPDATE_LOCATION = 'UPDATE_LOCATION';
export const SEND_LOCATION = 'SEND_LOCATION';
export const SET_COORDINATE = 'SET_COORDINATE';
export const SET_ERROR = 'SET_ERROR';
export const UPDATE_MAP = 'UPDATE_MAP';
export const SEARCH_FORMER_COORDINATE = 'SEARCH_FORMER_COORDINATE';
export const SET_DIRECTIONS = 'SET_DIRECTIONS';
export const SEND_DIRECTIONS = 'SEND_DIRECTIONS';
export const SHOW_DIRECTIONS = 'SHOW_DIRECTIONS';
export const SHOW_COOR_DIR = 'SHOW_COOR_DIR';
export const GET_DIRECTIONS = 'GET_DIRECTIONS';
export const SET_POP_UP = 'SET_POP_UP';
export const SUBMIT_POP_UP = 'SUBMIT_POP_UP';

export const updateForm = (location) => ({
  type: UPDATE_LOCATION,
  location,
});

export const sendForm = () => ({
  type: SEND_LOCATION,
});

export const setCoordinate = (coordinate) => ({
  type: SET_COORDINATE,
  coordinate,
});

export const setError = (error) => ({
  type: SET_ERROR,
  error,
});

export const renderMap = (locationName) => ({
  type: SEARCH_FORMER_COORDINATE,
  locationName,
});

export const updateDirections = (name, value) => ({
  type: SET_DIRECTIONS,
  payload: { name, value },
});

export const sendDirections = () => ({
  type: SEND_DIRECTIONS,
});

/* export const showDirections = (directions) => ({
  type: SHOW_DIRECTIONS,
  directions,
});
 */
export const showCoorDir = (coordinates) => ({
  type: SHOW_COOR_DIR,
  directions: coordinates,
});

export const sendCoorDir = () => ({
  type: GET_DIRECTIONS,
});

export const showPopUp = (popUp) => ({
  type: SET_POP_UP,
  popUp,
});

export const submitPop = () => ({
  type: SUBMIT_POP_UP,
});
