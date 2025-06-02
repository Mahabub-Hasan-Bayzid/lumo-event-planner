import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FiMapPin, FiCalendar, FiClock, FiSearch, FiFilter } from 'react-icons/fi';

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
            <FiCalendar className="text-purple-300" />
            <span>{date}</span>
          </div>
          <div className="flex items-center gap-2">
            <FiMapPin className="text-purple-300" />
            <span>{location}</span>
          </div>
          <div className="flex items-center gap-2">
            <FiClock className="text-purple-300" />
            <span>8:00 PM</span>
          </div>
        </div>
        
        <div className="flex justify-between items-center">
          <span className="text-purple-300 font-medium">{price}</span>
          <button className="px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-full text-sm font-medium transition-colors duration-300 flex items-center gap-2">
            <FiMapPin /> Tickets
          </button>
        </div>
      </div>
    </motion.div>
  );
};

function EventList() {
  const [events, setEvents] = useState([]);
  const [filteredEvents, setFilteredEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [dateFilter, setDateFilter] = useState('all');
  const [showFilters, setShowFilters] = useState(false);

  // Sample event data
  const sampleEvents = [
    {
      id: 1,
      title: "Summer Music Festival",
      description: "The biggest music festival of the year featuring top artists from around the world. Three days of non-stop music and fun!",
      image: "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      date: "2023-06-10",
      location: "Espoo"
    },
    {
      id: 2,
      title: "Jazz Night Under the Stars",
      description: "An intimate evening of smooth jazz performances under the night sky. Featuring Grammy-winning artists.",
      image: "https://images.unsplash.com/photo-1415201364774-f6f0bb35f28f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      date: "2023-06-18",
      location: "Helsinki"
    },
    {
      id: 3,
      title: "Indie Band Showcase",
      description: "Discover the next big names in music at this exclusive indie band showcase event.",
      image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      date: "2023-06-23",
      location: "Vantaa"
    },
    {
      id: 4,
      title: "Classical Symphony",
      description: "Experience the beauty of classical music performed by the city's finest orchestra.",
      image: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      date: "2023-07-05",
      location: "Turku"
    },
    {
      id: 5,
      title: "Electronic Dance Night",
      description: "Dance the night away with top DJs from around the world in this electrifying event.",
      image: "https://images.unsplash.com/photo-1540039155733-5bb30b53aa14?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
      date: "2023-07-15",
      location: "Helsinki"
    },
    {
      id: 6,
      title: "Comedy Festival",
      description: "Laugh out loud with the funniest comedians in the country at this weekend festival.",
      image: "https://images.unsplash.com/photo-1551818255-e6e10975bc17?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2128&q=80",
      date: "2023-08-02",
      location: "Espoo"
    }
  ];

  useEffect(() => {
    fetch("/api/events")
      .then((res) => res.json())
      .then(data => {
        const eventsData = data.length > 0 ? data : sampleEvents;
        setEvents(eventsData);
        setFilteredEvents(eventsData);
        setLoading(false);
      })
      .catch(err => {
        console.error(err);
        setEvents(sampleEvents);
        setFilteredEvents(sampleEvents);
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    let results = events;

    // Apply search filter
    if (searchTerm) {
      results = results.filter(event =>
        event.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        event.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        event.location.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // Apply price filter
    if (priceFilter !== 'all') {
      const priceRanges = {
        'free': { min: 0, max: 0 },
        'under50': { min: 1, max: 49 },
        '50to100': { min: 50, max: 100 },
        'over100': { min: 101, max: Infinity }
      };
      
      const range = priceRanges[priceFilter];
      results = results.filter(event => 
        event.price >= range.min && event.price <= range.max
      );
    }

    // Apply date filter
    if (dateFilter !== 'all') {
      const today = new Date();
      today.setHours(0, 0, 0, 0);
      
      results = results.filter(event => {
        const eventDate = new Date(event.date);
        
        if (dateFilter === 'today') {
          return eventDate.toDateString() === today.toDateString();
        } else if (dateFilter === 'thisWeek') {
          const nextWeek = new Date(today);
          nextWeek.setDate(today.getDate() + 7);
          return eventDate >= today && eventDate <= nextWeek;
        } else if (dateFilter === 'thisMonth') {
          const nextMonth = new Date(today);
          nextMonth.setMonth(today.getMonth() + 1);
          return eventDate >= today && eventDate <= nextMonth;
        } else if (dateFilter === 'upcoming') {
          return eventDate >= today;
        }
        return true;
      });
    }

    setFilteredEvents(results);
  }, [searchTerm, priceFilter, dateFilter, events]);

  const formatDate = (dateString) => {
    const options = { weekday: 'short', month: 'short', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-US', options);
  };

  const formatPrice = (price) => {
    return price === 0 ? 'Free' : `From $${price}`;
  };

  return (
    <section className="py-20 px-5 bg-gradient-to-b from-black/90 to-purple-900/80">
      <div className="max-w-7xl mx-auto">
        <motion.h3 
          className="text-3xl md:text-4xl font-bold mb-4 text-white"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Events Near You
        </motion.h3>
        
        {/* Search and Filter Section */}
        <motion.div
          className="mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex flex-col md:flex-row gap-4">
            <div className="relative flex-grow">
              <FiSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 text-xl" />
              <input
                type="text"
                placeholder="Search events..."
                className="w-full pl-12 pr-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <button
              className="px-6 py-3 bg-white/10 hover:bg-white/20 border border-white/20 text-white rounded-full font-medium transition-colors duration-300 flex items-center justify-center gap-2"
              onClick={() => setShowFilters(!showFilters)}
            >
              <FiFilter /> Filters
            </button>
          </div>
          
          {/* Filter Dropdown */}
          {showFilters && (
            <motion.div
              className="mt-4 p-6 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="text-lg font-semibold text-white mb-3">Price Range</h4>
                  <div className="flex flex-wrap gap-3">
                    {['all', 'free', 'under50', '50to100', 'over100'].map((filter) => (
                      <button
                        key={filter}
                        className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-300 ${
                          priceFilter === filter
                            ? 'bg-purple-600 text-white'
                            : 'bg-white/10 text-gray-300 hover:bg-white/20'
                        }`}
                        onClick={() => setPriceFilter(filter)}
                      >
                        {filter === 'all' && 'All Prices'}
                        {filter === 'free' && 'Free'}
                        {filter === 'under50' && 'Under $50'}
                        {filter === '50to100' && '$50-$100'}
                        {filter === 'over100' && 'Over $100'}
                      </button>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h4 className="text-lg font-semibold text-white mb-3">Date</h4>
                  <div className="flex flex-wrap gap-3">
                    {['all', 'today', 'thisWeek', 'thisMonth', 'upcoming'].map((filter) => (
                      <button
                        key={filter}
                        className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-300 ${
                          dateFilter === filter
                            ? 'bg-purple-600 text-white'
                            : 'bg-white/10 text-gray-300 hover:bg-white/20'
                        }`}
                        onClick={() => setDateFilter(filter)}
                      >
                        {filter === 'all' && 'All Dates'}
                        {filter === 'today' && 'Today'}
                        {filter === 'thisWeek' && 'This Week'}
                        {filter === 'thisMonth' && 'This Month'}
                        {filter === 'upcoming' && 'Upcoming'}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </motion.div>
        
        {/* Results Count */}
        {!loading && (
          <p className="text-gray-400 mb-6">
            Showing {filteredEvents.length} {filteredEvents.length === 1 ? 'event' : 'events'}
          </p>
        )}
        
        {loading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[...Array(3)].map((_, i) => (
              <div key={i} className="bg-white/5 rounded-xl h-96 animate-pulse"></div>
            ))}
          </div>
        ) : filteredEvents.length === 0 ? (
          <motion.div
            className="text-center py-16"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-xl text-gray-300 mb-4">No events match your search criteria</p>
            <button 
              className="px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white rounded-full font-medium transition-colors duration-300"
              onClick={() => {
                setSearchTerm('');
                setPriceFilter('all');
                setDateFilter('all');
              }}
            >
              Clear filters
            </button>
          </motion.div>
        ) : (
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            {filteredEvents.map((event) => (
              <EventCard
                key={event.id}
                title={event.title}
                description={event.description}
                image_url={event.image}
                date={formatDate(event.date)}
                location={event.location}
                price={formatPrice(event.price)}
                onClick={() => console.log(event)}
              />
            ))}
          </motion.div>
        )}
      </div>
    </section>
  );
}

export default EventList;