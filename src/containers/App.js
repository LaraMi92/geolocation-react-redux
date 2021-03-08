import { connect } from 'react-redux';

import App from 'src/components/App';

import { submitPop } from 'src/store/actions';

const mapStateToProps = (state) => ({
  error: state.error,
  coordinate: state.coordinate,
  showPopUp: state.showPopUp,
});

const mapDispatchToProps = (dispatch) => ({

});
export default connect(mapStateToProps, mapDispatchToProps)(App);
