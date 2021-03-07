// createStore
import { createStore, applyMiddleware } from 'redux';

// devtools redux
import { composeWithDevTools } from 'redux-devtools-extension';

import getGeo from 'src/middlewares/getGeo';
/* import getDirections from 'src/middlewares/getDirections'; */

// reducer
import reducer from './reducer';

// store instance
const store = createStore(
  reducer,
  composeWithDevTools(
    applyMiddleware(getGeo),
    /* applyMiddleware(getDirections), */
  ),
);

export default store;
