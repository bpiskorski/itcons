import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './components/home';

import LongBar from './components/LongBar';
import MobileServices from './components/MobileServices';
import Navbar from './components/Navbar';
import Pricing from './components/Pricing';
import Contact from './components/Contact';
import AboutUs from './components/AboutUs';

const App = () => {
  return (
    <Router>


      <LongBar />
      <Navbar />

      <Routes>
        <Route index element={<Home />} />
        <Route path="contact" element={<Contact />} />
        <Route path="mobile-services" element={<MobileServices />} />
        <Route path="pricing" element={<Pricing />} />
        <Route path="aboutus" element={<AboutUs />} />

      </Routes>
    </Router>

  );
};

export default App;
