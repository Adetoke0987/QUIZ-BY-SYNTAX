

import React from 'react';
import Boxlayout from './Boxlayout';
import Side from './Side'; // Import the Side component
import './Userdashboard.css'

const Userdashboard = () => {
  return (
    <div className="app-container">
      <Side /> {/* Render the Side component */}
      <Boxlayout /> 
    </div>
  );
};

export default Userdashboard;

