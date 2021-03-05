import { connect } from 'react-redux';

import DirectionsMap from 'src/components/DirectionsMap';

const mapStateToProps = (state) => ({
  error: state.error,
  coordinate: state.coordinate,
  directions: state.directions,
});

export default connect(mapStateToProps)(DirectionsMap);
