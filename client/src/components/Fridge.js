"use client"
import { useState, useEffect } from "react"
import FridgeList from "./FridgeList.js"
import FridgeMap from "./FridgeMap.js"
import Searchbar from "./Searchbar.js"
const apiKey = process.env.REACT_APP_API_URL

export default function Fridge() {
  // Variables, setters
  const [allFridges, setAllFridges] = useState([])
  const [filteredFridges, setupdatedFridges] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState(null)

  // Prop for updating list of fridges used for fridge list and fridge map
  const updateFridges = (newFridgeData) => {
    setupdatedFridges(newFridgeData)
  }

  // useEffect prevents multiple calls to the server for fridge list as react constantly is waiting and updating for changes
  useEffect(() => {

    const fetchAllFridges = async () => {
      try {
        const response = await fetch(`${apiKey}/fridge/getAllFridges`)
        const data = await response.json()

        // Use setters to update variables holding fridge data
        setAllFridges(data)
        setupdatedFridges(data)
      } catch (error) {
        setError(error)
      } finally {
        setIsLoading(false)
      }
    }

    fetchAllFridges()
  }, [])

  // Display when loading data
  if (isLoading) {
    return <p>Loading fridge list data...</p>
  }

  // Display if error occurs when fetching data
  if (error) {
    return <p>Error fetching data: {error.message}</p>
  }

  return (
    <div>
      <h2 className="text-center pt-14 text-4xl tracking-tight font-extrabold text-gray-900">Philadelphia Community Fridges and Pantries</h2>

      {/* Component to search fridges by zipcode. Is passed updateFridges, so that it can return to Fridge component's filtered fridges, which will be used by the FridgeList and FridgeMap components */}
      <Searchbar allFridges={allFridges} updateFridges={updateFridges} />

      <div className="flex p-12">

        {/* Component that displays fridge data as cards. Is passed filteredFridges, which is the output of the searchbar component filtering of fridges */}
        <div className="flex-1" style={{ marginRight: "2.5rem", backgroundColor: "rgb(250, 224, 158)" }}>
          <FridgeList allFridges={filteredFridges} />
        </div>

        {/* Component that displays interactive map. Is passed filteredFridges, which is the output of the searchbar component filtering of fridges */}
        <div className="lg:flex-1 block"> 
          <FridgeMap allFridges={filteredFridges} />
        </div>

      </div>

    </div>
  )
}
