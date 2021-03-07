// == Import npm
import React from 'react';
import PropTypes, { string } from 'prop-types';

import './dashboard.scss';

// == Composant
const Dashboard = ({
  locations, submitAgain, submitPopUp, handleChange, popUpText,
}) => (
  <div className="dashboard">
    Here are your recent searches
    {locations.map((location, index) => (
      <div key={index} className="dashboard--location">{location}
        <form onSubmit={(event) => {
          event.preventDefault();
          submitAgain(location);
        }}
        >
          <button type="submit">search again</button>
        </form>
        <form onSubmit={(event) => {
          event.preventDefault();
          submitPopUp();
        }}
        >
          <input
            type="text"
            value={popUpText}
            onChange={(event) => {
              handleChange(event.target.value);
            }}
          />
        </form>
      </div>
    ))}
  </div>
);
Dashboard.propTypes = {
  locations: PropTypes.arrayOf(string).isRequired,
  submitAgain: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired,
  popUpText: PropTypes.string.isRequired,
};
// == Export
export default Dashboard;
