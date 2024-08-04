import React, { useState } from 'react';
import '../Shifts/Shifts.css';

import zoneDescription from "../../assets/icons/zoneDescription.png";
import viewBtnIcon from "../../assets/icons/viewBtn.png";
import deleteBtnIcon from "../../assets/icons/deleteBtn.png";

const shifts = [
  { id: 1, name: 'Shift 1' },
  { id: 1, name: 'Shift 2' },
  { id: 1, name: 'Shift 3' },
  { id: 1, name: 'Shift 4' },
  { id: 1, name: 'Shift 5' },
  { id: 1, name: 'Shift 6' },
  { id: 1, name: 'Shift 7' },
  { id: 1, name: 'Shift 8' },
];

const Shifts = () => {
  const [shiftName, setShiftName] = useState('Select a Shift');

  const handleViewClick = (shiftName) => {
    setShiftName(shiftName);
  };

  return (
    <div className='page_Shifts'>
      <div className="headerOfPage">
        <div className="topHeader">
          <div className="titleOfHeader">
            <p className="font-custom font-light">Shifts</p>
          </div>
          <div className="ProfilePic">
            <div className="profilePicCircle"></div>
          </div>
        </div>
      </div>

      <div className="contentOfPage_Shifts">
        
        {shifts.map(shift => (
          <div key={shift.id} className="CardsHeader">
            <div className="Card bg-[#C2D4E4]">
              <div className="cardDescription">
                <a href="#" className="ZoneTitle font-custom font-light">
                  <img src={zoneDescription} alt="ViewOption" />
                  {shift.name}
                </a>
              </div>
            </div>
            <div className="zoneOptions">
              <a href="#" className="ZoneCardOptions font-custom font-light" onClick={() => handleViewClick(shift.name)}>
                <img src={viewBtnIcon} alt="ViewOption" />
                View
              </a>
              <a href="#" className="ZoneCardOptions font-custom font-light">
                <img src={deleteBtnIcon} alt="DeleteOption" />
                Delete
              </a>
            </div>
          </div>
        ))}
      </div>

      <div className="ZonesTable_Shifts">
        <div className="zoneTitle_Shifts">
          <h1 className='font-custom font-light'>{shiftName}</h1>
        </div>

        <div className="flex flex-col">
          <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
              <div className="overflow-hidden">
                <table className="min-w-[850px] text-center text-sm font-light text-surface dark:text-white">
                  <thead className="border-b border-neutral-200 bg-neutral-50 font-medium dark:border-white/10 dark:text-neutral-800">
                    <tr>
                      <th scope="col" className="px-6 py-4">Days</th>
                      <th scope="col" className="px-6 py-4">Start</th>
                      <th scope="col" className="px-6 py-4">Finish</th>
                      <th scope="col" className="px-6 py-4">Breakout</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-neutral-200 dark:border-white/10">
                      <td className="whitespace-nowrap px-6 py-4 font-medium">Monday</td>
                      <td className="whitespace-nowrap px-6 py-4">9:30am</td>
                      <td className="whitespace-nowrap px-6 py-4">10:30am</td>
                      <td className="whitespace-nowrap px-6 py-4">9:30am</td>
                    </tr>
                    <tr className="border-b border-neutral-200 dark:border-white/10">
                      <td className="whitespace-nowrap px-6 py-4 font-medium">Tuesday</td>
                      <td className="whitespace-nowrap px-6 py-4">10:00am</td>
                      <td className="whitespace-nowrap px-6 py-4">5:30pm</td>
                      <td className="whitespace-nowrap px-6 py-4">9:00am</td>
                    </tr>
                    <tr className="border-b border-neutral-200 dark:border-white/10">
                      <td className="whitespace-nowrap px-6 py-4 font-medium">Wednesday</td>
                      <td className="whitespace-nowrap px-6 py-4">10:00am</td>
                      <td className="whitespace-nowrap px-6 py-4">5:30pm</td>
                      <td className="whitespace-nowrap px-6 py-4">9:00am</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shifts;
