import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './Sidebar';

const Home = () => <h1>Home Page</h1>;
const Profile = () => <h1>Profile Page</h1>;
const Settings = () => <h1>Settings Page</h1>;
const Logout = () => <h1>Logout Page</h1>;

const Side = () => {
  // Define menu items with links and icons
  const menuItems = [
    { text: 'Home', link: '/', icon: '🏠' },
    { text: 'Profile', link: '/profile', icon: '👤' },
    { text: 'Settings', link: '/settings', icon: '⚙️' },
    { text: 'Logout', link: '/logout', icon: '🚪' }
  ];

  return (
    <Router>
      <div className="app">
        {/* Sidebar component with menu items */}
        <Sidebar menuItems={menuItems} />

        {/* Main content area */}
        <div className="main-content">
          {/* Define routes for main content */}
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/logout" element={<Logout />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default Side;
