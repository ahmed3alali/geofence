import React from 'react'
import '../Users/Users.css'
const Users = () => {
  return (
    
<div className="page">
      <div className="headerOfPage">
        <div className="topHeader">
          <div className="titleOfHeader">
            <p className="font-custom font-light">Users</p>
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



      <div className="UsersCreation">


<div className="firstClmn">

<div className="registrationInput">
            <label>First Name</label>
            
            <input type="text" />
          </div>

          <div className="registrationInput">
            <label>Email</label>
            <input type="text" />
          </div>

          <div className="registrationInput">
            <label>Password</label>
            <input type="text" />
          </div>

    
</div>


<div className="secondClmn">


<div className="registrationInput">
            <label>Last Name </label>
            
            <input type="text" />
          </div>

          <div className="registrationInput">
            <label>Phone Number</label>
            <input type="text" />
          </div>

          <div className="registrationInput">
            <label>Confirm Password </label>
            <input type="text" />
          </div>



</div>

      



        
      </div>



    </div>
  )
}

export default Users