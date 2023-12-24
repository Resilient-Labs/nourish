'use client';
import { Button, Navbar } from 'flowbite-react';

export default function Component() {
  return (
    <Navbar className="py-4" fluid rounded>

      <Navbar.Brand href="https://nourish.com" className="pl-10">
        <span className="self-center whitespace-nowrap text-2xl font-extrabold">Nourish</span>
      </Navbar.Brand>

      <div className="flex gap-2 md:order-2 pr-10">
        <Button href="#" size="lg"
        className="text-black bg-gray-100 hover:bg-gray-200 ">
          Log In
        </Button>

        <Button href="#" size="lg"
        className="bg-green-500 hover:bg-green-600">
          Sign Up
        </Button>
        <Navbar.Toggle/>
      </div>

      <Navbar.Collapse>
        <Navbar.Link href="#" className="text-lg">Home</Navbar.Link>
        <Navbar.Link href="#" className="text-lg">Locations</Navbar.Link>
        <Navbar.Link href="#" className="text-lg">Community</Navbar.Link>
        <Navbar.Link href="#" className="text-lg">Volunteer</Navbar.Link>
        <Navbar.Link href="#" className="text-lg">Contact</Navbar.Link>
      </Navbar.Collapse>

    </Navbar>
  );
}
