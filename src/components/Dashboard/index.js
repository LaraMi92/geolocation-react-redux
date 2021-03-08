// == Import npm
import React from 'react';
import PropTypes, { string } from 'prop-types';

import './dashboard.scss';

// == Composant
const Dashboard = ({
  locations, submitAgain, submitPopUp, handleChange, popUpText, showPopUp, allPopUps,
}) => (
  <div className="dashboard">
    {locations.length === 0 ? ('You have no searches yet') : ('Here are your recent searches')}
    {locations.map((location, index) => (
      <div key={index} className="dashboard--location">{location}
        <form onSubmit={(event) => {
          event.preventDefault();
          submitAgain(location);
        }}
        >
          <button type="submit">search again</button>
        </form>
        {allPopUps[index] === undefined && (
        <form onSubmit={(event) => {
          event.preventDefault();
          submitPopUp(location);
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
        )}

        {allPopUps[index] !== '' && (<div>{allPopUps[index]}</div>)}
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
