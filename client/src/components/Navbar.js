'use client'
import { Button, Navbar } from 'flowbite-react'
import { Link } from 'react-router-dom'

export default function Component() {
  return (
    <Navbar className="py-4" fluid rounded>
      <Navbar.Brand as={Link} to="/" className="pl-10">
        <span className="self-center whitespace-nowrap text-2xl font-extrabold">Nourish</span>
      </Navbar.Brand>

      <div className="flex gap-2 md:order-2 pr-10">
        <Button as={Link} to="/login" size="lg" className="text-black bg-gray-100 hover:bg-gray-200">
          Log In
        </Button>

        <Button as={Link} to="/signup" size="lg" className="bg-green-500 hover:bg-green-600">
          Sign Up
        </Button>
        <Navbar.Toggle />
      </div>

      <Navbar.Collapse>
        <Navbar.Link as={Link} to="/" className="text-lg">Home</Navbar.Link>
        <Navbar.Link as={Link} to="/locations" className="text-lg">Locations</Navbar.Link>
        <Navbar.Link as={Link} to="/community" className="text-lg">Community</Navbar.Link>
        <Navbar.Link as={Link} to="/contact" className="text-lg">Contact</Navbar.Link>
        <Navbar.Link as={Link} to="/userprofile" className="text-lg">Profile</Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  )
}
