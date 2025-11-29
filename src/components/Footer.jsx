import React, { useState, useEffect } from 'react';
import { FaWhatsapp } from 'react-icons/fa';




const Footer = () => {
  

  return (
   <footer className="w-full max-w-md text-center text-white py-4">
        <div className="border-t border-red-500 mb-4"></div>
        <FaWhatsapp className="text-yellow-400 text-4xl mx-auto mb-2" />
        <p className="text-sm">&copy; 2025 FortuneX. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
