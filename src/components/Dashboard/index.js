// == Import npm
import React from 'react';
import PropTypes from 'prop-types';

import './dashboard.scss';

// == Composant
const Dashboard = ({ locations }) => (
  <div className="dashboard">
    Here are your recent searches
    {locations.map((location, index) => (
      <div key={index} className="dashboard--location">{location}
        {/* <button type="button" onClick={submitAgain(location)}>search again</button> */}
      </div>
    ))}
  </div>
);

// == Export
export default Dashboard;
