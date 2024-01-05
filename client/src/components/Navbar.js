"use client"
import { Button, Navbar } from "flowbite-react"
import { Link, useNavigate } from "react-router-dom"

export default function NavbarComponent({ isAuthenticated, setIsAuth }) {
  const navigate = useNavigate()

  const handleLogOut = async () => {
    try {
      const response = await fetch('http://localhost:8000/logout', {
        method: "GET",
        headers: { "Content-Type": "application/json" },
        credentials: "include"
      })
      const result = await response.json()
      setIsAuth(result.isAuthenticated)
  
      if (response.ok) {
        navigate("/")
      } else {
        console.error("Logout failed:", result)
      }
    } catch (error) {
      console.error("Error during logout:", error)
    }
  }

  return (
    <Navbar className="py-4" fluid rounded>
      <Navbar.Brand as={Link} to="/" className="pl-10">
        <span className="self-center whitespace-nowrap text-2xl font-extrabold">
          Nourish
        </span>
      </Navbar.Brand>

      <div className="flex gap-2 md:order-2 pr-10">
        {isAuthenticated ? (
          <>
            <Button
              as={Link}
              to="/userprofile"
              size="lg"
              className="text-black bg-gray-100 hover:bg-gray-200"
            >
              Profile
            </Button>
            <Button
              size="lg"
              className="bg-green-500"
              method="GET"
              action="http://localhost:8000/logout"
              onClick={handleLogOut}
            >
              Log Out
            </Button>
          </>
        ) : (
          <>
            <Button
              as={Link}
              to="/login"
              size="lg"
              className="text-black bg-gray-100 hover:bg-gray-200"
            >
              Log In
            </Button>
            <Button
              as={Link}
              to="/signup"
              size="lg"
              className="bg-green-500 hover:bg-green-600"
            >
              Sign Up
            </Button>
          </>
        )}
        <Navbar.Toggle />
      </div>

      <Navbar.Collapse>
        <Navbar.Link as={Link} to="/" className="text-lg">
          Home
        </Navbar.Link>
        <Navbar.Link as={Link} to="/locations" className="text-lg">
          Locations
        </Navbar.Link>
        <Navbar.Link as={Link} to="/community" className="text-lg">
          Community
        </Navbar.Link>
        <Navbar.Link as={Link} to="/team" className="text-lg">
          Team
        </Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  )
}
