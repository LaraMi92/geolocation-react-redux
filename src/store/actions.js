export const UPDATE_LOCATION = 'UPDATE_LOCATION';
export const SEND_LOCATION = 'SEND_LOCATION';
export const SET_COORDINATE = 'SET_COORDINATE';
export const SET_ERROR = 'SET_ERROR';
export const UPDATE_MAP = 'UPDATE_MAP';

export const updateForm = (value) => ({
  type: UPDATE_LOCATION,
  location: value,
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

export const updateMap = () => ({
  type: UPDATE_MAP,
});
