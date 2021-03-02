import { connect } from 'react-redux';

import Dashboard from 'src/components/Dashboard';

import { sendForm, updateForm } from 'src/store/actions';

const mapStateToProps = (state) => ({
  locations: state.locations,
});

const mapDispatchToProps = (dispatch) => ({
  /*  submitAgain: () => {
    dispatch(sendForm());
  }, */
});

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
