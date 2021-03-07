import { connect } from 'react-redux';

import Dashboard from 'src/components/Dashboard';

import { renderMap, showPopUp, submitPop } from 'src/store/actions';

const mapStateToProps = (state) => ({
  locations: state.locations,
  popUpText: state.popUpText,
});

const mapDispatchToProps = (dispatch) => ({
  submitAgain: (locationName) => {
    dispatch(renderMap(locationName));
  },
  handleChange: (popup) => {
    dispatch(showPopUp(popup));
  },
  submitPopUp: () => {
    dispatch(submitPop());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
