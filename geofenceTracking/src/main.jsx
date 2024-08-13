import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';
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
import Reports from './components/Reports/Reports.jsx';
import CreateAccount from './components/CreateAccount/CreateAccount.jsx';

const MainApp = () => {
  const [isSliderOpen, setIsSliderOpen] = useState(false);

  const toggleSlider = () => {
    setIsSliderOpen(!isSliderOpen);
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
    },
    {
      path: "/dashboard",
      element: (
        <>
          <Slider isOpen={isSliderOpen} toggleMenu={toggleSlider} />
          
          <Card />
        </>
      ),
    },
    {
      path: "/profile",
      element: (
        <>
          <Slider isOpen={isSliderOpen} toggleMenu={toggleSlider} />
          <Profile toggleMenu={toggleSlider} />
        </>
      ),
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/zones",
      element: (
        <>
          <Slider isOpen={isSliderOpen} toggleMenu={toggleSlider} />
          <Zones />
        </>
      ),
    },
    {
      path: "/shifts",
      element: (
        <>
          <Slider isOpen={isSliderOpen} toggleMenu={toggleSlider} />
          <Shifts />
        </>
      ),
    },
    {
      path: "/departments",
      element: (
        <>
          <Slider isOpen={isSliderOpen} toggleMenu={toggleSlider} />
          <Departments />
        </>
      ),
    },
    {
      path: "/employees",
      element: (
        <>
          <Slider isOpen={isSliderOpen} toggleMenu={toggleSlider} />
          <Employees />
        </>
      ),
    },
    {
      path: "/users",
      element: (
        <>
          <Slider isOpen={isSliderOpen} toggleMenu={toggleSlider} />
          <Users />
        </>
      ),
    },
    {
      path: "/reports",
      element: (
        <>
          <Slider isOpen={isSliderOpen} toggleMenu={toggleSlider} />
          <Reports />
        </>
      ),
    },
    {
      path: "/createAccount",
      element: (
        <>
       
   <main>
   <CreateAccount></CreateAccount>

   </main>
        
        </>
      ),
    },





  ]);

  return <RouterProvider router={router} />;
};

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <MainApp />
  </React.StrictMode>,
);
