import React from 'react';
import BoxGrid from './Box';

const Boxlayout = () => {
  // Define the array of boxes with color and text
  const boxes = [
    { color: '#5B1B5B', text: 'Project Management' },
    { color: '#FD3657', text: 'Information Technology' },
    { color: '#CA6B13', text: 'Buisness Administration' },
    { color: '#0B8084', text: 'Human Resources Management' },
    { color: '#3667B2', text: 'Accounting' },
    { color: '#255E2F', text: 'Logistics' }
  ];

  return (
    <div>
      {/* Render the BoxGrid component and pass the boxes array as props */}
      <BoxGrid boxes={boxes} />
    </div>
  );
};

export default Boxlayout;
