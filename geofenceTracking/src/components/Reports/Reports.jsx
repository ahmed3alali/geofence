import React, { useState, useEffect } from 'react';
import '../../components/Reports/Reports.css';

const Reports = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleClickOutside = (event) => {
    if (!event.target.closest('.dropdown-container') && !event.target.closest('#menu-button')) {
      setIsDropdownOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  return (
    <div className="page">
      <div className="headerOfPage">
        <div className="topHeader">
          <div className="titleOfHeader">
            <p className="font-custom font-light">Reports</p>
          </div>
          <div className="searchBar">
            <div
              className="search-box w-[299px]"
              style={{ backgroundColor: 'rgba(217, 217, 217, 0.30)' }}
            >
              <input type="text" placeholder="Search" />
            </div>
          </div>
          <div className="ZonesColor">
            <label>Zone's Color</label>
            <div className="theColorSelection"></div>
          </div>
          <div className="ProfilePic">
            <div className="profilePicCircle"></div>
          </div>
        </div>
      </div>

      <div className="secondaryHeaderOfPage">
        <div className="firstCol">
          <div className="userChosen">
            
            <div className="relative inline-block text-left dropdown-container">
              <button
                type="button"
                className="inline-flex w-[404px] h-[66px] items-center justify-between gap-x-2 rounded-[15px] border-[2px] border-black bg-white px-4 py-2 text-sm font-bold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                id="menu-button"
                aria-expanded={isDropdownOpen}
                aria-haspopup="true"
                onClick={toggleDropdown}
              >
                Options
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
                  isDropdownOpen ? 'block' : 'hidden'
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


          <div className="userChosen">
            
            <div className="relative inline-block text-left dropdown-container">
              <button
                type="button"
                className="inline-flex w-[404px] h-[66px] items-center justify-between gap-x-2 rounded-[15px] border-[2px] border-black bg-white px-4 py-2 text-sm font-bold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                id="menu-button"
                aria-expanded={isDropdownOpen}
                aria-haspopup="true"
                onClick={toggleDropdown}
              >
                Options
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
                  isDropdownOpen ? 'block' : 'hidden'
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
          <div className="userChosen">
            
            <div className="relative inline-block text-left dropdown-container">
              <button
                type="button"
                className="inline-flex w-[404px] h-[66px] items-center justify-between gap-x-2 rounded-[15px] border-[2px] border-black bg-white px-4 py-2 text-sm font-bold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                id="menu-button"
                aria-expanded={isDropdownOpen}
                aria-haspopup="true"
                onClick={toggleDropdown}
              >
                Options
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
                  isDropdownOpen ? 'block' : 'hidden'
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

          <div className="userChosen">
            
            <div className="relative inline-block text-left dropdown-container">
              <button
                type="button"
                className="inline-flex w-[404px] h-[66px] items-center justify-between gap-x-2 rounded-[15px] border-[2px] border-black bg-white px-4 py-2 text-sm font-bold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                id="menu-button"
                aria-expanded={isDropdownOpen}
                aria-haspopup="true"
                onClick={toggleDropdown}
              >
                Options
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
                  isDropdownOpen ? 'block' : 'hidden'
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

        </div>


        

        <div className="secondCol">
          

        <div className="userChosen">
            
            <div className="relative inline-block text-left dropdown-container">
              <button
                type="button"
                className="inline-flex w-[404px] h-[66px] items-center justify-between gap-x-2 rounded-[15px] border-[2px] border-black bg-white px-4 py-2 text-sm font-bold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                id="menu-button"
                aria-expanded={isDropdownOpen}
                aria-haspopup="true"
                onClick={toggleDropdown}
              >
                Options
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
                  isDropdownOpen ? 'block' : 'hidden'
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
          <div className="userChosen">
            
            <div className="relative inline-block text-left dropdown-container">
              <button
                type="button"
                className="inline-flex w-[404px] h-[66px] items-center justify-between gap-x-2 rounded-[15px] border-[2px] border-black bg-white px-4 py-2 text-sm font-bold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                id="menu-button"
                aria-expanded={isDropdownOpen}
                aria-haspopup="true"
                onClick={toggleDropdown}
              >
                Options
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
                  isDropdownOpen ? 'block' : 'hidden'
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
          <div className="userChosen">
            
            <div className="relative inline-block text-left dropdown-container">
              <button
                type="button"
                className="inline-flex w-[404px] h-[66px] items-center justify-between gap-x-2 rounded-[15px] border-[2px] border-black bg-white px-4 py-2 text-sm font-bold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                id="menu-button"
                aria-expanded={isDropdownOpen}
                aria-haspopup="true"
                onClick={toggleDropdown}
              >
                Options
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
                  isDropdownOpen ? 'block' : 'hidden'
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


        </div>
      </div>
    </div>
  );
};

export default Reports;
