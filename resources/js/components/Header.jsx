import { useState, useEffect } from 'react';
import { FiMenu, FiX, FiSearch } from 'react-icons/fi';
import { motion, AnimatePresence } from 'framer-motion';

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const links = [
    { id: '1', name: 'Home', link: '/' },
    { id: '2', name: 'Events', link: '/events' },
    { id: '3', name: 'Create event', link: '/events/create' },
    { id: '4', name: 'About', link: '/about' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = () => {
    if (window.innerWidth < 1024) setIsOpen(false);
  };

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-gray-900 shadow-lg py-2' : 'bg-transparent py-4'}`}>
      <div className="container mx-auto px-4">
        <nav className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center z-50">
            <img 
              src="/images/logo.png" 
              alt="Logo" 
              className="h-10 lg:h-12 transition-all duration-300" 
            />
          </div>

          {/* Desktop Navigation */}
          <ul className="hidden lg:flex items-center space-x-8">
            {links.map((link) => (
              <li key={link.id}>
                <a
                  href={link.link}
                  className="text-white hover:text-purple-400 font-medium transition-colors duration-300 relative group"
                >
                  {link.name}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-purple-400 transition-all duration-300 group-hover:w-full"></span>
                </a>
              </li>
            ))}
            <li>
              <button className="ml-4 flex items-center text-white hover:text-purple-400">
                <FiSearch className="w-5 h-5" />
              </button>
            </li>
          </ul>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-white focus:outline-none z-50"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <FiX className="w-6 h-6" />
            ) : (
              <FiMenu className="w-6 h-6" />
            )}
          </button>
        </nav>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, x: '100%' }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: '100%' }}
              transition={{ type: 'spring', damping: 25 }}
              className="lg:hidden fixed inset-0 bg-gray-900 z-40 pt-24 px-6"
            >
              <ul className="flex flex-col space-y-6">
                {links.map((link) => (
                  <li key={link.id}>
                    <a
                      href={link.link}
                      className="block text-white hover:text-purple-400 text-2xl font-medium py-2 transition-colors duration-300"
                      onClick={handleLinkClick}
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
                <li className="mt-8">
                  <div className="relative">
                    <FiSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
                    <input
                      type="text"
                      placeholder="Search events..."
                      className="w-full pl-12 pr-4 py-3 bg-gray-800 rounded-full text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-400"
                    />
                  </div>
                </li>
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}

export default Header;