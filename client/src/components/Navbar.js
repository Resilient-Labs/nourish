"use client"
import { Button, Navbar } from "flowbite-react"
import { Link } from "react-router-dom"

export default function NavbarComponent({ isAuthenticated }) {
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
              as={Link}
              to="/logout"
              size="lg"
              className="bg-red-500 hover:bg-red-600"
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
