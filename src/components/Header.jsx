import React, { useState, useEffect } from 'react';
import image from '../assets/flogo.png';
import { Link } from "react-router-dom";


const Header = ({ page }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navLinks = [
    { href: '/', label: 'Home', page: 'home' },
    { href: '/rewards', label: 'Rewards', page: 'rewards' },
    { href: '/register', label: 'Register', page: 'register' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-colors duration-300 ${
          isScrolled ? 'bg-[#8f211f]/50 backdrop-blur-sm' : 'bg-[#8f211f]'
        }`}
      >
        <div className="w-full max-w-md mx-auto flex justify-between items-center p-4">
          <div>
            <Link to="/">
            <img src={image} alt="logo" className="h-9" />
            </Link>
            
          </div>
          {page !== 'home' ? (
            <button className="text-white z-50" onClick={toggleMenu}>
              <svg
                className="w-8 h-8"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d={isMenuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16m-7 6h7'}
                ></path>
              </svg>
            </button>
          ) : (

            <Link to="/rewards">
            <button className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-black font-bold py-2 px-6 rounded-full">
              Join Now
            </button>
            </Link>
            
          )}
        </div>
      </header>

      {/* Slide-out Menu */}
      <div
        className={`fixed top-0 right-0 h-full w-[85%] bg-gradient-to-b from-[#5a0f0f] to-[#3b0b0b] z-40 transform transition-transform duration-300 ease-in-out ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <nav className="pt-32 pl-12 flex flex-col items-start space-y-8">
          {navLinks.map((link) => (
            
            <a
              key={link.href}
              className={`text-4xl font-extrabold transition-colors duration-300 ${
                page === link.page ? 'text-yellow-400' : 'text-white hover:text-yellow-300'
              }`}
            >
              <Link to={link.href}>
                {link.label}
            </Link>
              
            </a>
          ))}
        </nav>
      </div>

      {/* Backdrop */}
      {isMenuOpen && (
        <div
          className="fixed top-0 left-0 w-full h-full bg-black/50 z-30"
          onClick={toggleMenu}
        ></div>
      )}
    </>
  );
};
export default Header;
