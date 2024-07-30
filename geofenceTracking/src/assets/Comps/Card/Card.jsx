import React from 'react';
import './Card.css'; // Adjust the path as necessary
import CheckedInIcon from '../../icons/enteredIcon.png';
import CheckedOutIcon from '../../icons/exitedIcon.png';
import EmployeesIcon from '../../icons/employeesIcon.png';
import ZonesIcon from '../../icons/locationIcon.png';
import PendingEmployees from '../../icons/PendingIcon.png';
import AbsentIcon from '../../icons/AbsentIcon.png';

const Card = () => {
  return (
    <div className="cardUI">
      <div className="card-container">
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
        <div className="card" style={{ backgroundColor: 'rgba(218, 238, 240, 0.45)' }}>
          <img src={EmployeesIcon} alt="Total Employees Icon" />

          <div className="card-content">

          <h3 className="font-custom font-light">Total Employees</h3>
          <p>3</p>
          </div>
          
        </div>
      </div>
      <div className="card-container">
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
        <div className="card" style={{ backgroundColor: 'rgba(218, 238, 240, 0.45)' }}>
          <img src={AbsentIcon} alt="Absent Icon" />

          <div className="card-content">
          <h3 className="font-custom font-light">Absent</h3>
          <p>0</p>


          </div>
          
        </div>
      </div>

      <div className="graphContainer">
        <div className="barGraphContainer" style={{ backgroundColor: 'rgba(218, 238, 240, 0.45)' }}>
          
        </div>

        <div className="pieGraphContainer">

          
        </div>
        
      </div>
    </div>
  );
};

export default Card;
