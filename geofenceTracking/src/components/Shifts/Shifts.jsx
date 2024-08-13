import React, { useState, useRef } from 'react';
import '../Shifts/Shifts.css';

import zoneDescription from "../../assets/icons/zoneDescription.png";
import viewBtnIcon from "../../assets/icons/viewBtn.png";
import deleteBtnIcon from "../../assets/icons/deleteBtn.png";
import { Button, Modal } from 'flowbite-react';
import { HiOutlineExclamationCircle } from "react-icons/hi";

const initialShifts = [
  { id: 1, name: 'Shift 1' },
  { id: 2, name: 'Shift 2' },
  { id: 3, name: 'Shift 3' },
  { id: 4, name: 'Shift 4' },
  { id: 5, name: 'Shift 5' },
  { id: 6, name: 'Shift 6' },
  { id: 7, name: 'Shift 7' },
  { id: 8, name: 'Shift 8' },
];

const Shifts = () => {
  const [shifts, setShifts] = useState(initialShifts);
  const [shiftName, setShiftName] = useState('Select a Shift');
  const [selectedShiftId, setSelectedShiftId] = useState(null);
  const [openWarning, setOpenWarning] = useState(false);
  const [showTable, setShowTable] = useState(false);

  const tableRef = useRef(null);

  const handleViewClick = (shiftName) => {
    setShiftName(shiftName);
    setShowTable(true);
    setTimeout(() => {
      tableRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, 0);
  };

  const handleDelete = (shiftId) => {
    setShifts(shifts.filter(shift => shift.id !== shiftId));
    setOpenWarning(false);
    setSelectedShiftId(null);
  };

  const confirmDelete = (shiftId) => {
    setSelectedShiftId(shiftId);
    setOpenWarning(true);
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
          <div key={shift.id} className="CardsHeader_Shifts">
            <div className="Card_Shifts bg-[#C2D4E4]">
              <div className="cardDescription_Shifts">
                <a href="#" className="ZoneTitle font-custom font-light">
                  <img src={zoneDescription} alt="ViewOption" />
                  {shift.name}
                </a>
              </div>
            </div>
            <div className="zoneOptions_Shifts">
              <a href="#" className="ZoneCardOptions font-custom font-light" onClick={() => handleViewClick(shift.name)}>
                <img src={viewBtnIcon} alt="ViewOption" />
                View
              </a>
              <a href="#" className="ZoneCardOptions font-custom font-light" onClick={() => confirmDelete(shift.id)}>
                <img src={deleteBtnIcon} alt="DeleteOption" />
                Delete
              </a>
            </div>
          </div>
        ))}
      </div>

      <div ref={tableRef} className={`ZonesTable_Shifts ${showTable ? 'slide-down' : 'slide-up'}`}>
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

      <Modal show={openWarning} size="md" onClose={() => setOpenWarning(false)} popup>
        <Modal.Header />
        <Modal.Body>
          <div className="text-center">
            <HiOutlineExclamationCircle className="mx-auto mb-4 h-14 w-14 text-gray-400 dark:text-gray-200" />
            <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
              Are you sure you want to delete this shift?
            </h3>
            <div className="flex justify-center gap-4">
              <Button color="failure" onClick={() => handleDelete(selectedShiftId)}>
                {"Yes, I'm sure"}
              </Button>
              <Button color="gray" onClick={() => setOpenWarning(false)}>
                No, cancel
              </Button>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default Shifts;
