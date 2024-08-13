import React from 'react';
import './Card.css'; // Adjust the path as necessary
import CheckedInIcon from '../../icons/enteredIcon.png';
import CheckedOutIcon from '../../icons/exitedIcon.png';
import EmployeesIcon from '../../icons/employeesIcon.png';
import ZonesIcon from '../../icons/locationIcon.png';
import PendingEmployees from '../../icons/PendingIcon.png';
import AbsentIcon from '../../icons/AbsentIcon.png';
import Charts from '../../../components/Charts/Charts';
import AreaCharts from '../../../components/AreaCharts/AreaCharts';
import MenuIcon from '../../icons/Menu.png';
import { Button, Dropdown, Modal, Avatar } from "flowbite-react";
const Card = () => {
  return (
    <div className="cardUI">


<div className="headerOfPage_Profile">
<div className="topHeader">
  <div
    className="md:hidden cursor-pointer" 
   
  >
    <img src={MenuIcon} alt="Menu Icon" className="w-8 h-8 ml-[100px]" />
  </div>
  <div className="titleOfHeader_Profile_Dashboard">
    <p className="font-custom font-light">Dashboard</p>
  </div>
  <div className="ProfilePic mr-[100px] md:mr-0"> 
    <Dropdown
      label={<Avatar alt="User settings" img="" rounded />}
      arrowIcon={false}
      inline
    >
      <Dropdown.Header>
        <span className="block text-sm">Bonnie Green</span>
        <span className="block truncate text-sm font-medium">name@flowbite.com</span>
      </Dropdown.Header>
      <Dropdown.Item>Dashboard</Dropdown.Item>
      <Dropdown.Item>Settings</Dropdown.Item>
      <Dropdown.Item>Earnings</Dropdown.Item>
      <Dropdown.Divider />
      <Dropdown.Item>Sign out</Dropdown.Item>
    </Dropdown>
  </div>
</div>


        </div>
      

<div className="MainCardsContainer">

<div className="card-container_first">
        <div className="card" style={{ backgroundColor: 'rgba(218, 238, 240, 0.45)' }}>
          <img src={CheckedInIcon} alt="Checked In Icon" />
          <div className="card-content">

          <h3 className="font-custom font-light">Checked In</h3>
          <p>3.</p>

          </div>
          
        </div>
        <div className="card" style={{ backgroundColor: 'rgba(218, 238, 240, 0.45)' }}>
          <img src={CheckedOutIcon} alt="Checked Out Icon" />

<div className="card-content">
<h3 className="font-custom font-light">Checked Out</h3>
          <p>3</p>

</div>

          
        </div>
        <div className="card totalEmps" style={{ backgroundColor: 'rgba(218, 238, 240, 0.45)' }}>
          <img src={EmployeesIcon} alt="Total Employees Icon" />

          <div className="card-content">

          <h3 className="font-custom font-light">Total Employees</h3>
          <p>3</p>
          </div>
          
        </div>
      </div>
      <div className="card-container_second">
        <div className="card" style={{ backgroundColor: 'rgba(218, 238, 240, 0.45)' }}>
          <img src={ZonesIcon} alt="Total Zones Icon" />

          <div className="card-content">
          <h3 className="font-custom font-light">Total Zones</h3>
          <p>4</p>

          </div>
          
        </div>
        <div className="card" style={{ backgroundColor: 'rgba(218, 238, 240, 0.45)' }}>
          <img src={PendingEmployees} alt="Pending Employees Icon" />
          <div className="card-content">
          <h3 className="font-custom font-light">Pending Employees</h3>
          <p>0</p>

          </div>
          
        </div>
        <div className="card Absent" style={{ backgroundColor: 'rgba(218, 238, 240, 0.45)' }}>
          <img src={AbsentIcon} alt="Absent Icon" />

          <div className="card-content ">
          <h3 className="font-custom font-light">Absent</h3>
          <p>0</p>


          </div>
          
        </div>
      </div>




</div>


      <div className="graphContainer">
        <div className="barGraphContainer" style={{ backgroundColor: 'rgba(218, 238, 240, 0.45)' }}>
         <Charts></Charts>
        </div>

        <div className="pieGraphContainer">

<AreaCharts></AreaCharts>
          
        </div>
        
      </div>
    </div>
  );
};

export default Card;
