import React from 'react';
import {
  FaFacebookF,
  FaLinkedinIn,
  FaYoutube,
  FaInstagram,
} from 'react-icons/fa';

import { useNavigate, Link } from 'react-router-dom';



function Footer() {

  const navigate = useNavigate()
  const handleContact = () => {
    navigate('/contact#top');
  }

  const handleGetStarted = () => {
    navigate('/events/create')
  }
  return (
    <footer className="bg-gray-900 text-white">
      {/* Top CTA Section */}
      <div className="container mx-auto px-4 py-12 lg:py-16 border-b border-gray-800">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">For assistance</h2>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to='/events/create' className="px-8 py-3 bg-purple-600 hover:bg-purple-700 text-white rounded-full font-medium transition-colors duration-300">
              Get started
            </Link>
            <Link to='/contact' className="px-8 py-3 bg-transparent border-2 border-white hover:bg-white hover:text-gray-900 text-white rounded-full font-medium transition-colors duration-300">
              Contact us
            </Link>
          </div>
        </div>
      </div>

      {/* Main Footer Section */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Branding and Socials */}
          <div className="md:col-span-1">
            <h3 className="text-2xl font-bold mb-4 text-purple-400">LUMO PLANNER</h3>
            <p className="text-gray-400 mb-6">Your ultimate event planning companion</p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                <FaFacebookF className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                <FaLinkedinIn className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                <FaYoutube className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                <FaInstagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Link Columns */}
          <div className="md:col-span-3 grid grid-cols-2 md:grid-cols-3 gap-8">
            <div className="footer-column">
              <h4 className="text-lg font-semibold mb-4 text-white">Explore</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">Home</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">About</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">Events</a></li>
              </ul>
            </div>
            <div className="footer-column">
              <h4 className="text-lg font-semibold mb-4 text-white">Legal</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">Privacy Policy</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">Terms of Service</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">Cookie Policy</a></li>
              </ul>
            </div>
            <div className="footer-column">
              <h4 className="text-lg font-semibold mb-4 text-white">Support</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">Help Center</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">Community</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">Contact Us</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="bg-gray-800 py-6">
        <div className="container mx-auto px-4 text-center text-gray-400">
          © {new Date().getFullYear()} Lumo Planner. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer;