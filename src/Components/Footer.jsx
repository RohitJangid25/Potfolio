import React from 'react';
import { FaInstagram, FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa";
import { SiBehance } from "react-icons/si";

const Footer = () => {
    return (
        <footer className="bg-gradient-to-r from-black to-black text-white py-10 px-6 md:px-20">
            <div className="max-w-7xl mx-auto text-center">
                <h2 className="text-2xl font-bold text-purple-400">Let's Connect</h2>
                <p className="text-gray-300 mt-2">
                    Feel free to reach out for collaborations and exciting projects!
                </p>
                <a
                    href="mailto:rohitjangid1345@gmail.com"
                    className="text-purple-400 hover:underline block mt-2 text-lg"
                >
                    📧 rohitjangid1345@gmail.com
                </a>

                {/* Social Media Icons */}
                <div className="flex justify-center gap-6 text-3xl mt-6">
                    <a 
                        href="https://www.linkedin.com/in/rohitjangid1345/" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="hover:text-gray-400 transition-transform transform hover:scale-110"
                    >
                        <FaLinkedin />
                    </a>
                    <a href="https://github.com/RohitJangid25" className="hover:text-gray-400 transition-transform transform hover:scale-110">
                        <FaGithub />
                    </a>
                    <a 
                        href="https://www.behance.net/rohitjangid25" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="hover:text-gray-400 transition-transform transform hover:scale-110"
                    >
                        <SiBehance />
                    </a>
                </div>

                {/* Copyright Section */}
                <div className="mt-6 border-t border-purple-700 pt-4">
                    <p className="text-gray-400 text-sm">© {new Date().getFullYear()} Rohit Jangid | All Rights Reserved</p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
