'use client';

import { useState, useEffect } from 'react';
import { FaBars, FaTimes, FaWhatsapp } from 'react-icons/fa'; // Menggunakan react-icons

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const smoothScroll = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const href = e.currentTarget.getAttribute('href');
    const target = document.querySelector(href!);

    if (target) {
      const headerOffset = 100;
      const elementPosition = target.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }

    if (isMenuOpen) {
      setIsMenuOpen(false);
    }
  };

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      const btn = document.getElementById('mobile-menu-btn');
      const menu = document.getElementById('mobile-menu');

      if (
        isMenuOpen &&
        menu &&
        btn &&
        !menu.contains(event.target as Node) &&
        !btn.contains(event.target as Node)
      ) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener('click', handleOutsideClick);
    return () => {
      document.removeEventListener('click', handleOutsideClick);
    };
  }, [isMenuOpen]);

  // Gunakan kelas animate-in dan slide-in-from-top dari tailwindcss-animate
  const menuClasses = `md:hidden absolute top-full left-0 right-0 bg-white border-b shadow-lg z-40 origin-top 
    ${isMenuOpen ? 'animate-in slide-in-from-top duration-300 opacity-100' : 'scale-y-0 opacity-0 transition-all duration-300'}`;

  const Icon = isMenuOpen ? FaTimes : FaBars;

  return (
    <nav className="bg-white border-b shadow-sm fixed top-0 left-0 right-0 z-50">
      <div className="container mx-auto md:px-12 px-4 py-4 flex items-center justify-between">
        {/* Brand */}
        <a href="#home" onClick={smoothScroll} className="text-xl md:text-2xl font-bold text-gray-800 font-playfair">UndangKito</a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8 font-medium">
          <a href="#home" onClick={smoothScroll} className="text-gray-700 hover:text-gray-900 transition-colors">Home</a>
          <a href="#katalog" onClick={smoothScroll} className="text-gray-700 hover:text-gray-900 transition-colors">Katalog</a>
          <a href="#kontak" onClick={smoothScroll} className="text-gray-700 hover:text-gray-900 transition-colors">Kontak</a>
          <a href="https://wa.me/6281234567890" target="_blank" rel="noopener noreferrer" className="ml-4 flex items-center bg-green-500 text-white px-4 py-2 rounded-full hover:bg-green-600 transition-colors">
            <FaWhatsapp className="mr-2" /> Hubungi Kami
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button id="mobile-menu-btn" onClick={toggleMenu} className="md:hidden text-gray-700 focus:outline-none z-50 relative">
          <Icon className="text-2xl" />
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      <div id="mobile-menu" className={menuClasses}>
        <a href="#home" onClick={smoothScroll} className="block px-6 py-3 text-gray-700 hover:bg-gray-100 border-b">Home</a>
        <a href="#katalog" onClick={smoothScroll} className="block px-6 py-3 text-gray-700 hover:bg-gray-100 border-b">Katalog</a>
        <a href="#kontak" onClick={smoothScroll} className="block px-6 py-3 text-gray-700 hover:bg-gray-100 border-b">Kontak</a>
        <div className="p-4">
          <a href="https://wa.me/6281234567890" target="_blank" rel="noopener noreferrer" className="block px-4 py-3 text-white bg-green-500 hover:bg-green-600 rounded-full text-center">
            <FaWhatsapp className="mr-2 inline-block align-middle" /> Hubungi Kami
          </a>
        </div>
      </div>
    </nav>
  );
}