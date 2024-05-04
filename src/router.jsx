import { createBrowserRouter } from "react-router-dom/dist" 
// import MainLayout from "./components/MainLayout"
// import Side from "./pages/particitant/userdashboard/Side"
import Userdashboard from "./pages/particitant/userdashboard/Userdashboard"
import MainLayout from "./components/MainLayout"
import Home from "./pages/Home"
import About from "./pages/About"
import Boxlayout from "./pages/particitant/userdashboard/Boxlayout"
import Profile from "./pages/Profile"
import Settings from "./pages/Settings"
import SignInAs from "./pages/signInAs/SignInAs"
import SignUp from "./pages/signUp/SignUp"
import CreateQuestion from "./pages/admin/admindashboard/CreateQuestion"
import Login from "./pages/login/Login"
import DashboardMain from "./pages/admin/admindashboard/DashboardMain"
import Accounting from "./questions/accounting/Accounting"
import Result from "./pages/admin/admindashboard/Result"

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home/>,
    },
    {
        path:'/signInAs',
        element:<SignInAs/>
    },
    {
        path:'/signin',
        element:<SignUp/>
    },
    {
        path:'/login',
        element:<Login/>
    },
    {
        path:"/createQuiz",
        element: <CreateQuestion/>
    },
    {
        path: "/results",
        element: <Result/>
    },
    {
        path: "/admindashboard",
        element: <DashboardMain/>
    },
    {
        path: "/accounting",
        element: <Accounting/>
    },
    {
        path: "/userdashboard",
        element: <Userdashboard/>,
        children: [
            {
                index: true,
                element:<Boxlayout/>
            },
            {
                path: "/userdashboard/profile",
                element: <Profile/>
            },
            {
                path: "/userdashboard/settings",
                element: <Settings/>
            },
          
        ]    
    },
    {

    }

])

export default router