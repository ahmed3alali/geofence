import React, { useState } from 'react';
import '../Slider/Slider.css';
import ZonesIcon from '../../icons/NavZoneIcon.png';
import DepartmentsIcon from '../../icons/NavPersonIcon.png';
import ShiftsIcon from '../../icons/NavTimeIcon.png';
import EmployeesIcon from '../../icons/NavEmployeeIcon.png';
import UsersIcon from '../../icons/NavUsersIcon.png';
import ReportsIcon from '../../icons/NavReportsIcon.png';
import DashboardIcon from '../../icons/NavDashboardIcon.png';
import ProfileIcon from '../../icons/NavProfileIcon.png';
import GeofenceLogo from '../../Logo.png';
import MenuIcon from '../../icons/Menu.png';
const Slider = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
       <div
        className="lg:hidden p-4 m-4 text-black bg-gray-200 rounded cursor-pointer"
        onClick={toggleMenu}
      >
        <img src={MenuIcon} alt="Menu Icon" className="w-8 h-8" />
      </div>
      <div className={`menu ${isOpen ? 'block' : 'hidden'} lg:block bg-gradient-to-r from-[rgba(168,185,187,0.4)] to-[rgba(0,215,234,0.3)]`}>
        <div className="logo">
          <img src={GeofenceLogo} alt="Logo" />
        </div>
        <div className="menu-list ">
          <a href="/dashboard" className="item font-custom font-light">
            <img src={DashboardIcon} alt="Dashboard" />
            Dashboard
          </a>
          <a href="/profile" className="item font-custom font-light">
            <img src={ProfileIcon} alt="Profile" />
            Profile
          </a>
          <a href="/zones" className="item font-custom font-light">
            <img src={ZonesIcon} alt="Zones" />
            Zones
          </a>
          <a href="/departments" className="item font-custom font-light">
            <img src={DepartmentsIcon} alt="Departments" />
            Departments
          </a>
          <a href="/shifts" className="item font-custom font-light">
            <img src={ShiftsIcon} alt="Shifts" />
            Shifts
          </a>
          <a href="/employees" className="item font-custom font-light">
            <img src={EmployeesIcon} alt="Employee" />
            Employee
          </a>
          <a href="/users" className="item font-custom font-light">
            <img src={UsersIcon} alt="Users" />
            Users
          </a>
          <a href="/reports" className="item font-custom font-light">
            <img src={ReportsIcon} alt="Reports" />
            Reports
          </a>
        </div>
      </div>
      <div
        className={`fixed inset-0 bg-black bg-opacity-50 z-40 ${isOpen ? 'block' : 'hidden'} lg:hidden`}
        onClick={toggleMenu}
      ></div>
    </div>
  );
};

export default Slider;
