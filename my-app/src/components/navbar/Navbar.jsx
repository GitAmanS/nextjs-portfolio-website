// components/Navbar.jsx
'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import LiveClock from './LiveClock';
export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const pathname = usePathname();

  return (
    <nav className="">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 roboto-mono">
        <div className="flex justify-between items-center py-4 md:py-8">
          {/* Navigation links (keep the same design for all screens) */}
          <div className="hidden md:block flex flex-wrap items-center bg-black p-0.5 rounded-md text-lg">
            <Link href="/works" 
              className={`py-1 px-4 rounded-md transition-colors duration-300
                ${pathname === '/works' ? 'bg-white text-black' : 'text-zinc-300 hover:bg-gray-700 hover:text-white'}`}
            >
              WORKS
            </Link>
            <Link href="/about"
              className={`py-1 px-4 rounded-md transition-colors duration-300
                ${pathname === '/about' ? 'bg-white text-black' : 'text-zinc-300 hover:bg-gray-700 hover:text-white'}`}
            >
              ABOUT
            </Link>
            <Link href="/archives"
              className={`py-1 px-4 rounded-md transition-colors duration-300
                ${pathname === '/archives' ? 'bg-white text-black' : 'text-zinc-300 hover:bg-gray-700 hover:text-white'}`}
            >
              ARCHIVES
            </Link>
            <Link href="/contacts"
              className={`py-1 px-4 rounded-md transition-colors duration-300
                ${pathname === '/contacts' ? 'bg-white text-black' : 'text-zinc-300 hover:bg-gray-700 hover:text-white'}`}
            >
              CONTACTS
            </Link>
          </div>
          {/* Hamburger Menu (Mobile) */}
          <div className="md:hidden flex items-center">
            <button
              className="text-black hover:text-white focus:outline-none text-xl p-1"
              onClick={toggleMenu}
            >
              ☰
            </button>
          </div>
          <div>
            <LiveClock/>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden flex flex-col bg-black p-2 rounded-md space-y-2">
            <Link href="/works" 
              className={`block py-1 px-4 rounded-md transition-colors duration-300 
                ${pathname === '/works' ? 'bg-white text-black' : 'text-zinc-300 hover:bg-gray-700 hover:text-white'}`}
            >
              WORKS
            </Link>
            <Link href="/about"
              className={`block py-1 px-4 rounded-md transition-colors duration-300 
                ${pathname === '/about' ? 'bg-white text-black' : 'text-zinc-300 hover:bg-gray-700 hover:text-white'}`}
            >
              ABOUT
            </Link>
            <Link href="/archives"
              className={`block py-1 px-4 rounded-md transition-colors duration-300 
                ${pathname === '/archives' ? 'bg-white text-black' : 'text-zinc-300 hover:bg-gray-700 hover:text-white'}`}
            >
              ARCHIVES
            </Link>
            <Link href="/contacts"
              className={`block py-1 px-4 rounded-md transition-colors duration-300 
                ${pathname === '/contacts' ? 'bg-white text-black' : 'text-zinc-300 hover:bg-gray-700 hover:text-white'}`}
            >
              CONTACTS
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}
