import React from 'react';
import { FaInstagramSquare, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { IoLogoFacebook } from 'react-icons/io5';

const Footer = () => {
    return (
        <div className='mt-4'>
             <footer className="bg-gray-800 text-white py-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between items-center">
          {/* Website Name */}
          <div className="w-full sm:w-1/4 mb-4 sm:mb-0">
            <h2 className="text-2xl font-bold">Sports Zone</h2>
            <p className="text-sm mt-2">The best place for all your sports gear needs!</p>
          </div>

          {/* Contact Information */}
          <div className="w-full sm:w-1/4 mb-4 sm:mb-0">
            <h3 className="text-lg font-semibold mb-2">Contact Info</h3>
            <ul className="space-y-2 text-sm">
              <li>Email: support@equisports.com</li>
              <li>Phone: +123 456 7890</li>
              <li>Address: 123 Sports Ave, City, Country</li>
            </ul>
          </div>

          {/* Social Media Links */}
          <div className="w-full sm:w-1/4 mb-4 sm:mb-0">
            <h3 className="text-lg font-semibold mb-2">Follow Us</h3>
            <div className="flex space-x-4 text-lg">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600">
              <IoLogoFacebook />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">
              <FaTwitter />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-pink-500">
              <FaInstagramSquare />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-700">
              <FaLinkedin />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="text-center mt-10 text-sm">
          <p>&copy; {new Date().getFullYear()} EquiSports. All rights reserved.</p>
        </div>
      </div>
    </footer>
        </div>
    );
};

export default Footer;