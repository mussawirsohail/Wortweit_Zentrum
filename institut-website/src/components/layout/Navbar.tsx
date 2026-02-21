'use client';

import Link from 'next/link';
import { useState } from 'react';
import { FaBars, FaTimes, FaSun, FaMoon } from 'react-icons/fa';
import { useTheme } from '@/context/ThemeContext';

const Navbar = () => {
  const { darkMode, toggleDarkMode } = useTheme();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full z-50 bg-background/80 backdrop-blur-md border-b border-border-subtle">
      <div className="container">
        <div className="flex justify-between items-center h-20">
          <Link href="/" className="flex-shrink-0">
            <span className="text-lg font-medium tracking-tight">Wortweit Zentrum</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-10">
            <Link href="/" className="text-sm text-muted hover:text-foreground transition-colors duration-200">Home</Link>
            <Link href="/languages" className="text-sm text-muted hover:text-foreground transition-colors duration-200">Languages</Link>
            <Link href="/about" className="text-sm text-muted hover:text-foreground transition-colors duration-200">About</Link>
            <Link href="/faq" className="text-sm text-muted hover:text-foreground transition-colors duration-200">FAQ</Link>
            <Link href="/contact" className="text-sm text-muted hover:text-foreground transition-colors duration-200">Contact</Link>

            <div className="flex items-center space-x-4 pl-6 border-l border-border-subtle">
              <button
                onClick={toggleDarkMode}
                className="p-2 rounded-full hover:bg-accent-light transition-colors duration-200"
                aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
              >
                {darkMode ? <FaSun size={16} /> : <FaMoon size={16} />}
              </button>
              
              <Link href="/enroll" className="btn-primary">
                Enroll Now
              </Link>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-4">
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-full hover:bg-accent-light transition-colors duration-200"
              aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
            >
              {darkMode ? <FaSun size={16} /> : <FaMoon size={16} />}
            </button>
            
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 focus:outline-none"
              aria-expanded="false"
            >
              {isOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-surface border-t border-border-subtle">
          <div className="px-6 py-4 space-y-3">
            <Link href="/" className="block py-2 text-sm text-muted hover:text-foreground" onClick={() => setIsOpen(false)}>Home</Link>
            <Link href="/languages" className="block py-2 text-sm text-muted hover:text-foreground" onClick={() => setIsOpen(false)}>Languages</Link>
            <Link href="/about" className="block py-2 text-sm text-muted hover:text-foreground" onClick={() => setIsOpen(false)}>About</Link>
            <Link href="/faq" className="block py-2 text-sm text-muted hover:text-foreground" onClick={() => setIsOpen(false)}>FAQ</Link>
            <Link href="/contact" className="block py-2 text-sm text-muted hover:text-foreground" onClick={() => setIsOpen(false)}>Contact</Link>
            <div className="pt-4 border-t border-border-subtle">
              <Link href="/enroll" className="btn-primary w-full" onClick={() => setIsOpen(false)}>
                Enroll Now
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
