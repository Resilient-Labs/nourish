"use client"

//modules
import React, { useState, useEffect } from "react"

//components
import FridgeList from "./FridgeList.js"
import FridgeMap from "./FridgeMap.js"
import Searchbar from "./Searchbar.js"

export default function Fridge() {

  //variables, setters
  const [allFridges, setAllFridges] = useState([]);
  const [filteredFridges, setupdatedFridges] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  //prop for updating list of fridges used for fridge list and fridge map
  const updateFridges = (newFridgeData) => {
    setupdatedFridges(newFridgeData);
  };

  //useEffect prevents multiple calls to the server for fridge list as react constantly is waiting and updating for changes
  useEffect(() => {

    const fetchAllFridges = async () => {
      try {

        //get request to the server for list of fridges. Connect to b-e to pull from DB b/c f-e connect to localhost:3000
        const response = await fetch(`http://localhost:8000/fridge/getAllFridges`)
        const data = await response.json();

        //use setters to update varialbes holding fridge data
        setAllFridges(data);
        setupdatedFridges(data);

      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };

    //make server call
    fetchAllFridges();
  }, []);

  //display when loading data
  if (isLoading) {
    return <p>Loading fridge list data...</p>;
  }

  //display if error occurs when fetching data
  if (error) {
    return <p>Error fetching data: {error.message}</p>;
  }

  return (
    <div>
      {/* <h1 className="text-2xl text-gray-900 font-bold text-center pt-8">
        
      </h1> */}
      <h2 className="text-center pt-14 text-4xl tracking-tight font-extrabold text-gray-900">Philadelphia Community Fridges and Pantries</h2>

      {/* Component where users can search fridges by zipcode. Is passed the updateFridges prop so that it can return to the Fridge component filtered fridges which will be used by the FridgeList and FridgeMap component*/}
      <Searchbar allFridges={allFridges} updateFridges={updateFridges} />

      <div className="flex p-12">

        {/* Component that displays fridge data as cards. Is passed filteredFridges which is the output of the searchbar component filtering of fridges */}
        <div className="flex-1" style={{ marginRight: "2.5rem", backgroundColor: "rgb(250, 224, 158)" }}>
          <FridgeList allFridges={filteredFridges} />
        </div>

        {/* Component that displays an interactive map. Is passed filteredFridges which is the output of the searchbar component filtering of fridges */}
        <div className="lg:flex-1 block"> 
          <FridgeMap allFridges={filteredFridges} />
        </div>

      </div>

    </div>
  )
}