import React from 'react'

const Employees = () => {
  return (
    <div className='page'>

    <div className="headerOfPage">
            <div className="topHeader">
              <div className="titleOfHeader">
                <p className="font-custom font-light">Employees</p>
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
    
    
    <div className="contentOfPage">
    
    
    <div className="save-btn">
                <a href="#" className="item font-custom font-light">
                  
                </a>
              </div>

              <div className="save-btn">
                <a href="#" className="item font-custom font-light">
                  
                </a>
              </div>
    
              <div className="save-btn">
                <a href="#" className="item font-custom font-light">
                  
                </a>
              </div>
    
    
    
    </div>
    
    
    
    <div className="tables">
    
    
    <div class="max-w-7xl mx-auto">
        <div class="flex items-center justify-between mb-4">
          <div>
            <label for="entries" class="mr-2">Show</label>
            <select id="entries" class="border rounded p-2">
              <option>10</option>
              <option>25</option>
              <option>50</option>
            </select>
            <span class="ml-2">entries</span>
          </div>
          <div class="relative">
            <input type="text" placeholder="Search" class="border rounded-[45px] rounded p-2 pr-8"/>
            <span class="absolute right-2 top-2 text-gray-400"><i class="fas fa-search"></i></span>
          </div>
        </div>
        
        <div class="flex flex-col">
      <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div class="inline-block min-w-full py-2 sm:px-6 lg:px-8">
          <div class="overflow-hidden">
            <table
              class="min-w-full text-left text-sm font-light text-surface dark:text-white">
              <thead
                class="border-b border-neutral-200 bg-white font-medium dark:border-white/10 dark:bg-body-dark">
                <tr>
                  <th scope="col" class="px-6 py-4">#</th>
                  <th scope="col" class="px-6 py-4">First</th>
                  <th scope="col" class="px-6 py-4">Last</th>
                  <th scope="col" class="px-6 py-4">Handle</th>
                </tr>
              </thead>
              <tbody>
                <tr
                  class="border-b border-neutral-200 bg-black/[0.02] dark:border-white/10">
                  <td class="whitespace-nowrap px-6 py-4 font-medium">1</td>
                  <td class="whitespace-nowrap px-6 py-4">Mark</td>
                  <td class="whitespace-nowrap px-6 py-4">Otto</td>
                  <td class="whitespace-nowrap px-6 py-4">@mdo</td>
                </tr>
                <tr
                  class="border-b border-neutral-200 bg-white dark:border-white/10 dark:bg-body-dark">
                  <td class="whitespace-nowrap px-6 py-4 font-medium">2</td>
                  <td class="whitespace-nowrap px-6 py-4">Jacob</td>
                  <td class="whitespace-nowrap px-6 py-4">Thornton</td>
                  <td class="whitespace-nowrap px-6 py-4">@fat</td>
                </tr>
                <tr
                  class="border-b border-neutral-200 bg-black/[0.02] dark:border-white/10">
                  <td class="whitespace-nowrap px-6 py-4 font-medium">3</td>
                  <td
                    colspan="2"
                    class="whitespace-nowrap px-6 py-4 text-center">
                    Larry the Bird
                  </td>
                  <td class="whitespace-nowrap px-6 py-4">@twitter</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
    
    
    
        <div class="flex items-center justify-between mt-4">
          <div>Showing 1 to 10 of 13 entries</div>
          <div>
            <button class="border rounded px-4 py-2 mr-2">&lt;</button>
            <button class="border rounded px-4 py-2">&gt;</button>
          </div>
        </div>
      </div>
      <script src="https://kit.fontawesome.com/a076d05399.js" crossorigin="anonymous"></script>
    
    
    </div>
    
    
        </div>
      )
    }

export default Employees