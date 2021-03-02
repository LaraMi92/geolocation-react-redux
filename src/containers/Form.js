import { connect } from 'react-redux';

import Form from 'src/components/Form';

import { sendForm, updateForm } from 'src/store/actions';

const mapStateToProps = (state) => ({
  formValue: state.location,
});

const mapDispatchToProps = (dispatch) => ({
  submitForm: () => {
    dispatch(sendForm());
  },
  handleChange: (value) => {
    dispatch(updateForm(value));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Form);
