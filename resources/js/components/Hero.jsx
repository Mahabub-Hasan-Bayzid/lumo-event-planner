import React, { useState } from 'react';
import { FiSearch, FiArrowRight, FiCalendar, FiMapPin, FiStar } from 'react-icons/fi';
import { motion } from 'framer-motion';

const Hero = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [isHovered, setIsHovered] = useState(false);

  const handleSearch = () => {
    alert(`Searching for events: ${searchQuery}`);
  };

  return (
    <section className="relative h-screen w-full overflow-hidden flex flex-col items-center justify-center text-center px-5 pt-20">
      {/* Background image with overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1492684223066-81342ee5ff30?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
          alt="Concert background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-purple-900/60"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl">
        <motion.h1 
          className="text-5xl md:text-6xl font-bold mb-6 text-white"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Discover Unforgettable <span className="text-purple-400">Experiences</span>
        </motion.h1>
        
        <motion.p 
          className="text-xl md:text-2xl mb-10 text-gray-200 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Your journey to amazing events starts here. Find concerts, festivals, and more in your city.
        </motion.p>
        
       



        /* <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center w-full mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >

          <motion.button
            className="px-8 py-4 bg-purple-600 hover:bg-purple-700 text-white rounded-full font-medium flex items-center justify-center gap-2 transition-colors duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleSearch}
          >
            Getting started <FiArrowRight />
          </motion.button>
        </motion.div>











      </div> */

      {/* Floating icons */}
      /* <motion.div 
        className="absolute top-1/4 left-10 text-yellow-400 text-2xl"
        animate={{
          y: [0, -15, 0],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <FiStar />
      </motion.div>
      
      <motion.div 
        className="absolute top-1/3 right-20 text-purple-300 text-3xl"
        animate={{
          y: [0, 15, 0],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 0.5
        }}
      >
        <FiCalendar />
      </motion.div> */


      
      
      /* <motion.div 
        className="absolute bottom-1/4 left-1/4 text-blue-300 text-2xl"
        animate={{
          y: [0, -10, 0],
          rotate: [0, 10, 0]
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 0.3
        }}
      >
        <FiMapPin />
      </motion.div> */
      
      /* <motion.div 
        className="absolute bottom-1/3 right-1/4 text-pink-300 text-3xl"
        animate={{
          y: [0, 10, 0],
          rotate: [0, -10, 0]
        }}
        transition={{
          duration: 5.5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 0.7
        }}
      >
        <FiStar />
      </motion.div> */
    </section>
  );
};

export default Hero;