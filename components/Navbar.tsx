'use client';

import Link from 'next/link';
import portfolioData from '@/data/portfolio.json';

interface NavbarProps {
  isMenuOpen: boolean;
  toggleMenu: () => void;
}

export default function Navbar({ isMenuOpen, toggleMenu }: NavbarProps) {
  const initials = portfolioData.name
    .split(' ')
    .map((n) => n[0])
    .join('');

  return (
    <header className="header-container">
      <div className="header-content">
        <div className="logo-section">
          <h1 className="logo-text">{initials}</h1>
          <div className="logo-divider"></div>
          <Link href="/" aria-label="Home">
            {/* Replaced img_subtract.svg with a simple div as asset not provided */}
            <div className="logo-icon bg-gray-300 rounded-full flex items-center justify-center text-sm font-bold text-black">
              P
            </div>
          </Link>
        </div>
        <button className="hamburger" aria-label="Menu" onClick={toggleMenu}>
          ☰
        </button>
        <nav className="nav-menu" role="menubar">
          <Link href="#hero" role="menuitem" className="nav-menu button">
            Home
          </Link>
          <Link href="#works" role="menuitem" className="nav-menu button">
            Work
          </Link>
          <Link href="#about" role="menuitem" className="nav-menu button">
            About
          </Link>
          <Link href="#skills" role="menuitem" className="nav-menu button">
            Skills
          </Link>
          {/* Contact in footer for this template */}
        </nav>
      </div>
      {/* Basic mobile menu overlay - not explicitly in template CSS but needed for hamburger functionality */}
      {isMenuOpen && (
        <div className="lg:hidden fixed inset-0 bg-white/95 backdrop-blur-sm z-50 flex flex-col items-center justify-center gap-6">
          <button className="absolute top-4 right-4 text-4xl" onClick={toggleMenu}>
            &times;
          </button>
          <Link href="#hero" className="font-dotgothic text-4xl text-black hover:text-template-blue" onClick={toggleMenu}>
            Home
          </Link>
          <Link href="#works" className="font-dotgothic text-4xl text-black hover:text-template-blue" onClick={toggleMenu}>
            Work
          </Link>
          <Link href="#about" className="font-dotgothic text-4xl text-black hover:text-template-blue" onClick={toggleMenu}>
            About
          </Link>
          <Link href="#skills" className="font-dotgothic text-4xl text-black hover:text-template-blue" onClick={toggleMenu}>
            Skills
          </Link>
        </div>
      )}
    </header>
  );
}