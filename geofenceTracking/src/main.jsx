import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Dashboard from './components/Dashboard/Dashboard.jsx';
import Slider from './assets/Comps/Slider/Slider.jsx';
import Profile from './components/Profile/Profile.jsx';
import Login from './components/LoginScreen/Login.jsx';
import Zones from './components/Zones/Zones.jsx';
import TopBody from './assets/Comps/TopBody/TopBody.jsx';
import Content from './assets/Comps/Content/Content.jsx';
import Card from './assets/Comps/Card/Card.jsx';
import Departments from './components/Departments/Departments.jsx';
import Shifts from './components/Shifts/Shifts.jsx';
import Employees from './components/Employees/Employees.jsx';
import Users from './components/Users/Users.jsx';




const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>
  },

  {
    path: "/dashboard",
    element: <>
    <Slider></Slider>
    <TopBody></TopBody>
    <Content></Content>
    <Card></Card>
    </>
  },
 

  {
    path: "/profile",
    element:  <>
    <Slider />
    <Profile />
  </>


  },

  {

path: "/login",
element: <Login></Login>

  },

  {path:"/zones",
    element:<>
    <Slider></Slider>
    <Zones></Zones>
    </>
  },



  {


path:"/shifts",
element:<>

<Slider></Slider>
<Shifts></Shifts>

</>


  },



  {
    path:"/departments",
    element: <>
    
    <Slider></Slider>
    <Departments></Departments>
    
    </>
  
  },

  {
    path:"/employees",
    element: <>
    
    <Slider></Slider>
  <Employees></Employees>
    
    </>
  
  },


  {

path:"/users",

element:<>

<Slider></Slider>
<Users></Users>


</>




  }


]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
