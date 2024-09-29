import React from 'react';
import './HeroSection.css';  // Assuming the CSS file is named HeroSection.css
import Header from './Header';  // Importing the Header component

const HeroSection = () => {
  return (
    <div className="hero-section">
      <h1>Welcome to the Future of Learning</h1>
      <p>Explore our courses and start learning today!</p>
      
      {/* Add navigation links from Header.jsx below the "Explore Courses" button */}
      <div className="button-nav-wrapper">
        <Header />  {/* Renders the navigation links here */}
      </div>
    </div>
  );
};

export default HeroSection;
