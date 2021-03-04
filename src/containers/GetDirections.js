import { connect } from 'react-redux';

import GetDirections from 'src/components/GetDirections';

import { sendDirections, updateDirections } from 'src/store/actions';

const mapStateToProps = (state) => ({
  start: state.start,
  end: state.end,
});

const mapDispatchToProps = (dispatch) => ({
  submitForm: () => {
    dispatch(sendDirections());
  },
  handleChange: (name, value) => {
    dispatch(updateDirections(name, value));
  },

});

export default connect(mapStateToProps, mapDispatchToProps)(GetDirections);
