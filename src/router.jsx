

import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Home from './pages/Home.jsx';
import User from './pages/particitant/userdashboard/User.jsx';


const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
        children: [
            {
                index: "true",
                element: <User />
            },
            {
                path: "/user",
                element: <User />
            },
            {
                path: "*",
                element: "Page not found"
            },


        ]
    }
])

export default router