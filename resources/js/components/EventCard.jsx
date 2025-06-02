import React, { useState, useEffect } from 'react';
import { FiMapPin, FiCalendar, FiClock, FiTicket } from 'react-icons/fi';


const EventCard = ({ title, description, image_url, date, location, price, onClick }) => {
    return (
      <motion.div
        className="bg-white/5 backdrop-blur-sm rounded-xl overflow-hidden border border-white/10 hover:border-purple-400/30 transition-all duration-300 cursor-pointer"
        whileHover={{ y: -5 }}
        onClick={onClick}
      >
        <div className="h-48 overflow-hidden">
          <img 
            src={image_url || 'https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80'} 
            alt={title}
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
          />
        </div>
        <div className="p-6">
          <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
          <p className="text-gray-300 mb-4 line-clamp-2">{description}</p>
          
          <div className="flex flex-wrap gap-4 text-sm text-gray-400 mb-4">
            <div className="flex items-center gap-2">
              <FiCalender className="text-purple-300" />
              <span>{date || 'Sat, May 25'}</span>
            </div>
            <div className="flex items-center gap-2">
              <FiMapPin className="text-purple-300" />
              <span>{location || 'Downtown Venue'}</span>
            </div>
            <div className="flex items-center gap-2">
              <FiClock className="text-purple-300" />
              <span>8:00 PM</span>
            </div>
          </div>
          
          <div className="flex justify-between items-center">
            <span className="text-purple-300 font-medium">{price || 'From $35'}</span>
            <button className="px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-full text-sm font-medium transition-colors duration-300 flex items-center gap-2">
              <FiTicket /> Tickets
            </button>
          </div>
        </div>
      </motion.div>
    );
  };
  