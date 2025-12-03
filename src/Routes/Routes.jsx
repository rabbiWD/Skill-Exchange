import { createBrowserRouter } from "react-router";
import Home from "../Pages/Home";
import MainLayout from "../Layout/MainLayout";
import MyProfile from "../Pages/MyProfile";
import Signup from "../Pages/Signup";
import Login from "../Pages/Login";
import AuthLayout from "../Layout/AuthLayout";
import SkillDetails from "../Pages/SkillDetails";
import UpdateProfile from "../Pages/UpdateProfile";
import ForgetPassword from "../Pages/ForgetPassword";

const router = createBrowserRouter([
  {
    path:'/',
    element: <MainLayout></MainLayout>,
    children:[
   {
    index: true,
    element: <Home></Home>
   },
   {
    path:'/myprofile',
    element: <MyProfile></MyProfile>
   },
   {
    path:'/updateProfile',
    element:<UpdateProfile></UpdateProfile>
  },
  {
    path: '/forgetPassword',
    element: <ForgetPassword></ForgetPassword>
  },
  {
    path: '/skill/:skillId',
    element:<SkillDetails></SkillDetails>,
    loader: ()=> fetch('/SkillData.json')
  },
  ]
  },
  {
    path:'/auth',
    element: <AuthLayout></AuthLayout>,
    children:[
      {
        path:'/auth/login',
        element:<Login></Login>
      },
       {
        path:'/auth/signup',
        element:<Signup></Signup>
      }
    ]
  }
  
])
export default router