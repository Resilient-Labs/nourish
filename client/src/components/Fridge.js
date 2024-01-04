"use client"
import FridgeList from "./FridgeList.js"
import FridgeMap from "./FridgeMap.js"
import { useState, useEffect } from "react"

export default function Fridge() {
  const [allFridges, setAllFridges] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchAllFridges = async () => {
      try {
        const response = await fetch(`http://localhost:8000/fridge/getAllFridges`)
        const data = await response.json()
        setAllFridges(data)
      } catch (error) {
        setError(error)
      } finally {
        setIsLoading(false)
      }
    }
    fetchAllFridges()
  }, [])

  if (isLoading) {
    return <p>Loading fridge list data...</p>
  }
  if (error) {
    return <p>Error fetching data: {error.message}</p>
  }
  
  return (
    <div>
      <div className="flex p-12">
        <div
          className="flex-1"
          style={{
            marginRight: "2.5rem",
            backgroundColor: "rgb(250, 224, 158)"
          }}
        >
          <FridgeList allFridges={allFridges} />
        </div>
        <div className="lg:flex-1 block">
          <FridgeMap allFridges={allFridges} />
        </div>
      </div>
    </div>
  )
}
