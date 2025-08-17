'use client'
import { useState } from 'react';
import Link from 'next/link';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        
        <Link href="/" className="text-2xl font-bold text-blue-500">
          SimplerTechnologies
        </Link>

        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="text-gray-600 hover:text-blue-500 focus:outline-none md:hidden"
        >
          <svg
            className="w-7 h-7"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {isMobileMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            )}
          </svg>
        </button>

        <div className="hidden md:flex md:items-center">
          <ul className="flex space-x-6 text-base font-medium">
            <li>
              <Link
                href="/"
                className="px-3 py-2 text-gray-700 hover:text-blue-500 transition"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className="px-3 py-2 text-gray-700 hover:text-blue-500 transition"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="px-3 py-2 text-gray-700 hover:text-blue-500 transition"
              >
                Contact
              </Link>
            </li>
            <li>
              <Link
                href="/signup"
                className="text-white bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-full transition"
              >
                Sign Up
              </Link>
            </li>
          </ul>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden px-4 pb-4">
          <ul className="flex flex-col space-y-2 text-base font-medium">
            <li>
              <Link
                href="/"
                className="block px-3 py-2 text-gray-700 hover:text-blue-500 hover:bg-gray-100 rounded-md transition"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className="block px-3 py-2 text-gray-700 hover:text-blue-500 hover:bg-gray-100 rounded-md transition"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="block px-3 py-2 text-gray-700 hover:text-blue-500 hover:bg-gray-100 rounded-md transition"
              >
                Contact
              </Link>
            </li>
            <li>
              <Link
                href="/signup"
                className="block text-center text-white bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-full transition"
              >
                Sign Up
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
