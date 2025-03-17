import React, { useState } from "react";
import { FaLinkedin, FaBehance, FaWhatsapp, FaBars, FaTimes, FaDownload } from "react-icons/fa"; // Import icons
import Logo from "/src/assets/logo.png"; // Correct image path

export const Navbar = () => { 
  const [menuOpen, setMenuOpen] = useState(false); // State for mobile menu

  return (
    <nav className="fixed top-0 w-full z-50 bg-[rgba(10,10,10,0.8)] backdrop-blur-lg border-b border-white/10 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 py-2 flex justify-between items-center">
        
        {/* Logo & Name */}
        <div className="flex items-center space-x-2">
          <a href="#home" className="font-mono text-xl font-bold text-white">
            ROHIT JANGID
          </a>
          <img src={Logo} alt="Logo" className="h-10 w-auto" />
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden text-white text-2xl cursor-pointer" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <FaTimes /> : <FaBars />} {/* Toggle Menu Icon */}
        </div>

        {/* Navigation Links (For larger screens) */}
        <div className="hidden md:flex items-center space-x-6">
          <a href="https://www.linkedin.com/in/rohitjangid1345/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-purple-500 transition-colors text-2xl">
            <FaLinkedin />
          </a>

          <a href="https://www.behance.net/rohitjangid25" target="_blank" rel="noopener noreferrer" className="text-white hover:text-purple-500 transition-colors text-2xl">
            <FaBehance />
          </a>

          <a href= {`https://wa.me/${9588201345}`} target="_blank" rel="noopener noreferrer" className="text-white hover:text-purple-500 transition-colors text-2xl">
            <FaWhatsapp />
          </a>

          {/* Download Resume Button */}
          <a href="/Rohituiux.pdf" download="Rohit_Jangid_Resume.pdf" className="flex items-center gap-2 px-4 py-2 text-white border border-purple-500 rounded-lg hover:bg-purple-500 transition-colors">
            <FaDownload /> Resume
          </a>
        </div>
      </div>

      {/* Mobile Dropdown Menu (For smaller screens) */}
      {menuOpen && (
        <div className="md:hidden absolute top-16 left-0 w-full bg-black bg-opacity-90 backdrop-blur-lg flex flex-col items-center py-4 space-y-4">
          <a href="https://www.linkedin.com/in/rohitjangid1345/" target="_blank" rel="noopener noreferrer" className="text-white text-lg flex items-center gap-2">
            <FaLinkedin /> LinkedIn
          </a>
          <a href="https://www.behance.net/rohitjangid25" target="_blank" rel="noopener noreferrer" className="text-white text-lg flex items-center gap-2">
            <FaBehance /> Behance
          </a>
          <a href= {`https://wa.me/${9588201345}`} target="_blank" rel="noopener noreferrer" className="text-white text-lg flex items-center gap-2">
            <FaWhatsapp /> WhatsApp
          </a>
          <a href="/Rohituiux.pdf" download="Rohit_Jangid_Resume.pdf" className="text-white text-lg flex items-center gap-2 border border-purple-500 px-4 py-2 rounded-lg hover:bg-purple-500">
            <FaDownload /> Resume
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
