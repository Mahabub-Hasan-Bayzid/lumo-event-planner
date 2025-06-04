// src/pages/Home.js or src/Home.js

import React from 'react';
import Hero from '../components/Hero';
import Header from '../components/Header'; 
import Testimonial from '../components/Testimonial';
import EventList from '../events/EventList';


const Home = () => {
  return (
    <div>
      <Hero />
      <EventList />
      <Testimonial />
    </div>
  );
};

export default Home;
