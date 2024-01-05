import "./App.css"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { useState, useEffect } from "react"
import Community from "./pages/Community"
import FridgeProfile from "./pages/FridgeProfile"
import Home from "./pages/Home"
import Login from "./pages/Login"
import SignUp from "./pages/SignUp"
import UserProfile from "./pages/UserProfile"
import FridgeLocations from "./pages/FridgeLocations"
import OurTeam from "./pages/OurTeam"
import NavbarComponent from "./components/Navbar"
import ProtectedRoute from './components/ProtectedRoute';

const API_URL = process.env.REACT_APP_API_URL

// Routes for pages
export default function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false)

  useEffect(() => {
    fetch(`${API_URL}/login`, {
      method: "GET",
      credentials: "include"
    })
      .then((response) => response.json())
      .then((data) => {
        setIsAuthenticated(data.isAuthenticated)
      })
      .catch((error) => {
        console.error("Error checking authentication status:", error)
      })
  }, [])

  return (
    <BrowserRouter>
      <NavbarComponent isAuthenticated={isAuthenticated} setIsAuth={setIsAuthenticated} />

      <Routes>
        <Route index element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/community" element={
            <ProtectedRoute isAuthenticated={isAuthenticated}>
              <Community />
            </ProtectedRoute>
          }  />
        <Route path="/fridgeprofile/:userId" element={<FridgeProfile />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/userprofile" element={<UserProfile />} />
        <Route path="/locations" element={<FridgeLocations />} />
        <Route path="/team" element={<OurTeam />} />
      </Routes>
    </BrowserRouter>
  )
}
