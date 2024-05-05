import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import ProtectedRoute from './routes/ProtectedRoutes';

import Userdashboard from './pages/particitant/userdashboard/Userdashboard';
import MainLayout from './components/MainLayout';
import Home from './pages/Home';
import SignInAs from './pages/signInAs/SignInAs';
import SignUp from './pages/signUp/SignUp';
import CreateQuestion from './pages/admin/admindashboard/CreateQuestion';
import Login from './pages/login/Login';
import DashboardMain from './pages/admin/admindashboard/DashboardMain';
import Accounting from './questions/accounting/Accounting';
import Result from './pages/admin/admindashboard/Result';
import Loading from './components/loading/Loading';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/signInAs',
    element: <SignInAs />,
  },
  {
    path: '/signin',
    element: <SignUp />,
  },
  {
    path: '/login',
    element: <Login />,
  },
  
  {
    path: '/accounting',
    element: <Accounting/>,
  },
  {
    path: '/userdashboard',
    element: <Userdashboard />,
    children: [
      {
        index: true,
        element: <MainLayout />,
      },
    ],
  },

  {
    path: '/admin',
    element: (
      <ProtectedRoute>
        <DashboardMain/>
      </ProtectedRoute>
    ),
    children:[
      // {
      //   path: '/admin/settings',
      //   element: <Settings/>,
      // },
      {
        path: '/admin/createQuiz',
        element: <CreateQuestion />,
      },
      {
        path: '/admin/results',
        element: <Result/>,
      },
      {

    ]
  },
  {
    path: '/loading',
    element: <Loading />,
  },
]);

export default router;
