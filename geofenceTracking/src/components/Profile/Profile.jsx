import React, { useState, useEffect, useRef } from 'react';
import UploadProfilePic from '../../assets/icons/uploadPic.png';
import UploadIcon from '../../assets/icons/uploadCloud.png';
import '../Profile/Profile.css';
import MenuIcon from '../../assets/icons/Menu.png';
import { Dropdown, TextInput ,Avatar} from "flowbite-react";

const Profile = ({ toggleMenu }) => {
  const [profilePic, setProfilePic] = useState(UploadProfilePic); 
const [timeFormat, setTimeFormat] = useState("options");
const [masterZone, setMasterZone] = useState("options");
const [checkIn, setCheckIn] = useState("options");




  const fileInputRef = useRef(null);

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

  const handleUploadClick = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfilePic(reader.result); // Update profile picture with the uploaded file
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="main font-light">
      <div className="headerOfPage_Profile">
      <div className="topHeader">
  <div
    className="md:hidden cursor-pointer" // Change here to ensure it's visible on smaller screens
  
  >
    <img src={MenuIcon} alt="Menu Icon" className="w-8 h-8" />
  </div>
  <div className="titleOfHeader_Profile">
    <p className="font-custom font-light">Profile</p>
  </div>
  <div className="ProfilePic mr-4 md:mr-0"> {/* Add right margin here */}
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

      <div className="profile-page">
        <div className="creatingProfile">
          <div className="infoInputs">
            <div className="registrationInput">
              <label className='font-custom'>Company name</label>
              <input type="text" />
            </div>

            <div className="registrationInput">
              <label className='font-custom'> Email</label>
              <input type="text" />
            </div>

            <div className="registrationInput">
              <label className='font-custom'>Phone Number</label>
              <input type="text" />
            </div>

            <div className="dropDowns">
              <div className="userChosen">
                <label className='font-custom'>Time format</label>
                <div
                  className="droper relative inline-block text-left dropdown-container font-custom"
                  style={{ border: '1px solid black', borderRadius: '10px' , borderColor:'#00000030'}} // Inline style for border
                >
                  <Dropdown
                    label={
                      <div style={{ display: 'flex', alignItems: 'center' , fontFamily:'Syne' }}>
                        {timeFormat}
                      </div>
                    } 
                    color="white"
                    dismissOnClick={false}
                  >
                    <Dropdown.Item onClick={()=>{setTimeFormat("24  hrs")}}>24 hrs</Dropdown.Item>
                    <Dropdown.Item onClick={()=>{setTimeFormat("12 hrs")}}>12 hrs</Dropdown.Item>
                  </Dropdown>
                </div>
              </div>

              <div className="userChosen">
                <label className='font-custom'>Master Zone</label>
                <div
                  className="droper relative inline-block text-left dropdown-container font-custom"
                  style={{ border: '1px solid black', borderRadius: '10px' , borderColor:'#00000030'}} // Inline style for border
                >
                  <Dropdown
                    label={
                      <div style={{ display: 'flex', alignItems: 'center', fontFamily:'Syne' }}>
                        {masterZone}
                      </div>
                    }
                    color="white"
                    dismissOnClick={false}
                  >
                    <Dropdown.Item onClick={()=>setMasterZone("zoon 1  ")}>zoon 1</Dropdown.Item>
                    <Dropdown.Item onClick={()=>{setMasterZone("zone 2")}}>zone 2</Dropdown.Item>
                  </Dropdown>
                </div>
              </div>

              <div className="userChosen">
                <label className='font-custom'>Check in</label>
                <div
                  className="droper relative inline-block text-left dropdown-container font-custom"
                  style={{ border: '1px solid black', borderRadius: '10px' , borderColor:'#00000030', fontFamily:'Syne'}} // Inline style for border
                >
                  <Dropdown
                    label={
                      <div style={{ display: 'flex', alignItems: 'center' }}>
                        {checkIn}
                      </div>
                    }
                    color="white"
                    dismissOnClick={false}
                  >
                    <Dropdown.Item onClick={()=>{setCheckIn("All Zones ")}}>All zones</Dropdown.Item>
                    <Dropdown.Item onClick={()=>{setCheckIn("One Zone ")}}>One zone</Dropdown.Item>
                  </Dropdown>
                </div>
              </div>
            </div>
          </div>

          <div className="CompanyLogo">
            <div className="profileLogo">
              <img src={profilePic} alt="Profile" />
              <div className="upload-btn bg-[#D9D9D9]" onClick={handleUploadClick}>
                <a href="#" className="item font-custom font-light">
                  <img src={UploadIcon} alt="Upload" />
                  Upload a photo
                </a>
                <input
                  type='file'
                  accept='.png'
                  ref={fileInputRef}
                  style={{ display: 'none' }}
                  onChange={handleFileChange}
                />
              </div>
            </div>

           
          </div>

        
          
        </div>

        <div className="endOfAccount">
              <div className="save-btn_Profile_End bg-[#D9D9D9] ">
                <a href="#" className="item font-custom font-light">
                  Save
                </a>
              </div>
            </div>
        
      </div>
      
    </div>
  );
};

export default Profile;
