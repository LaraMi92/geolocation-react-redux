import { connect } from 'react-redux';

import App from 'src/components/App';

const mapStateToProps = (state) => ({
  error: state.error,
  coordinate: state.coordinate,
});

export default connect(mapStateToProps)(App);
