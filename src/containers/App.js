import { connect } from 'react-redux';

import App from 'src/components/App';

import { sendForm, updateForm } from 'src/store/actions';

const mapStateToProps = (state) => ({
  error: state.locations,
  coordinate: state.coordinate,
});

const mapDispatchToProps = (dispatch) => ({
  /*  submitAgain: () => {
    dispatch(sendForm());
  }, */
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
