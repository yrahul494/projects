import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRightIcon } from "@heroicons/react/solid";

export default function Navbar() {
  return (
    <nav className="bg-gray-800 py-4">
      <div className="container mx-auto px-4">
        <ul className="flex justify-center space-x-8">
          <li>
            <Link to="/" className="text-white hover:text-gray-300 transition duration-300 flex items-center">
              About
              <ArrowRightIcon className="w-4 h-4 ml-1" />
            </Link>
          </li>
          <li>
            <Link to="/projects" className="text-white hover:text-gray-300 transition duration-300 flex items-center">
              Projects
              <ArrowRightIcon className="w-4 h-4 ml-1" />
            </Link>
          </li>
          <li>
            <Link to="/skills" className="text-white hover:text-gray-300 transition duration-300 flex items-center">
              Skills
              <ArrowRightIcon className="w-4 h-4 ml-1" />
            </Link>
          </li>
          <li>
            <Link to="/contact" className="text-white hover:text-gray-300 transition duration-300 flex items-center">
              Contact
              <ArrowRightIcon className="w-4 h-4 ml-1" />
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
