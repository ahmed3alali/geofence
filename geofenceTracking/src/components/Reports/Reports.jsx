import React, { useState, useEffect } from 'react';
import '../../components/Reports/Reports.css';

import { Datepicker, Label, Select } from "flowbite-react";


const Reports = () => {
  const [openDropdown, setOpenDropdown] = useState(null);
  const [reportGenerated, setReportGenerated] = useState(false); 

  const toggleDropdown = (dropdownId) => {
    setOpenDropdown(openDropdown === dropdownId ? null : dropdownId);
  };

  const handleClickOutside = (event) => {
    if (!event.target.closest('.dropdown-container')) {
      setOpenDropdown(null);
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  const handleGenerateReport = () => {
    setReportGenerated(true); 
  };

  const handleBack = () => {
    setReportGenerated(false); 
  };

  return (
    <div className="page_Reports">
      <div className="headerOfPage">
        <div className="topHeader">
          <div className="titleOfHeader">
            {reportGenerated ? (
              <button onClick={handleBack} className="back-button">Back</button>
            ) : (
              <p className="font-custom font-light">Reports</p>
            )}
          </div>
          <div className="ProfilePic">
            <div className="profilePicCircle"></div>
          </div>
        </div>
      </div>

      {reportGenerated ? (
        <div className="tables">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-center justify-between mb-4">
              <div>
                <label htmlFor="entries" className="mr-2">Show</label>
                <select id="entries" className="border rounded p-2">
                  <option>10</option>
                  <option>25</option>
                  <option>50</option>
                </select>
                <span className="ml-2">entries</span>
              </div>
              <div className="relative">
                <input type="text" placeholder="Search" className="border rounded-[45px] rounded p-2 pr-8"/>
                <span className="absolute right-2 top-2 text-gray-400"><i className="fas fa-search"></i></span>
              </div>
            </div>

            <div className="flex flex-col">
              <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
                  <div className="overflow-hidden">
                    <table className="min-w-full text-left text-sm font-light text-surface dark:text-white">
                      <thead className="border-b border-neutral-200 bg-white font-medium dark:border-white/10 dark:bg-body-dark">
                        <tr>
                          <th scope="col" className="px-6 py-4">No</th>
                          <th scope="col" className="px-6 py-4">Department Name</th>
                          <th scope="col" className="px-6 py-4">Department Color</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="border-b border-neutral-200 bg-black/[0.02] dark:border-white/10">
                          <td className="whitespace-nowrap px-6 py-4 font-medium">1</td>
                          <td className="whitespace-nowrap px-6 py-4">Mark</td>
                          <td className="whitespace-nowrap px-6 py-4">Otto</td>
                        </tr>
                        <tr className="border-b border-neutral-200 bg-white dark:border-white/10 dark:bg-body-dark">
                          <td className="whitespace-nowrap px-6 py-4 font-medium">2</td>
                          <td className="whitespace-nowrap px-6 py-4">Jacob</td>
                          <td className="whitespace-nowrap px-6 py-4">Thornton</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-between mt-4">
              <div>Showing 1 to 10 of 13 entries</div>
              <div>
                <button className="border rounded px-4 py-2 mr-2">&lt;</button>
                <button className="border rounded px-4 py-2">&gt;</button>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="secondaryHeaderOfPage  ">
          <div className="firstCol">
          <div className="r_dropdown max-w-md flex items-center mb-4">
  <div className="dropLabel mr-4">
    <Label htmlFor="countries" value="Report" />
  </div>
  <Select id="countries" className='selctionBox w-[300px]' required>
    <option>All Reports</option>
    <option>Report 1</option>
    <option>Report 2</option>
    <option>Report 3</option>
  </Select>
</div>

<div className="r_dropdown max-w-md flex items-center mb-4">
  <div className="dropLabel mr-4">
    <Label htmlFor="countries" value="Report" />
  </div>
  <Select id="countries" className='selctionBox w-[300px]' required>
    <option>All Reports</option>
    <option>Report 1</option>
    <option>Report 2</option>
    <option>Report 3</option>
  </Select>
</div>

<div className="r_dropdown max-w-md flex items-center mb-4">
  <div className="dropLabel mr-4">
    <Label htmlFor="countries" value="Report" />
  </div>
  <Select id="countries" className='selctionBox w-[300px]' required>
    <option>All Reports</option>
    <option>Report 1</option>
    <option>Report 2</option>
    <option>Report 3</option>
  </Select>
</div>
<div className="r_dropdown max-w-md flex items-center mb-4">
  <div className="dropLabel mr-4">
    <Label htmlFor="countries" value="Report" />
  </div>
  <Select id="countries" className='selctionBox w-[300px]' required>
    <option>All Reports</option>
    <option>Report 1</option>
    <option>Report 2</option>
    <option>Report 3</option>
  </Select>
</div>

          </div>

          <div className="secondCol">
          <div className="r_dropdown max-w-md flex items-center mb-4">
  <div className="dropLabel mr-4">
    <Label htmlFor="countries" value="Report" />
  </div>
  <Select id="countries" className='selctionBox w-[300px]' required>
    <option>All Reports</option>
    <option>Report 1</option>
    <option>Report 2</option>
    <option>Report 3</option>
  </Select>
</div>

<div className="r_dropdown max-w-md flex items-center mb-4">
  <div className="dropLabel mr-4">
    <Label htmlFor="countries" value="Report" />
  </div>
  <Select id="countries" className='selctionBox w-[300px]' required>
    <option>All Reports</option>
    <option>Report 1</option>
    <option>Report 2</option>
    <option>Report 3</option>
  </Select>
</div>

<div className="r_dropdown max-w-md flex items-center mb-4">
  <div className="dropLabel mr-4">
    <Label htmlFor="countries" value="Report" />
  </div>
  <Select id="countries" className='selctionBox w-[300px]' required>
    <option>All Reports</option>
    <option>Report 1</option>
    <option>Report 2</option>
    <option>Report 3</option>
  </Select>
</div>


            <div className="save-btn_Reports mt-8 bg-[#C2D4E4]">
              <a href="#" onClick={handleGenerateReport} className="item font-custom font-light">
                <p className='flex flex-col justify-center mt-3'>Generate Report</p>
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

const Dropdown = ({ id, title, subject, openDropdown, toggleDropdown }) => (
  <div className="userChosen_Reports">
    <label className='font-titleFont'>{subject}</label>
    <div className="relative inline-block text-left dropdown-container">
      <button
        type="button"
        className="inline-flex w-[404px] h-[66px] items-center justify-between gap-x-2 rounded-[15px] border-[2px] border-grey bg-white px-4 py-2 text-sm text-gray-900 ring-inset ring-gray-300 hover:bg-gray-50 font-custom"
        id="menu-button"
        aria-expanded={openDropdown === id}
        aria-haspopup="true"
        onClick={() => toggleDropdown(id)}
      >
        {title}
        <svg
          className="h-5 w-5 text-gray-400"
          viewBox="0 0 20 20"
          fill="currentColor"
          aria-hidden="true"
        >
          <path
            fillRule="evenodd"
            d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
            clipRule="evenodd"
          />
        </svg>
      </button>

      <div
        className={`${
          openDropdown === id ? 'block' : 'hidden'
        } absolute right-0 z-10 mt-2 w-[404px] origin-top-right rounded-[15px] border-[2px] border-black bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none`}
        role="menu"
        aria-orientation="vertical"
        aria-labelledby="menu-button"
        tabIndex="-1"
      >
        <div className="py-1" role="none">
          <a
            href="#"
            className="block px-4 py-2 text-sm text-gray-700 font-bold hover:bg-gray-100"
            role="menuitem"
            tabIndex="-1"
            id="menu-item-0"
          >
            24 hrs
          </a>
          <a
            href="#"
            className="block px-4 py-2 text-sm text-gray-700 font-bold hover:bg-gray-100"
            role="menuitem"
            tabIndex="-1"
            id="menu-item-1"
          >
            12 hrs
          </a>
          <form method="POST" action="#" role="none"></form>
        </div>
      </div>
    </div>
  </div>
);

export default Reports;
