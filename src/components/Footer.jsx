import React from 'react';
import { FaInstagramSquare, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { IoLogoFacebook } from 'react-icons/io5';

const Footer = () => {
    return (
        <div className="mt-4">
            <footer className="bg-gray-800 text-white py-8">
                <div className="container mx-auto px-4">
                    <div className="flex flex-wrap justify-between items-center">
                        {/* Logo and Website Info */}
                        <div className="w-full sm:w-1/4 mb-6 sm:mb-0 text-center sm:text-left">
                            <img 
                                src="https://i.ibb.co.com/ncPRPGv/log.jpg" 
                                alt="Sports Zone Logo" 
                                className="w-20 h-20 mx-auto sm:mx-0"
                            />
                            <h2 className="text-2xl font-bold mt-2">Sports Zone</h2>
                            <p className="text-sm mt-2">
                                The best place for all your sports gear needs!
                            </p>
                        </div>

                        {/* Navigation Links */}
                        <div className="w-full sm:w-1/4 mb-6 sm:mb-0 text-center sm:text-left">
                            <h3 className="text-lg font-semibold mb-2">Quick Links</h3>
                            <ul className="space-y-2 text-sm">
                                <li>
                                    <a href="/" className="hover:text-blue-400">Home</a>
                                </li>
                                <li>
                                    <a href="/allequipment" className="hover:text-blue-400"> All Equipment</a>
                                </li>
                                <li>
                                    <a href="/addequipment" className="hover:text-blue-400"> Add Equipment</a>
                                </li>
                                <li>
                                    <a href="/aboutus" className="hover:text-blue-400">About Us</a>
                                </li>
                                <li>
                                    <a href="/contact" className="hover:text-blue-400">Contact</a>
                                </li>
                            </ul>
                        </div>

                        {/* Contact Information */}
                        <div className="w-full sm:w-1/4 mb-6 sm:mb-0 text-center sm:text-left">
                            <h3 className="text-lg font-semibold mb-2">Contact Info</h3>
                            <ul className="space-y-2 text-sm">
                                <li>Email: contact@sportszone.com</li>
                                <li>Phone: +880-123-456789</li>
                                <li>Address: 123 Sports Zone Street, Dhaka</li>
                            </ul>
                        </div>

                        {/* Social Media Links */}
                        <div className="w-full sm:w-1/4 text-center sm:text-left">
                            <h3 className="text-lg font-semibold mb-2">Follow Us</h3>
                            <div className="flex justify-center sm:justify-start space-x-4 text-lg">
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
                        <p>&copy; {new Date().getFullYear()} Sports Zone. All rights reserved.</p>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Footer;
