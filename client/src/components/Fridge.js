"use client"
import FridgeList from "./FridgeList.js"
import FridgeMap from "./FridgeMap.js"
import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

export default function Fridge() {
  const [allFridges, setAllFridges] = useState([]);//changed it to array from originally object
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchAllFridges = async () => {
      try {
        console.log("i am here now")
        const response = await fetch(`http://localhost:8000/getAllFridges`)
        console.log(response)
        const data = await response.json();
        console.log(" data i am here now pt 2")
        console.log(data)
        setAllFridges(data);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchAllFridges();
  }, []);

  if (isLoading) {
    return <p>Loading fridge list data...</p>;
  }
  if (error) {
    return <p>Error fetching data: {error.message}</p>;
  }
  console.log(allFridges)
  return (
    <div>
      <h1 className="text-2xl font-bold text-center pt-8">Philadelphia Community Fridges and Pantries</h1>
      <div className="flex p-12">
        <div className="flex-1" style={{ marginRight: "2.5rem", backgroundColor: "rgb(250, 224, 158)" }}>
          <FridgeList allFridges={allFridges} />
        </div>
        <div className="lg:flex-1 block"> 
          <FridgeMap allFridges={allFridges} />
        </div>
      </div>
    </div>
  )
}