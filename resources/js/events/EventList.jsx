import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FiMapPin, FiCalendar, FiClock, FiSearch } from 'react-icons/fi';

const EventCard = ({ title, description, image_url, date, location, onClick }) => (
  <motion.div
    className="bg-white/5 backdrop-blur-sm rounded-xl overflow-hidden border border-white/10 hover:border-purple-400/30 transition-all duration-300 cursor-pointer"
    whileHover={{ y: -5 }}
    onClick={onClick}
  >
    <div className="h-48 overflow-hidden">
      <img
        src={image_url || 'https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?...'}
        alt={title}
        className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
      />
    </div>
    <div className="p-6">
      <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
      <p className="text-gray-300 mb-4 line-clamp-2">{description}</p>
      <div className="flex flex-wrap gap-4 text-sm text-gray-400 mb-4">
        <div className="flex items-center gap-2"><FiCalendar className="text-purple-300" />{date}</div>
        <div className="flex items-center gap-2"><FiMapPin className="text-purple-300" />{location}</div>
        <div className="flex items-center gap-2"><FiClock className="text-purple-300" />8:00 PM</div>
      </div>
      <button className="px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-full text-sm font-medium transition-colors duration-300 flex items-center gap-2">
        <FiMapPin /> Tickets
      </button>
    </div>
  </motion.div>
);

function EventList() {
  const [events, setEvents] = useState([]);
  const [filteredEvents, setFilteredEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');

  // Example fallback sample events
  const sampleEvents = [
    {
      id: 1,
      title: "Sample Concert",
      description: "An amazing live concert event.",
      image: "https://images.unsplash.com/photo-1501281668745-f7f57925c3b4",
      date: "2025-06-15T20:00:00",
      location: "New York City",
      price: "$50"
    },
    {
      id: 2,
      title: "Art Exhibition",
      description: "Explore stunning artworks from local artists.",
      image: "https://images.unsplash.com/photo-1494526585095-c41746248156",
      date: "2025-06-20T18:00:00",
      location: "San Francisco",
      price: "$30"
    },
    {
      id: 3,
      title: "Tech Meetup",
      description: "Discuss the latest in tech and innovation.",
      image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d",
      date: "2025-06-25T19:00:00",
      location: "Seattle",
      price: "Free"
    },
  ];

  useEffect(() => {
    fetch("/api/events")
      .then((res) => res.json())
      .then(data => {
        const result = data.length > 0 ? data : sampleEvents;
        setEvents(result);
        setFilteredEvents(result);
        setLoading(false);
      })
      .catch(() => {
        setEvents(sampleEvents);
        setFilteredEvents(sampleEvents);
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    if (!searchTerm) {
      setFilteredEvents(events);
    } else {
      const term = searchTerm.toLowerCase();
      const results = events.filter(event =>
        event.title.toLowerCase().includes(term) ||
        event.description.toLowerCase().includes(term) ||
        event.location.toLowerCase().includes(term)
      );
      setFilteredEvents(results);
    }
  }, [searchTerm, events]);

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      weekday: 'short', month: 'short', day: 'numeric'
    });
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

        <motion.div className="mb-8" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6 }}>
          <div className="relative max-w-md mx-auto">
            <FiSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 text-xl" />
            <input
              type="text"
              placeholder="Search events..."
              className="w-full pl-12 pr-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </motion.div>

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
              onClick={() => setSearchTerm('')}
            >
              Clear search
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
