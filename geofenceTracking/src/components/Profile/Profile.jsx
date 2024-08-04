import React, { useState, useEffect, useRef } from 'react';
import UploadProfilePic from '../../assets/icons/uploadPic.png';
import UploadIcon from '../../assets/icons/uploadCloud.png';
import '../Profile/Profile.css';

const Profile = () => {
  const [isTimeFormatOpen, setIsTimeFormatOpen] = useState(false);
  const [isMasterZoneOpen, setIsMasterZoneOpen] = useState(false);
  const [isCheckInOpen, setIsCheckInOpen] = useState(false);



  const toggleDropdown = (dropDown) => {
    switch (dropDown) {
      case 'timeFormat':

        setIsTimeFormatOpen(!isTimeFormatOpen);

        break;

      case 'masterZone':

        setIsMasterZoneOpen(!isMasterZoneOpen);
        break;

      case 'checkIn':
        setIsCheckInOpen(!isCheckInOpen);
        break;

      default:
        break;
    }



  }



  const handleClickOutside = (event) => {
    if (!event.target.closest('.dropdown-container')) {
      setIsTimeFormatOpen(false);
      setIsMasterZoneOpen(false);
      setIsCheckInOpen(false);
    }
  };


  useEffect(() => {
    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  const fileInputRef = useRef(null);
  const handleUploadClick = () => {

    fileInputRef.current.click();


  }




  return (

    <div className="main font-light">
      <div className="headerOfPage_Profile">
        <div className="topHeader">
          <div className="titleOfHeader_Profile">
            <p className="font-custom font-light ">Profile</p>
          </div>


          <div className="ProfilePic">
            <div className="profilePicCircle"></div>
          </div>
        </div>

      </div>



      <div className="profile-page">


        <div className="creatingProfile">
          <div className="infoInputs">
            <div className="registrationInput">
              <label className='font-custom'>Company name</label>

              <input type="text" />
            </div>

            <div className="registrationInput">
              <label className='font-custom'>Email</label>
              <input type="text" />
            </div>

            <div className="registrationInput">
              <label className='font-custom' >Phone Number</label>
              <input type="text" />
            </div>

            <div className="dropDowns">
              <div className="userChosen">
                <label className='font-custom'>Time format</label>
                <div className="droper relative inline-block text-left dropdown-container ">
                  <div>
                    <button
                      type="button"
                      className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-light text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 font-custom"
                      id="menu-button"
                      aria-expanded={isTimeFormatOpen}
                      aria-haspopup="true"
                      onClick={setIsTimeFormatOpen}
                    >
                      Options
                      <svg
                        className="-mr-1 h-5 w-5 text-gray-400 font-custom"
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
                  </div>

                  <div
                    className={`${isTimeFormatOpen ? 'block' : 'hidden'
                      } absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none font-custom`}
                    role="menu"
                    aria-orientation="vertical"
                    aria-labelledby="menu-button"
                    tabIndex="-1"
                  >
                    <div className="time_format py-1" role="none">
                      <a
                        href="#"
                        className="block px-4 py-2 text-sm text-gray-700 font-custom"
                        role="menuitem"
                        tabIndex="-1"
                        id="menu-item-0"
                      >
                        24 hrs
                      </a>
                      <a
                        href="#"
                        className="block px-4 py-2 text-sm text-gray-700 font-custom"
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
                <label className='font-custom'>Master Zone</label>
                <div className="droper relative inline-block text-left dropdown-container font-custom">
                  <div>
                    <button
                      type="button"
                      className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-light text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 font-custom"
                      id="menu-button"
                      aria-expanded={isMasterZoneOpen}
                      aria-haspopup="true"
                      onClick={setIsMasterZoneOpen}
                    >
                      Options
                      <svg
                        className="-mr-1 h-5 w-5 text-gray-400 font-custom"
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
                  </div>

                  <div
                    className={`${isMasterZoneOpen ? 'block' : 'hidden'
                      } absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none font-custom`}
                    role="menu"
                    aria-orientation="vertical"
                    aria-labelledby="menu-button"
                    tabIndex="-1"
                  >
                    <div className="py-1" role="none">
                      <a
                        href="#"
                        className="block px-4 py-2 text-sm text-gray-700"
                        role="menuitem"
                        tabIndex="-1"
                        id="menu-item-0"
                      >
                        Zone 1
                      </a>
                      <a
                        href="#"
                        className="block px-4 py-2 text-sm text-gray-700 font-custom"
                        role="menuitem"
                        tabIndex="-1"
                        id="menu-item-1"
                      >
                        Zone 2
                      </a>

                      <form method="POST" action="#" role="none"></form>
                    </div>
                  </div>
                </div>
              </div>

              <div className="userChosen">
                <label className='font-custom'>Check in</label>
                <div className="droper relative inline-block text-left dropdown-container font-custom">
                  <div>
                    <button
                      type="button"
                      className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-light text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 font-custom"
                      id="menu-button"
                      aria-expanded={isCheckInOpen}
                      aria-haspopup="true"
                      onClick={setIsCheckInOpen}
                    >
                      Options
                      <svg
                        className="-mr-1 h-5 w-5 text-gray-400 font-custom"
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
                  </div>

                  <div
                    className={`${isCheckInOpen ? 'block' : 'hidden'
                      } absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none font-custom`}
                    role="menu"
                    aria-orientation="vertical"
                    aria-labelledby="menu-button"
                    tabIndex="-1"
                  >
                    <div className="py-1" role="none">
                      <a
                        href="#"
                        className="block px-4 py-2 text-sm text-gray-700 font-custom"
                        role="menuitem"
                        tabIndex="-1"
                        id="menu-item-0"
                      >
                        Anywhere
                      </a>
                      <a
                        href="#"
                        className="block px-4 py-2 text-sm text-gray-700 font-custom"
                        role="menuitem"
                        tabIndex="-1"
                        id="menu-item-1"
                      >
                        All asigned zones 
                      </a>

                      <form method="POST" action="#" role="none"></form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="CompanyLogo">
            <div className="profileLogo">
              <img src={UploadProfilePic} alt="Profile" />
            </div>

            <div className="upload-btn bg-[#D9D9D9]" onClick={handleUploadClick}>
              <a href="#" className="item font-custom font-light">
                <img src={UploadIcon} alt="Dashboard" />
                Upload a photo
              </a>


              <input type='file' accept='.png' ref={fileInputRef} style={{ display: 'none' }} onChange={(e) => {

                console.log(e.target.files[0]);



              }}
              ></input>


            </div>



            <div className="endOfAccount">

              <div className="save-btn_Profile bg-[#D9D9D9]">
                <a href="#" className="item font-custom font-light">
                  Save
                </a>
              </div>

            </div>

          </div>
        </div>
      </div>


    </div>
  );
};

export default Profile;
