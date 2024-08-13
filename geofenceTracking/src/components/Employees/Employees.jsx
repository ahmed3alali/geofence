import React from 'react'
import '../Employees/Employess.css'
import { Button, Dropdown, DropdownDivider,DropdownHeader, DropdownItem, Navbar, Datepicker, Checkbox, Label, TextInput, Modal, Avatar } from "flowbite-react";



import MenuIcon from '../../assets/icons/Menu.png';
import addIcon from '../../assets/icons/CircleForButtons.png';
"use client";

const Employees = () => {
  return (
    
    <div className='page_emp'>


      <div className="headerOfPage_Profile">
      <Navbar fluid rounded>
      <Navbar.Brand href="https://flowbite-react.com">
        <img src="/favicon.svg" className="mr-3 h-6 sm:h-9" alt="Flowbite React Logo" />
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">Flowbite React</span>
      </Navbar.Brand>
      <div className="flex md:order-2">
        <Dropdown
          arrowIcon={false}
          inline
          label={
            <Avatar alt="User settings" img="https://flowbite.com/docs/images/people/profile-picture-5.jpg" rounded />
          }
        >
          <Dropdown.Header>
            
            <span className="block text-sm">Bonnie Green</span>
            <span className="block truncate text-sm font-medium">name@geofence.com</span>
          </Dropdown.Header>

          
          
          <Dropdown.Item>Dashboard</Dropdown.Item>
          <Dropdown.Item>Settings</Dropdown.Item>
          <Dropdown.Item>Earnings</Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item>Sign out</Dropdown.Item>
        </Dropdown>
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
        <Navbar.Link href="#" active>
          Home
        </Navbar.Link>
        <Navbar.Link href="#">About</Navbar.Link>
        <Navbar.Link href="#">Services</Navbar.Link>
        <Navbar.Link href="#">Pricing</Navbar.Link>
        <Navbar.Link href="#">Contact</Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
      </div>


      <div className="beg_page">



        <div className="EmpActionsBtns">


          <div className="save-btn_Departments bg-[#C2D4E4]">
            <a href="#" className="item font-custom font-light">
              <img src={addIcon} alt="Add Icon" />
              <p className='text-[15px]'>Add Emplyoee</p>
            </a>
          </div>

          <div className="save-btn_Departments bg-[#C2D4E4]">
            <a href="#" className="item font-custom font-light">
              <img src={addIcon} alt="Add Icon" />
              <p className='text-[15px]'>Import</p>
            </a>
          </div>

        </div>




      </div>



      <div className="tables">


        <div class="max-w-7xl mx-auto">
          <div class="flex items-center justify-between mb-4">
            <div className='TableWidgets'>
              <label for="entries" class="mr-2">Show</label>
              <select id="entries" class="border rounded p-2">
                <option>10</option>
                <option>25</option>
                <option>50</option>
              </select>
              <span class="ml-2">entries</span>
            </div>
            <div class="relative">
              <input type="text" placeholder="Search" class="border rounded-[45px] rounded p-2 pr-8" />
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
                        <th scope="col" class="px-6 py-4">Name</th>
                        <th scope="col" class="px-6 py-4">Phone</th>
                        <th scope="col" class="px-6 py-4">Department</th>
                        <th scope="col" class="px-6 py-4">Shift</th>
                        <th scope="col" class="px-6 py-4">Status</th>
                        <th scope="col" class="px-6 py-4">OPS</th>
                        <th scope="col" class="px-6 py-4">Gender</th>
                        <th scope="col" class="px-6 py-4">Nationality</th>
                        <th scope="col" class="px-6 py-4">Edit</th>
                        <th scope="col" class="px-6 py-4">Activate/Deactivate</th>


                      </tr>
                    </thead>
                    <tbody>
                      <tr
                        class="border-b border-neutral-200 bg-black/[0.02] dark:border-white/10">
                        <td class="whitespace-nowrap px-6 py-4 font-medium">1</td>
                        <td class="whitespace-nowrap px-6 py-4">Mark</td>
                        <td class="whitespace-nowrap px-6 py-4">Otto</td>
                        <td class="whitespace-nowrap px-6 py-4">@mdo</td>
                        <td class="whitespace-nowrap px-6 py-4 font-medium">1</td>
                        <td class="whitespace-nowrap px-6 py-4">Mark</td>
                        <td class="whitespace-nowrap px-6 py-4">Otto</td>
                        <td class="whitespace-nowrap px-6 py-4">@mdo</td>
                        <td class="whitespace-nowrap px-6 py-4 font-medium">1</td>
                        <td class="whitespace-nowrap px-6 py-4">Mark</td>


                      </tr>
                      <tr
                        class="border-b border-neutral-200 bg-white dark:border-white/10 dark:bg-body-dark">
                        <td class="whitespace-nowrap px-6 py-4 font-medium">1</td>
                        <td class="whitespace-nowrap px-6 py-4">Mark</td>
                        <td class="whitespace-nowrap px-6 py-4">Otto</td>
                        <td class="whitespace-nowrap px-6 py-4">@mdo</td>
                        <td class="whitespace-nowrap px-6 py-4 font-medium">1</td>
                        <td class="whitespace-nowrap px-6 py-4">Mark</td>
                        <td class="whitespace-nowrap px-6 py-4">Otto</td>
                        <td class="whitespace-nowrap px-6 py-4">@mdo</td>
                        <td class="whitespace-nowrap px-6 py-4 font-medium">1</td>
                        <td class="whitespace-nowrap px-6 py-4">Mark</td>

                      </tr>
                      <tr
                        class="border-b border-neutral-200 bg-black/[0.02] dark:border-white/10">
                        <td class="whitespace-nowrap px-6 py-4 font-medium">1</td>
                        <td class="whitespace-nowrap px-6 py-4">Mark</td>
                        <td class="whitespace-nowrap px-6 py-4">Otto</td>
                        <td class="whitespace-nowrap px-6 py-4">@mdo</td>
                        <td class="whitespace-nowrap px-6 py-4 font-medium">1</td>
                        <td class="whitespace-nowrap px-6 py-4">Mark</td>
                        <td class="whitespace-nowrap px-6 py-4">Otto</td>
                        <td class="whitespace-nowrap px-6 py-4">@mdo</td>
                        <td class="whitespace-nowrap px-6 py-4 font-medium">1</td>
                        <td class="whitespace-nowrap px-6 py-4">Mark</td>

                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>



          <div class="flex items-center justify-between mt-4">
            <div><p>Showing 1 to 10 of 13 entries</p>
            <div className="BulkActions">
              <div className="save-btn_Emps item font-custom font-light bg-[#C2D4E4] mt-[53px]]">
                <div>
                  <Dropdown label="Bulk Actions"

                    color="white"
                    dismissOnClick={false}
                  >
                    <Dropdown.Item>Dashboard</Dropdown.Item>
                    <Dropdown.Item>Settings</Dropdown.Item>
                    <Dropdown.Item>Earnings</Dropdown.Item>
                    <Dropdown.Item>Sign out</Dropdown.Item>
                  </Dropdown>
                </div>


              </div>



            </div>


            </div>
            <div className='tableControl mt-[0px]'>
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