import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Home from './pages/Home.jsx';
import Userdashboard from "./pages/participant/userdashboard/Userdashboard.jsx";
import MainLayout from './components/MainLayout.jsx';
import Sidebar from './pages/participant/userdashboard/Side.jsx'; // Corrected import path
import Profile from './pages/Profile.jsx';
import Settings from './pages/Settings.jsx';
import Logout from './pages/Logout.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />, // Render MainLayout for the root path
    children: [
      {
        path: '/userdashboard', // Main userdashboard route
        element: <Userdashboard />, // Render Userdashboard component
        children: [
          {
            path: '/', // Nested home route (e.g., /userdashboard/)
            element: <Sidebar />, // Render Sidebar within Userdashboard
            children: [
              {
                index: true, // Default route within Sidebar
                element: <Home /> // Render Home component
              },
              {
                path: 'profile', // Nested profile route (e.g., /userdashboard/profile)
                element: <Profile /> // Render Profile component
              },
              {
                path: 'settings', // Nested settings route (e.g., /userdashboard/settings)
                element: <Settings /> // Render Settings component
              },
              {
                path: 'logout', // Nested logout route (e.g., /userdashboard/logout)
                element: <Logout /> // Render Logout component
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '*', // 404 Not Found page
    element: <h1>Page not found</h1> // Render this element for unmatched paths
  }
]);

export default router;
