// == Import npm
import React from 'react';
import PropTypes, { string } from 'prop-types';

import './dashboard.scss';

// == Composant
const Dashboard = ({ locations, submitAgain }) => (
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
      </div>
    ))}
  </div>
);
Dashboard.propTypes = {
  locations: PropTypes.arrayOf(string).isRequired,
  submitAgain: PropTypes.func.isRequired,
};
// == Export
export default Dashboard;
