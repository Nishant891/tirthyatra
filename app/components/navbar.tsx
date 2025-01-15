'use client'

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    if (pathname === '/') {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      window.location.href = `/#${id}`;
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-10 bg-black bg-opacity-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          <div className="flex-shrink-0">
            <Link href="/" className="text-2xl font-bold text-white sm:text-3xl">
              Tirth Yatra
            </Link>
          </div>
          <nav className="hidden md:block">
            <ul className="flex space-x-8">
              <li>
                <Link href="/#home" onClick={(e) => scrollToSection(e, 'home')} className="text-white hover:text-gray-300">Home</Link>
              </li>
              <li>
                <Link href="/#about" onClick={(e) => scrollToSection(e, 'about')} className="text-white hover:text-gray-300">About</Link>
              </li>
              <li>
                <Link href="/#gallery" onClick={(e) => scrollToSection(e, 'gallery')} className="text-white hover:text-gray-300">Packages</Link>
              </li>
              <li>
                <Link href="/#footer" onClick={(e) => scrollToSection(e, 'footer')} className="text-white hover:text-gray-300">Contact</Link>
              </li>
            </ul>
          </nav>
          <div className="flex items-center">
            <a
              href="tel:+911987654321"
              className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-rose-600 hover:bg-rose-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-rose-500"
            >
              Book Now
            </a>
            <button className="ml-4 md:hidden text-white">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;

