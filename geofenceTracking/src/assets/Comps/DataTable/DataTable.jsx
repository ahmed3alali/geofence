import React from 'react'
import { FaEdit, FaTrash } from 'react-icons/fa';
const departments = [
    { id: 1, name: 'dep 1', color: 'gray' },
    // Add more department data here
  ];
const DataTable = () => {
    return (
        <div className="max-w-7xl mx-auto p-4">
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
              <input type="text" placeholder="Search" className="border rounded p-2 pr-8" />
              <span className="absolute right-2 top-2 text-gray-400"><FaEdit /></span>
            </div>
          </div>
          <table className="min-w-full bg-white border">
            <thead>
              <tr className="bg-gray-100 border-b">
                <th className="text-left py-2 px-4">Department Name</th>
                <th className="text-left py-2 px-4">Department Color</th>
                <th className="text-left py-2 px-4">Actions</th>
              </tr>
            </thead>
            <tbody>
              {departments.map((dept) => (
                <tr key={dept.id} className="border-b">
                  <td className="py-2 px-4">{dept.name}</td>
                  <td className="py-2 px-4">
                    <span className={`inline-block w-4 h-4 bg-${dept.color}-400 rounded-full`}></span>
                  </td>
                  <td className="py-2 px-4">
                    <button className="text-blue-500"><FaEdit /></button>
                    <button className="text-red-500"><FaTrash /></button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="flex items-center justify-between mt-4">
            <div>Showing 1 to 10 of 13 entries</div>
            <div>
              <button className="border rounded px-4 py-2 mr-2">&lt;</button>
              <button className="border rounded px-4 py-2">&gt;</button>
            </div>
          </div>
        </div>
      );
    };
    

export default DataTable