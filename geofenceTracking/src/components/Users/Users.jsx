import React, { useState } from 'react';
import '../Users/Users.css';

const Users = () => {
  const [showTable, setShowTable] = useState(false);

  const handleAddClick = () => {
    setShowTable(!showTable);
  };

  return (
    <div className="page font-custom relative">
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
          
          <div className="ProfilePic">
            <div className="profilePicCircle"></div>
          </div>
        </div>
      </div>

      <div className={`UsersCreation transition-opacity duration-700 ${showTable ? 'opacity-0 h-0' : 'opacity-100 h-auto'}`}>
        <div className="firstClmn">
          <div className="registrationInput_Users">
            <label>First Name</label>
            <input type="text" />
          </div>
          <div className="registrationInput_Users">
            <label>Email</label>
            <input type="text" />
          </div>
          <div className="registrationInput_Users">
            <label>Password</label>
            <input type="text" />
          </div>
        </div>

        <div className="secondClmn">
          <div className="registrationInput_Users">
            <label>Last Name</label>
            <input type="text" />
          </div>
          <div className="registrationInput_Users">
            <label>Phone Number</label>
            <input type="text" />
          </div>
          <div className="registrationInput_Users">
            <label>Confirm Password</label>
            <input type="text" />
          </div>
        </div>
      </div>

      <div className="save-btn_Users bg-[#C2D4E4] fixed bottom-4 right-4 z-10">
        <a href="#" className="item font-custom font-light" onClick={handleAddClick}>
          <p className='text-[15px]'>add</p>
        </a>
      </div>

      <div className={`tables transition-opacity duration-700 ${showTable ? 'opacity-100 h-auto' : 'opacity-0 h-0'}`}>
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
              <input type="text" placeholder="Search" className="border rounded-[45px] p-2 pr-8" />
              <span className="absolute right-2 top-2 text-gray-400">
                <i className="fas fa-search"></i>
              </span>
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
        <script src="https://kit.fontawesome.com/a076d05399.js" crossorigin="anonymous"></script>
      </div>
    </div>
  );
};

export default Users;
