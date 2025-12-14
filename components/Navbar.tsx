'use client';

import { useState, useEffect } from 'react';
import { FaBars, FaTimes, FaWhatsapp } from 'react-icons/fa';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
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

  const menuClasses = `md:hidden absolute top-full left-0 right-0 bg-white border-b shadow-lg z-40 origin-top 
    ${isMenuOpen ? 'animate-in slide-in-from-top duration-300 opacity-100' : 'scale-y-0 opacity-0 transition-all duration-300'}`;

  const Icon = isMenuOpen ? FaTimes : FaBars;

  return (
    <nav className="bg-white border-b shadow-sm fixed top-0 left-0 right-0 z-50">
      <div className="container mx-auto md:px-12 px-4 py-4 flex items-center justify-between">
        {/* Brand */}
        <div className="flex items-center gap-2">
          <img className="" src="https://cdn.discordapp.com/attachments/1379755280371552358/1449781912221651185/image.png?ex=6940261f&is=693ed49f&hm=f750e2bc1bd59c42ab16d829157102d1eba94d86e2c0007825dbf20ec6c64d42&" alt="UndangKito Logo" width={40}/>
          <div >
            <a href="#home" className="text-xl md:text-2xl font-bold font-playfair flex items-center">
              <span className="text-black">Undang</span>
              <span className="text-pink-500">Kito</span>
            </a>
          </div>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8 font-medium">
          <a href="#home" className=" hover:text-black-900 transition-colors">Home</a>
          <a href="#katalog" className=" hover:text-black-900 transition-colors">Katalog</a>
          <a href="#kontak" className="hover:text-black-900 transition-colors">Kontak</a>
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
        <a
          href="#home"
          onClick={() => setIsMenuOpen(false)}
          className="block px-6 py-3 text-gray-700 hover:bg-gray-100 border-b"
        >
          Home
        </a>
        <a
          href="#katalog"
          onClick={() => setIsMenuOpen(false)}
          className="block px-6 py-3 text-gray-700 hover:bg-gray-100 border-b"
        >
          Katalog
        </a>
        <a
          href="#kontak"
          onClick={() => setIsMenuOpen(false)}
          className="block px-6 py-3 text-gray-700 hover:bg-gray-100 border-b"
        >
          Kontak
        </a>
        <div className="p-4">
          <a
            href="https://wa.me/6281234567890"
            target="_blank"
            rel="noopener noreferrer"
            className="block px-4 py-3 text-white bg-green-500 hover:bg-green-600 rounded-full text-center"
            onClick={() => setIsMenuOpen(false)}
          >
            <FaWhatsapp className="mr-2 inline-block align-middle" /> Hubungi Kami
          </a>
        </div>
      </div>
    </nav>
  );
}
