// == Import npm
import React from 'react';
import PropTypes from 'prop-types';

// == Composant
const GetDirections = ({
  handleChange, submitForm, start, end,
}) => (
  <div className="form">
    <form onSubmit={(event) => {
      event.preventDefault();
      submitForm();
    }}
    >
      <input
        type="text"
        name="start"
        value={start}
        onChange={(event) => handleChange(event.target.name, event.target.value)}
        placeholder="what's your starting point?"
      />
      <input
        type="text"
        name="end"
        value={end}
        onChange={(event) => handleChange(event.target.name, event.target.value)}
        placeholder="where do you want to go?"
      />
      <button type="submit">Submit</button>
    </form>
  </div>
);

GetDirections.propTypes = {
  start: PropTypes.string.isRequired,
  end: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  submitForm: PropTypes.func.isRequired,
};

// == Export
export default GetDirections;
