import React, { useState } from 'react';

export default function Searchbar({ allFridges, updateFridges }) {
  const [searchZipcode, setSearchZipcode] = useState("");

  // Handler function that reads changes from search input
  const handleChange = (e) => {
    setSearchZipcode(e.target.value);
    filterFridges(e.target.value);
  };

  //function used to filter through zipcode
  const filterFridges = (searchText) => {

    const filtered = allFridges.fridges.filter(fridge => fridge.location.zipCode.includes(searchText));

    const newFridges = { fridges: filtered }
    updateFridges(newFridges);
  };

  return (
    <div className="pt-12 pr-12 pl-12">
      
      <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">
        Search
      </label>

      <div className="relative">

        <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
          <svg className="w-4 h-4 text-gray-500 dark:text-gray-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20">
            <path stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
          </svg>
        </div>

        <input
          value={searchZipcode} 
          onChange={handleChange} 
          type="search"
          id="default-search"
          className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Search Zip Code"
          required />

      </div>

    </div>
  );
};



  
