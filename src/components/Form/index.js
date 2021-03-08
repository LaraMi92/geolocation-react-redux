// == Import npm
import React from 'react';
import PropTypes from 'prop-types';

//= = Import styles
import './form.scss';

// == Composant
const Form = ({ handleChange, submitForm, formValue }) => (
  <div className="form">
    <form onSubmit={(event) => {
      event.preventDefault();
      submitForm();
    }}
    >

      <input
        className="form--input"
        type="text"
        value={formValue}
        onChange={(event) => handleChange(event.target.value)}
        placeholder="please enter a location"
      />
    </form>
  </div>
);

Form.propTypes = {
  formValue: PropTypes.string,
  handleChange: PropTypes.func.isRequired,
  submitForm: PropTypes.func.isRequired,
};

// == Export
export default Form;
