import { connect } from 'react-redux';

import Dashboard from 'src/components/Dashboard';

import { renderMap } from 'src/store/actions';

const mapStateToProps = (state) => ({
  locations: state.locations,
});

const mapDispatchToProps = (dispatch) => ({
  submitAgain: (locationName) => {
    dispatch(renderMap(locationName));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
