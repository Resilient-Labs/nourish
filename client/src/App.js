import "./App.css"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { useState, useEffect } from 'react' //
import Community from "./pages/Community"
import FridgeProfile from "./pages/FridgeProfile"
import Home from "./pages/Home"
import Login from "./pages/Login"
import SignUp from "./pages/SignUp"
import UserProfile from "./pages/UserProfile"
import FridgeLocations from "./pages/FridgeLocations"
import NavbarComponent from "./components/Navbar" //

// Routes for pages
export default function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false)

  useEffect(() => {
    fetch('http://localhost:8000/login', {
      method: 'GET',
      credentials: 'include'
    })
      .then((response) => response.json())
      .then((data) => {
        setIsAuthenticated(data.isAuthenticated)
      })
      .catch((error) => {
        console.error('Error checking authentication status:', error)
      })
  }, [])

  return (
    <BrowserRouter>
      <NavbarComponent isAuthenticated={isAuthenticated} />

      <Routes>
        <Route index element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/community" element={<Community />} />
        <Route path="/fridgeprofile/:userId" element={<FridgeProfile />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/userprofile" element={<UserProfile />} />
        <Route path="/locations" element={<FridgeLocations />} />
      </Routes>
    </BrowserRouter>
  )
}
