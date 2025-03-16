import React from "react";
import { FaLinkedin, FaBehance, FaWhatsapp } from "react-icons/fa"; // Import icons
import Logo from "/src/assets/logo.png"; // Corrected image path

export const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full z-40 bg-[rgba(10,10,10,0.8)] backdrop-blur-lg border-b border-white/10 shadow-lg">
      <div className="max-w-7xl mx-auto px-2 py-2">
        <div className="flex justify-between items-center h-16">
          {/* Logo & Name */}
          <div className="flex items-center space-x-2">
            <a href="#home" className="font-mono text-xl font-bold text-white">
              ROHIT JANGID
            </a>
            <img src={Logo} alt="UI/UX Logo" className="h-15 " />
          </div>

          {/* Mobile Menu Button */}
          <div className="w-7 h-5 relative cursor-pointer z-40 md:hidden">
            &#9776;
          </div>

          {/* Navigation Links (Icons & Resume Button) */}
          <div className="hidden md:flex items-center space-x-6">
            {/* Social Icons */}
            <a
              href="https://www.linkedin.com/in/your-profile"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-purple-500 transition-colors text-2xl"
            >
              <FaLinkedin />
            </a>

            <a
              href="https://www.behance.net/rohitjangid25"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-purple-500 transition-colors text-2xl"
            >
              <FaBehance />
            </a>

            <a
              href="https://wa.me/your-whatsapp-number"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-purple-500 transition-colors text-2xl"
            >
              <FaWhatsapp />
            </a>

            {/* Download Resume Button */}
            <a
          href="/Rohituiux.pdf" // Direct link to the resume
              download="Rohit_Jangid_Resume.pdf"
                  className="px-4 py-2 text-white border border-purple-500 rounded-lg hover:bg-purple-500 transition-colors" >
                 Download Resume
                </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
