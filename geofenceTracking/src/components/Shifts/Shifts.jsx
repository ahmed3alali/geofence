import React from 'react'
import '../Shifts/Shifts.css'

import zoneDescription from "../../assets/icons/zoneDescription.png";
import viewBtnIcon from "../../assets/icons/viewBtn.png";
import deleteBtnIcon from "../../assets/icons/deleteBtn.png";
const Shifts = () => {
  return (
    

<div className='page'>

<div className="headerOfPage">
        <div className="topHeader">
          <div className="titleOfHeader">
            <p className="font-custom font-light">Shifts</p>
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


<div className="contentOfPage_Shifts">


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




</div>

<div className="ZonesTable">

<div className="zoneTitle">

<h1>Zone1's Table</h1>

</div>

<div class="flex flex-col">
  <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
    <div class="inline-block min-w-full py-2 sm:px-6 lg:px-8">
      <div class="overflow-hidden">
        <table
          class="min-w-full text-center text-sm font-light text-surface dark:text-white">
          <thead
            class="border-b border-neutral-200 bg-neutral-50 font-medium dark:border-white/10 dark:text-neutral-800">
            <tr>
              <th scope="col" class=" px-6 py-4">#</th>
              <th scope="col" class=" px-6 py-4">First</th>
              <th scope="col" class=" px-6 py-4">Last</th>
              <th scope="col" class=" px-6 py-4">Handle</th>
            </tr>
          </thead>
          <tbody>
            <tr class="border-b border-neutral-200 dark:border-white/10">
              <td class="whitespace-nowrap  px-6 py-4 font-medium">1</td>
              <td class="whitespace-nowrap  px-6 py-4">Mark</td>
              <td class="whitespace-nowrap  px-6 py-4">Otto</td>
              <td class="whitespace-nowrap  px-6 py-4">@mdo</td>
            </tr>
            <tr class="border-b border-neutral-200 dark:border-white/10">
              <td class="whitespace-nowrap  px-6 py-4 font-medium">2</td>
              <td class="whitespace-nowrap  px-6 py-4 ">Jacob</td>
              <td class="whitespace-nowrap  px-6 py-4">Thornton</td>
              <td class="whitespace-nowrap  px-6 py-4">@fat</td>
            </tr>
            <tr class="border-b border-neutral-200 dark:border-white/10">
              <td class="whitespace-nowrap  px-6 py-4 font-medium">3</td>
              <td colspan="2" class="whitespace-nowrap  px-6 py-4">
                Larry the Bird
              </td>
              <td class="whitespace-nowrap  px-6 py-4">@twitter</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</div>





</div>







    </div>
  )
}

export default Shifts