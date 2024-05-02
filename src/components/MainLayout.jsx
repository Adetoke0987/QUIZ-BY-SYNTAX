import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from ''

const MainLayout = () => {

  return (
    <div>
      <Header />
      <div style={contentStyle}>
        <Outlet />
      </div>
    </div>
  );
};

export default MainLayout;
