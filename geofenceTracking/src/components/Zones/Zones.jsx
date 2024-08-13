import React, { useState, useRef, useEffect } from "react";
import "../Zones/Zones.css";
import { Button, Dropdown, Modal, Avatar } from "flowbite-react";
import { HiOutlineExclamationCircle } from "react-icons/hi";

import inOutIcon from "../../assets/icons/InBell.png";
import MandatoryIcon from "../../assets/icons/MandatoryBell.png";
import EditIcon from "../../assets/icons/EditIcon.png";
import zoneDescription from "../../assets/icons/zoneDescription.png";
import viewBtnIcon from "../../assets/icons/viewBtn.png";
import deleteBtnIcon from "../../assets/icons/deleteBtn.png";
import MenuIcon from '../../assets/icons/Menu.png';

const initialZones = [
  { id: 1, zoneTitle: 'Zone 1' },
  { id: 2, zoneTitle: 'Zone 2' },
  { id: 3, zoneTitle: 'Zone 3' },
  { id: 4, zoneTitle: 'Zone 4' },
  { id: 5, zoneTitle: 'Zone 5' },
  { id: 6, zoneTitle: 'Zone 6' },
];

const Zones = () => {
  const [zones, setZones] = useState(initialZones);
  const [isInOutOpen, setIsInOutOpen] = useState(false);
  const [openWarning, setOpenWarning] = useState(false);
  const [selectedZoneId, setSelectedZoneId] = useState(null);
  const dropdownRef = useRef(null);
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const openInOut = () => {
    setIsInOutOpen(true);
  };

  const closeInOut = () => {
    setIsInOutOpen(false);
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      closeInOut();
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleDelete = (zoneId) => {
    setZones(zones.filter(zone => zone.id !== zoneId));
    setOpenWarning(false);
    setSelectedZoneId(null);
  };

  const confirmDelete = (zoneId) => {
    setSelectedZoneId(zoneId);
    setOpenWarning(true);
  };

  return (
    <div className="theMain">
      <div className="page_zones_Mnt">
        <div className="headerOfPage_Profile">
          <div className="topHeader">
            <div
              className="md:hidden cursor-pointer" 
              onClick={toggleMenu}
            >
              <img src={MenuIcon} alt="Menu Icon" className="w-8 h-8" />
            </div>
            <div className="titleOfHeader_Profile">
              <p className="font-custom font-light">Zones</p>
            </div>
            <div className="ProfilePic mr-4 md:mr-0"> 
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

        <div className="SecondaryHeader mt-28">
          <div className="options">
            <div className="in-outNotfications" onClick={openInOut}>
              <Dropdown
                label={
                  <div style={{ display: 'flex', alignItems: 'center' }}>
                    <img src={inOutIcon} alt="InOut Icon" style={{ width: '15px', height: '15px', marginRight: '8px' }} />
                    <span>In Out <span className="notificationText">Notifications</span></span>
                  </div>
                }
                color="white"
                dismissOnClick={false}
              >
                <Dropdown.Item>-Mr.Jalal sent you a message</Dropdown.Item>
                <Dropdown.Item>-You have a new zone assigned</Dropdown.Item>
                <Dropdown.Item>-This is a test notification</Dropdown.Item>
                <Dropdown.Item>-This is another notification</Dropdown.Item>
              </Dropdown>

            </div>

            <div className="MandatoryNotifcations">
              <Dropdown
                label={
                  <div style={{ display: 'flex', alignItems: 'center' }}>
                    <img src={MandatoryIcon} alt="Mandatory Icon" style={{ width: '15px', height: '15px', marginRight: '8px' }} />
                    <span>Mandatory <span className="notificationText">Notifications</span></span>
                  </div>
                }
                color="white"
                dismissOnClick={false}
              >
                <Dropdown.Item>-This is a test notification</Dropdown.Item>
                <Dropdown.Item>-Mandatory notification 1</Dropdown.Item>
                <Dropdown.Item>-Mandatory 2</Dropdown.Item>
                <Dropdown.Item>-This is another notification</Dropdown.Item>
              </Dropdown>
            </div>
            <div className="EditIcon">
              <a href="#" className="item font-custom font-light">
                <img src={EditIcon} alt="Edit" />
                Edit
              </a>
            </div>
          </div>
        </div>

        <div className="map">
          <div className="gMap">
            <div className="mapContainer" style={{ width: "100%" }}>
              <iframe
                className="mapIframe"
                width="764.34"
                height="287.59"
                src="https://maps.google.com/maps?width=764.34&amp;height=287.59&amp;hl=en&amp;q=1%20Grafton%20Street,%20Dublin,%20Ireland+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
              >
                <a href="https://www.gps.ie/">gps systems</a>
              </iframe>
            </div>
          </div>
        </div>


        <div className="zonesCards">
          {zones.map(zone => (
            <div className="CardsHeader_Zones" key={zone.id}>
              <div className="Card bg-[#C2D4E4]">
                <div className="cardDescription">
                  <a href="#" className="ZoneTitle font-custom font-light">
                    <img src={zoneDescription} alt="Zone Description" />
                    {zone.zoneTitle}
                  </a>
                </div>
              </div>

              <div className="zoneOptions">
                <a href="#" className="ZoneCardOptions font-custom font-light">
                  <img src={viewBtnIcon} alt="View Option" />
                  View
                </a>
                <a
                  href="#"
                  className="ZoneCardOptions font-custom font-light"
                  onClick={() => confirmDelete(zone.id)}
                >
                  <img src={deleteBtnIcon} alt="Delete Option" />
                  Delete
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Modal show={openWarning} size="md" onClose={() => setOpenWarning(false)} popup>
        <Modal.Header />
        <Modal.Body>
          <div className="text-center">
            <HiOutlineExclamationCircle className="mx-auto mb-4 h-14 w-14 text-gray-400 dark:text-gray-200" />
            <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
              Are you sure you want to delete this zone?
            </h3>
            <div className="flex justify-center gap-4">
              <Button color="failure" onClick={() => handleDelete(selectedZoneId)}>
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

export default Zones;
