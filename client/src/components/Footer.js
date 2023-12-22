'use client';
import { Footer } from 'flowbite-react';

export default function Component() {
  return (
    <Footer container className="px-10">
      <div className="w-full text-center">
        <div className="w-full justify-between sm:flex sm:items-center sm:justify-between">
          <Footer.Brand href="https://nourish.com" name="Nourish"/>
          <Footer.LinkGroup>
            <Footer.Link href="#">About</Footer.Link>
            <Footer.Link href="#">Contact</Footer.Link>
          </Footer.LinkGroup>
        </div>
        <Footer.Divider />
        <Footer.Copyright href="https://nourish.com" by="Nourish™" year={2023} />
      </div>
    </Footer>
  );
}
