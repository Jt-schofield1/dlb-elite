'use client';
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <>
      <nav className="bg-black text-white px-4 sm:px-6 py-4 fixed w-full z-50 shadow-lg">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <Link href="/" className="flex items-center" onClick={closeMenu}>
            <Image src="/logo.png" alt="DLB Elite" width={45} height={45} className="rounded-lg" />
          </Link>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-6">
            <Link href="/about" className="hover:text-yellow-400 transition-colors duration-200 font-medium">
              About
            </Link>
            <Link href="/training" className="hover:text-yellow-400 transition-colors duration-200 font-medium">
              Training
            </Link>
            <Link href="/gallery" className="hover:text-yellow-400 transition-colors duration-200 font-medium">
              Gallery
            </Link>
            <Link href="/contact" className="hover:text-yellow-400 transition-colors duration-200 font-medium">
              Contact
            </Link>
          </div>
          
          {/* Mobile menu button */}
          <button 
            className="md:hidden flex flex-col space-y-1 w-8 h-8 justify-center items-center"
            onClick={toggleMenu}
            aria-label="Toggle navigation menu"
          >
            <span className={`w-6 h-0.5 bg-white block transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
            <span className={`w-6 h-0.5 bg-white block transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
            <span className={`w-6 h-0.5 bg-white block transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 bg-black bg-opacity-90 z-40 md:hidden transition-opacity duration-300 ${isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
        <div className={`flex flex-col items-center justify-center h-full space-y-8 text-white transform transition-transform duration-300 ${isMenuOpen ? 'translate-y-0' : '-translate-y-full'}`}>
          <Link 
            href="/about" 
            className="text-2xl font-medium hover:text-yellow-400 transition-colors duration-200"
            onClick={closeMenu}
          >
            About
          </Link>
          <Link 
            href="/training" 
            className="text-2xl font-medium hover:text-yellow-400 transition-colors duration-200"
            onClick={closeMenu}
          >
            Training
          </Link>
          <Link 
            href="/gallery" 
            className="text-2xl font-medium hover:text-yellow-400 transition-colors duration-200"
            onClick={closeMenu}
          >
            Gallery
          </Link>
          <Link 
            href="/contact" 
            className="text-2xl font-medium hover:text-yellow-400 transition-colors duration-200"
            onClick={closeMenu}
          >
            Contact
          </Link>
        </div>
      </div>
    </>
  );
} 