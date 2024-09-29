import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './FeaturedCourses.css';

const FeaturedCourses = () => {
  const [courses, setCourses] = useState([]);
  const [featuredCourses, setFeaturedCourses] = useState([]);

  useEffect(() => {
    // Fetch courses data
    fetch('/data/courses.json')
      .then((response) => response.json())
      .then((data) => {
        setCourses(data);
        // Randomly select 3 courses to feature
        const randomCourses = data.sort(() => 0.5 - Math.random()).slice(0, 3);
        setFeaturedCourses(randomCourses);
      })
      .catch((error) => console.error('Error fetching courses:', error));
  }, []);

  return (
    <div className="featured-courses-container">
      <h2>Featured Courses</h2>
      <div className="featured-courses-grid">
        {featuredCourses.map((course) => (
          <div key={course.id} className="course-card">
            <h3>{course.title}</h3>
            <p>{course.description}</p>
            <Link to={`/course-detail/${course.id}`} className="view-details-button">
              View Details
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedCourses;
