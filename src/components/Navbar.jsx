
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import logo from '../assests/logo_image.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about' },
    { name: 'Products', href: '/products' },
    { name: 'Inquiry', href: '/inquiry' },
    { name: 'Contact', href: '/contact' },
  ];

  const isActive = (path) => pathname === path;

  const closeMenu = () => setIsOpen(false);

  // Close mobile menu on desktop resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) setIsOpen(false);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Prevent scrolling when mobile menu is open
  useEffect(() => {
    document.body.classList.toggle('overflow-hidden', isOpen);
  }, [isOpen]);

  return (
    <nav className="bg-white shadow-md fixed top-0 left-0 right-0 z-50" >
      <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-8">
        <div className="flex justify-between items-center  h-16">
          <Link href="/" className="flex items-center gap-2">
            <Image src={logo} alt="Logo" height={30} width={110} priority style={{ height: 'auto' }} />
          </Link>

          <div className="hidden md:flex items-center space-x-10">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`text-md font-medium transition duration-300 ${
                  isActive(item.href)
                    ? 'text-[#FF914D] border-b-2 border-[#FF914D]'
                    : 'text-gray-700 hover:text-[#FF914D]'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-[#FF914D] focus:outline-none"
              aria-label="Toggle Menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40"
          onClick={closeMenu}
          aria-hidden="true"
        />
      )}

      {/* Slide-in Mobile Menu */}
      <div
        className={`fixed top-0 left-0 h-full w-72 bg-white shadow-xl z-50 transform transition-transform duration-300 ease-in-out rounded-r-2xl ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full p-6 space-y-6">
          <div className="flex justify-between items-center">
            <span className="text-xl text-[var(--color-text)] font-semibold">Menu</span>
            <button
              onClick={closeMenu}
              aria-label="Close Menu"
              className="text-gray-600 hover:text-[#FF914D] focus:outline-none"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          <nav className="flex flex-col flex-grow space-y-4 mt-6">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`block px-4 py-3 rounded-lg font-medium text-lg transition ${
                  isActive(item.href)
                    ? 'bg-[#FF914D]/10 text-[#FF914D] shadow-md'
                    : 'text-gray-800 hover:text-[#FF914D] hover:bg-gray-100'
                }`}
                onClick={closeMenu}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          <div className="mt-auto text-center text-sm text-gray-500">
            &copy; {new Date().getFullYear()} Hari Om Oil Trading
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
