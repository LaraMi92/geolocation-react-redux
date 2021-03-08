import { connect } from 'react-redux';

import Dashboard from 'src/components/Dashboard';

import { renderMap, showPopUp, submitPop } from 'src/store/actions';

const mapStateToProps = (state) => ({
  locations: state.locations,
  popUpText: state.popUpText,
  showPopUp: state.showPopUp,
  allPopUps: state.allPopUps,
});

const mapDispatchToProps = (dispatch) => ({
  submitAgain: (locationName) => {
    dispatch(renderMap(locationName));
  },
  handleChange: (popup) => {
    dispatch(showPopUp(popup));
  },
  submitPopUp: (location) => {
    dispatch(submitPop(location));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
