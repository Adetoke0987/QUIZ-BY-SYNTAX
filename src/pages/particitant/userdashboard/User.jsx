import React from 'react';
import { Link } from 'react-router-dom';
import NavLinks from '../../../components/navigation/links/Navlinks';
import styles from '../../css/Freeusers.module.css';
import Sidebar from '../../../components/navigation/sidenav/Sidebar';
import { Outlet } from 'react-router-dom';

const User = () => {
  return (
    <div className={styles.freeUsersContainer}>
      <div>
        <Sidebar/>
      </div>
      <div className={styles.mainContent}>
        <h2>Welcome to Free Users Dashboard</h2>
      </div>
      <div style={contentStyle}>
        <Outlet />
      </div>
    </div>
  );
};

export default User;
