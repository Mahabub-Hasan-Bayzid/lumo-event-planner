import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FiMapPin, FiCalendar, FiClock } from 'react-icons/fi';

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
  const [loading, setLoading] = useState(true);

  // Sample event data
  const sampleEvents = [
    {
      id: 1,
      title: "Summer Music Festival",
      description: "The biggest music festival of the year featuring top artists from around the world. Three days of non-stop music and fun!",
      image: "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      date: "Fri, Jun 10",
      location: "Central Park",
      price: "From $99"
    },
    {
      id: 2,
      title: "Jazz Night Under the Stars",
      description: "An intimate evening of smooth jazz performances under the night sky. Featuring Grammy-winning artists.",
      image: "https://images.unsplash.com/photo-1415201364774-f6f0bb35f28f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      date: "Sat, Jun 18",
      location: "Riverside Amphitheater",
      price: "From $45"
    },
    {
      id: 3,
      title: "Indie Band Showcase",
      description: "Discover the next big names in music at this exclusive indie band showcase event.",
      image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      date: "Thu, Jun 23",
      location: "The Underground Club",
      price: "From $25"
    }
  ];

  useEffect(() => {
    fetch("/api/events")
      .then((res) => res.json())
      .then(data => {
        // Use sample data if API returns empty array
        setEvents(data.length > 0 ? data : sampleEvents);
        setLoading(false);
      })
      .catch(err => {
        console.error(err);
        // Use sample data if API fails
        setEvents(sampleEvents);
        setLoading(false);
      });
  }, []);

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
        
        {loading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[...Array(3)].map((_, i) => (
              <div key={i} className="bg-white/5 rounded-xl h-96 animate-pulse"></div>
            ))}
          </div>
        ) : (
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            {events.map((event, i) => (
              <EventCard
                key={i}
                title={event.title}
                description={event.description}
                image_url={event.image}
                date={event.date}
                location={event.location}
                price={event.price}
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