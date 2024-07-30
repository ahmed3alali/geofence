import React from "react";
import "../Zones/Zones.css";

import inOutIcon from "../../assets/icons/InBell.png";
import MandatoryIcon from "../../assets/icons/MandatoryBell.png";
import EditIcon from "../../assets/icons/EditIcon.png";
import zoneDescription from "../../assets/icons/zoneDescription.png";
import viewBtnIcon from "../../assets/icons/viewBtn.png";
import deleteBtnIcon from "../../assets/icons/deleteBtn.png";
const Zones = () => {
  return (
    <div className="page">
      <div className="headerOfPage">
        <div className="topHeader">
          <div className="titleOfHeader">
            <p className="font-custom font-light">Zones</p>
          </div>
          <div className="searchBar">
            <div
              className="search-box w-[299px]"
              style={{ backgroundColor: "rgba(217, 217, 217, 0.30)" }}
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
      <div className="SecondaryHeader">
        <div className="options">
          <div className="in-outNotfications">
            <a href="#" className="item font-custom font-light">
              <img src={inOutIcon} alt="In-Out Notifications" />
              In-Out Notifications
            </a>
          </div>

          <div className="MandatoryNotifcations">
            <a href="#" className="item font-custom font-light">
              <img src={MandatoryIcon} alt="Mandatory Notifications" />
              Mandatory Notifications
            </a>
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

      <div className="CardsHeader">
        <div className="Card bg-[#C2D4E4]">
          <div className="cardDescription">
            <a href="#" className="ZoneTitle font-custom font-light">
              <img src={zoneDescription} alt="ViewOption" />
              Zone1
            </a>
          </div>
        </div>

        <div className="zoneOptions">
          <a href="#" className="ZoneCardOptions font-custom font-light">
            <img src={viewBtnIcon} alt="ViewOption" />
            View
          </a>
          <a href="#" className="ZoneCardOptions font-custom font-light">
            <img src={deleteBtnIcon} alt="DeleteOption" />
            Delete
          </a>
        </div>

        <div className="Card  bg-[#C2D4E4]">
          <div className="cardDescription">
            <a href="#" className="ZoneTitle font-custom font-light">
              <img src={zoneDescription} alt="ViewOption" />
              Zone1
            </a>
          </div>
        </div>

        
        <div className="zoneOptions">
          <a href="#" className="ZoneCardOptions font-custom font-light">
            <img src={viewBtnIcon} alt="ViewOption" />
            View
          </a>
          <a href="#" className="ZoneCardOptions font-custom font-light">
            <img src={deleteBtnIcon} alt="DeleteOption" />
            Delete
          </a>
        </div>

        <div className="Card  bg-[#C2D4E4]">
          <div className="cardDescription">
            <a href="#" className="ZoneTitle font-custom font-light">
              <img src={zoneDescription} alt="ViewOption" />
              Zone1
            </a>
          </div>
        </div>

        
        <div className="zoneOptions">
          <a href="#" className="ZoneCardOptions font-custom font-light">
            <img src={viewBtnIcon} alt="ViewOption" />
            View
          </a>
          <a href="#" className="ZoneCardOptions font-custom font-light">
            <img src={deleteBtnIcon} alt="DeleteOption" />
            Delete
          </a>
        </div>

        <div className="Card  bg-[#C2D4E4]">
          <div className="cardDescription">
            <a href="#" className="ZoneTitle font-custom font-light">
              <img src={zoneDescription} alt="ViewOption" />
              Zone1
            </a>
          </div>
        </div>


        <div className="zoneOptions">
          <a href="#" className="ZoneCardOptions font-custom font-light">
            <img src={viewBtnIcon} alt="ViewOption" />
            View
          </a>
          <a href="#" className="ZoneCardOptions font-custom font-light">
            <img src={deleteBtnIcon} alt="DeleteOption" />
            Delete
          </a>
        </div>

      </div>

      

      <div className="CardsHeader">
        <div className="Card  bg-[#C2D4E4]">
          <div className="cardDescription">
            <a href="#" className="ZoneTitle font-custom font-light">
              <img src={zoneDescription} alt="ViewOption" />
              Zone1
            </a>
          </div>
        </div>


        
        <div className="zoneOptions">
          <a href="#" className="ZoneCardOptions font-custom font-light">
            <img src={viewBtnIcon} alt="ViewOption" />
            View
          </a>
          <a href="#" className="ZoneCardOptions font-custom font-light">
            <img src={deleteBtnIcon} alt="DeleteOption" />
            Delete
          </a>
        </div>

        <div className="Card  bg-[#C2D4E4]">
          <div className="cardDescription">
            <a href="#" className="ZoneTitle font-custom font-light">
              <img src={zoneDescription} alt="ViewOption" />
              Zone1
            </a>
          </div>
        </div>


        
        <div className="zoneOptions">
          <a href="#" className="ZoneCardOptions font-custom font-light">
            <img src={viewBtnIcon} alt="ViewOption" />
            View
          </a>
          <a href="#" className="ZoneCardOptions font-custom font-light">
            <img src={deleteBtnIcon} alt="DeleteOption" />
            Delete
          </a>
        </div>

        <div className="Card  bg-[#C2D4E4]">
          <div className="cardDescription">
            <a href="#" className="ZoneTitle font-custom font-light">
              <img src={zoneDescription} alt="ViewOption" />
              Zone1
            </a>
          </div>
        </div>

        
        <div className="zoneOptions">
          <a href="#" className="ZoneCardOptions font-custom font-light">
            <img src={viewBtnIcon} alt="ViewOption" />
            View
          </a>
          <a href="#" className="ZoneCardOptions font-custom font-light">
            <img src={deleteBtnIcon} alt="DeleteOption" />
            Delete
          </a>
        </div>

        <div className="Card  bg-[#C2D4E4]">
          <div className="cardDescription">
            <a href="#" className="ZoneTitle font-custom font-light">
              <img src={zoneDescription} alt="ViewOption" />
              Zone1
            </a>
          </div>
        </div>

        
        <div className="zoneOptions">
          <a href="#" className="ZoneCardOptions font-custom font-light">
            <img src={viewBtnIcon} alt="ViewOption" />
            View
          </a>
          <a href="#" className="ZoneCardOptions font-custom font-light">
            <img src={deleteBtnIcon} alt="DeleteOption" />
            Delete
          </a>
        </div>
      </div>
    </div>
  );
};

export default Zones;
