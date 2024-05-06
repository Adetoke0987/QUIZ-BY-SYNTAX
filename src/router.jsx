// import { createBrowserRouter } from "react-router-dom/dist" 
// import Userdashboard from "./pages/particitant/userdashboard/Userdashboard"
// import MainLayout from "./components/MainLayout"
// import Home from "./pages/Home"
// import About from "./pages/About"
// import Boxlayout from "./pages/particitant/userdashboard/Boxlayout"
// import Profile from "./pages/Profile"
// import Settings from "./pages/Settings"
// import SignInAs from "./pages/signInAs/SignInAs"
// import SignUp from "./pages/signUp/SignUp"
// import CreateQuestion from "./pages/admin/admindashboard/CreateQuestion"
// import Login from "./pages/login/Login"
// import DashboardMain from "./pages/admin/admindashboard/DashboardMain"
// import Accounting from "./questions/accounting/Accounting"
// import Result from "./pages/admin/admindashboard/Result"

// const router = createBrowserRouter([
//     {
//         path: "/",
//         element: <Home/>,
//     },
//     {
//         path:'/signInAs',
//         element:<SignInAs/>
//     },
//     {
//         path:'/signin',
//         element:<SignUp/>
//     },
//     {
//         path:'/login',
//         element:<Login/>
//     },
//     {
//         path:"/createQuiz",
//         element: <CreateQuestion/>
//     },
//     {
//         path: "/results",
//         element: <Result/>
//     },
//     {
//         path: "/admindashboard",
//         element: <DashboardMain/>
//     },
//     {
//         path: "/accounting",
//         element: <Accounting/>
//     },
//     {
//         path: "/userdashboard",
//         element: <Userdashboard/>,
//         children: [
//             {
//                 index: true,
//                 element:<Boxlayout/>
//             },
//             {
//                 path: "/userdashboard/profile",
//                 element: <Profile/>
//             },
//             {
//                 path: "/userdashboard/settings",
//                 element: <Settings/>
//             },
          
//         ]    
//     },
//     {

//     }

// ])

// export default router


import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import ProtectedRoute from './routes/ProtectedRoute';
import Userdashboard from './pages/particitant/userdashboard/Userdashboard';
import MainLayout from './components/MainLayout';
import Home from './pages/Home';
import SignInAs from './pages/signInAs/SignInAs';
import SignUp from './pages/signUp/SignUp';
import CreateQuestion from './pages/admin/admindashboard/CreateQuestion';
import Login from './pages/login/Login';
import DashboardMain from './pages/admin/admindashboard/DashboardMain';
import Accounting from './questions/accounting/Accounting';
import BuinessAdmin from './questions/businessAdmin/BuinessAdmin';
import Marketing from './questions/marketing/Marketing'
import InformationTech from './questions/informationTech/InformationTech';
import Logistics from './questions/logicstics/Logicstics'
import Result from './pages/admin/admindashboard/Result';
import ProjectManagement from './questions/projectManagement/ProjectManagement';
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
    path: '/buinessAdmin',
    element: <BuinessAdmin/>,
  },
  {
    path: '/infomationTech',
    element: <InformationTech/>,
  },
  {
    path: '/logistics',
    element: <Logistics/>,
  },
  {
    path: '/marketing',
    element: <Marketing/>,
  },
  {
    path: '/projectManagement',
    element: <ProjectManagement/>,
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
      

    ]
  },
  {
    path: '/loading',
    element: <Loading />,
  },
]);

export default router;
