import React, { useState } from 'react';
import '../Departments/Departments.css';
import addIcon from '../../assets/icons/CircleForButtons.png';
import DataTable from '../../assets/Comps/DataTable/DataTable';
import deleteBtnIcon from "../../assets/icons/deleteBtn.png";
import editIcon from "../../assets/icons/editV.png";

const Departments = () => {
  // State to control modal visibility
  const [isModalOpen, setIsModalOpen] = useState(false);
const [isEditWanted, setIsEditWanted] = useState(false);
const [isDeleteWarOpen, setIsDeleteWarOpen] = useState(false);
const [deleteIndex, setDeleteIndex] = useState(null);
const[updateDepartmentIndex, setUpdatedDepartmentIndex] = useState(null);

  // State to manage selected color
  const [selectedColor, setSelectedColor] = useState('#2563eb'); // Default color

  // State to manage departments

 
  const [departments, setDepartments] = useState([]);
  

  // Function to open the modal
  const openModal = () => {
    console.log('Opening modal'); // Debugging

    setIsModalOpen(true);
  };


  const openUpdateModal = (index) => {
setUpdatedDepartmentIndex(index);
setIsEditWanted(true);


  }

const closeUpdateModal =() =>{

setIsEditWanted(false);
}


  const openDelWar = (index) => {
setDeleteIndex(index);
setIsDeleteWarOpen(true);


  }

const closeDelWar = () => {

setIsDeleteWarOpen(false);


}

  // Function to close the modal
  const closeModal = () => {
    console.log('Closing modal'); // Debugging
    setIsModalOpen(false);
  };

  // Handle color change
  const handleColorChange = (event) => {
    setSelectedColor(event.target.value);
  };

  // Handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    const { name } = event.target.elements;
    const departmentName = name.value;
    const departmentColor = selectedColor;

    console.log('Submitting department:', departmentName, departmentColor); // Debugging
    setDepartments([...departments, { name: departmentName, color: departmentColor }]);

    if (isEditWanted) {
      handleUpdate(updateDepartmentIndex, departmentName, departmentColor);
    } else {
      setDepartments([...departments, { name: departmentName, color: departmentColor }]);
    }
    closeModal();
    event.target.reset();
  };





const handleDelete = (index) => {
  setDepartments(departments.filter((_, i) => i !== index));
  closeDelWar();
};


const handleUpdate =(index, updatedName, updatedColor)=>{

  const updatedDepartments = departments.map((department,i)=>i===index?{name:updatedName, color:updatedColor}:department);

setDepartments(updatedDepartments);


}




  return (
    <div className='page'>
      <div className="headerOfPage">
        <div className="topHeader">
          <div className="titleOfHeader ml">
            <p className="font-custom font-light">Departments</p>
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
            <div className="theColorSelection" style={{ backgroundColor: selectedColor }}></div>
          </div>
          <div className="ProfilePic">
            <div className="profilePicCircle"></div>
          </div>
        </div>
      </div>

      <div className="contentOfPage">
        <div className="save-btn_Departments bg-[#C2D4E4]" onClick={openModal}>
          <a href="#" className="item font-custom font-light">
            <img src={addIcon} alt="Add Icon" />
            <p className='text-[15px]'>add</p>
          </a>
        </div>

        {isModalOpen && (
          <div
            id="crud-modal"
            tabIndex="-1"
            aria-hidden="true"
            className="fixed inset-0 z-50 flex items-center justify-center bg-gray-800 bg-opacity-50"
          >
            <div className="relative p-4 w-full max-w-md max-h-full">
              <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                    Add A New Department
                  </h3>
                  <button
                    type="button"
                    onClick={closeModal}
                    className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                  >
                    <svg
                      className="w-3 h-3"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 14 14"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                      />
                    </svg>
                    <span className="sr-only">Close modal</span>
                  </button>
                </div>

                <form className="p-4 md:p-5" onSubmit={handleSubmit}>
                  <div className="grid gap-4 mb-4 grid-cols-2">
                    <div className="col-span-2">
                      <label
                        htmlFor="name"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white mr-64"
                      >
                        Department Name
                      </label>
                      <input
                        type="text"
                        name="name"
                        id="name"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                        placeholder="Type department name"
                        required
                      />
                    </div>
                    <div className="col-span-2 sm:col-span-1">
                      <label
                        htmlFor="color"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white mr-60"
                      >
                        Color
                      </label>
                      <input
                        type="color"
                        className="p-1 h-10 w-14 block bg-white border border-gray-200 cursor-pointer rounded-lg disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700"
                        id="color-input"
                        value={selectedColor}
                        onChange={handleColorChange}
                        title="Choose your color"
                      />
                    </div>





                  </div>
                  <button
                    type="submit"
                    className="text-white inline-flex items-center bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  >
                    <svg
                      className="me-1 -ms-1 w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                    Add Department
                  </button>
                </form>
              </div>
            </div>
          </div>
        )}
      </div>

      <div className="tables">
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
                        <th scope="col" className="px-6 py-4">Edit</th>
                        <th scope="col" className="px-6 py-4">Delete</th>
                        
                      </tr>
                    </thead>
                    <tbody>
                      {departments.map((department, index) => (
                        <tr key={index} className="border-b border-neutral-200 bg-black/[0.02] dark:border-white/10">
                          <td className="whitespace-nowrap px-6 py-4 font-medium">{index + 1}</td>
                          <td className="whitespace-nowrap px-6 py-4 flex ml-8">{department.name}</td>
                         
                          <td className="whitespace-nowrap px-6 py-4">
                            <div className="w-6 h-6 rounded-full ml-8" style={{ backgroundColor: department.color }}></div>
                          </td>
                          <td className="whitespace-nowrap px-6 py-4 ml-8" onClick={()=>openUpdateModal(index)}><img src={editIcon}></img></td>
                          <td className="whitespace-nowrap px-6 py-4 flex ml-3" onClick={()=>openDelWar(index)}><img src={deleteBtnIcon}></img></td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>


{isDeleteWarOpen&&(

  <div
    id="popup-modal"
    tabIndex="-1"
    className="fixed inset-0 z-50 flex items-center justify-center bg-gray-800 bg-opacity-50"
  >
    <div class="relative p-4 w-full max-w-md max-h-full">
        <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
            <button type="button" class="absolute top-3 end-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide="popup-modal">
                <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                </svg>
                <span class="sr-only">Close modal</span>
            </button>
            <div class="p-4 md:p-5 text-center">
                <svg class="mx-auto mb-4 text-gray-400 w-12 h-12 dark:text-gray-200" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 11V6m0 8h.01M19 10a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/>
                </svg>
                <h3 class="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">Are you sure you want to delete this product?</h3>
                <button
  data-modal-hide="popup-modal"
  type="button"
  className="text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center"
  onClick={() => handleDelete(deleteIndex)}
>
                    Yes, I'm sure
                </button>
                <button data-modal-hide="popup-modal" type="button" class="py-2.5 px-5 ms-3 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700" onClick={closeDelWar}>No, cancel</button>
            </div>
        </div>
    </div>
</div>













)}




{isEditWanted && (
          <div
            id="crud-modal"
            tabIndex="-1"
            aria-hidden="true"
            className="fixed inset-0 z-50 flex items-center justify-center bg-gray-800 bg-opacity-50"
          >
            <div className="relative p-4 w-full max-w-md max-h-full">
              <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                    Update Department
                  </h3>
                  <button
                    type="button"
                    onClick={closeUpdateModal}
                    className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                  >
                    <svg
                      className="w-3 h-3"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 14 14"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                      />
                    </svg>
                    <span className="sr-only">Close modal</span>
                  </button>
                </div>

                <form className="p-4 md:p-5" onSubmit={handleSubmit}>
                  <div className="grid gap-4 mb-4 grid-cols-2">
                    <div className="col-span-2">
                      <label
                        htmlFor="name"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white mr-64"
                      >
                        Department Name
                      </label>
                      <input
                        type="text"
                        name="name"
                        id="name"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                        placeholder="Type department name"
                        required
                      />
                    </div>
                    <div className="col-span-2 sm:col-span-1">
                      <label
                        htmlFor="color"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white mr-60"
                      >
                        Color
                      </label>
                      <input
                        type="color"
                        className="p-1 h-10 w-14 block bg-white border border-gray-200 cursor-pointer rounded-lg disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700"
                        id="color-input"
                        value={selectedColor}
                        onChange={handleColorChange}
                        title="Choose your color"
                      />
                    </div>





                  </div>
                  <button
                    type="submit"
                    className="text-white inline-flex items-center bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  >
                    <svg
                      className="me-1 -ms-1 w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                    Add Department
                  </button>
                </form>
              </div>
            </div>
          </div>
        )}


    </div>
  );
};

export default Departments;
