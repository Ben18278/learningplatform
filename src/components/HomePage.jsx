import React from 'react';
import Header from './Header';
import HeroSection from './HeroSection';
import FeaturedCourses from './FeaturedCourses';
import Testimonials from './Testimonials';  // New import
import Statistics from './Statistics';      // New import
import Partners from './Partners';          // New import
import Newsletter from './Newsletter';      // New import
import Footer from './Footer';
import './HomePage.css';  // Assuming you'll style these sections

const HomePage = () => {
  return (
    <div>
      <Header />
      <HeroSection />
      <FeaturedCourses />
      <Statistics />        {/* New section for key statistics */}
      <Testimonials />      {/* New section for testimonials */}
      <Partners />          {/* New section for partners */}
      <Newsletter />        {/* New section for newsletter */}
      <Footer />
    </div>
  );
};

export default HomePage;
