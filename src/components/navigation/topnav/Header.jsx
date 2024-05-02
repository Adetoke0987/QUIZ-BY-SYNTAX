
import React from 'react';
import img from '../../..//assets/home.png';

const Header = () => {
  return (
    <div style={{ display: 'flex', justifyContent: 'flex-start' }}>
    <img src={img} alt="" style={{ marginRight: '20px', width: '30px', marginTop: '20px' }} />

    </div>
  );
};

export default Header;
