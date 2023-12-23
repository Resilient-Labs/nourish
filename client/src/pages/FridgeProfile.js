import React, { useState, useEffect } from "react"

import { useParams } from "react-router-dom"

export default function FridgeProfile() {
  const [myFridge, setFridge] = useState({})
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState(null)
  const { userId } = useParams()
  useEffect(() => {
    const fetchFridge = async () => {
      try {
        const response = await fetch(
          `http://localhost:3000/fridgeProfile/${userId}`
        )
        console.log(response)
        const data = await response.json()
        setFridge(data)
      } catch (error) {
        setError(error)
      } finally {
        setIsLoading(false)
      }
    }
    fetchFridge()
  }, [])
  // ... inside the ReportCard component
  if (isLoading) {
    return <p>Loading student data...</p>
  }
  if (error) {
    return <p>Error fetching data: {error.message}</p>
  }
  //combine variable and obj in db for efficiency
  const fridgeObj = myFridge.fridge
  return (
    <div className="fridgePage--parent">
      <div className="fridgePage--left">
        <div className="fridgePage--status">
          <h1>
            <a href={fridgeObj.contact.siteURL}>{fridgeObj.name}</a>{" "}
            <span className="fridgePage--community">
              by {myFridge.fridge.community}
            </span>
          </h1>
          <p>
            {fridgeObj.status} <span>🟢</span>
          </p>
        </div>
        <div className="fridgePage--about">
          <h2>Address</h2>
          <p>
            {fridgeObj.location.address} {fridgeObj.location.zipCode}
          </p>
          <h2>About this fridge</h2>
          <p>
            If following is empty, there is nothing in the database yet:{" "}
            {fridgeObj.description}
          </p>
          <div className="socialsContainer">
            <a href={`mailto:${fridgeObj.contact.email}`} target="_blank">
              <img
                className="social-icons"
                src="../Icons/icons8-email-50.png"
              />
            </a>
            <a href={fridgeObj.contact.siteURL}>
              <img
                className="social-icons"
                src="../Icons/icons8-website-50.png"
              />
            </a>
            <a href={fridgeObj.contact.instagramURL}>
              <img
                className="social-icons"
                src="../Icons/icons8-instagram-50.png"
              />
            </a>
            <a href={fridgeObj.donations.donationURL}>
              <img
                className="social-icons"
                src="../Icons/icons8-coins-50.png"
              />
            </a>
          </div>
          <h3>Accepts</h3>
          <ul>
            {fridgeObj.donations.allowed.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
          <h3>Does not accept</h3>
          <ul>
            {fridgeObj.donations.notAllowed.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
      <div className="fridgePage--right">
        <img src={fridgeObj.profileIMG} />
        <p>If no image in this area, it is not in DB yet</p>
      </div>
    </div>
  )
}
