import React from 'react';
import './Statistics.css';

const Statistics = () => {
  return (
    <section className="statistics">
      <h2>Our Achievements</h2>
      <div className="stats-grid">
        <div className="stat-card">
          <h3>50,000+</h3>
          <p>Students</p>
        </div>
        <div className="stat-card">
          <h3>10+</h3>
          <p>Courses</p>
        </div>
        <div className="stat-card">
          <h3>200+</h3>
          <p>Instructors</p>
        </div>
        <div className="stat-card">
          <h3>95%</h3>
          <p>Success Rate</p>
        </div>
      </div>
    </section>
  );
};

export default Statistics;
