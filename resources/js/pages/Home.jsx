// src/pages/Home.js or src/Home.js

import React from 'react';
import EventList from '../components/EventList';
import Hero from '../components/Hero';
import Header from '../components/Header'; 
import Testimonial from '../components/Testimonial';


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
