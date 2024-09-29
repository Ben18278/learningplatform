import React, { useState, useEffect } from 'react';
import './UserDashboard.css';

const UserDashboard = ({ registeredCoursesCount, totalInstructors, totalStudents }) => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    // Fetch courses data
    fetch('/data/courses.json')
      .then((response) => response.json())
      .then((data) => {
        setCourses(data);
      })
      .catch((error) => console.error('Error fetching courses:', error));
  }, []);

  return (
    <div className="dashboard-container">
      <h1>My Dashboard</h1>

      {/* Overview Section */}
      <div className="overview">
        <div className="overview-card">
          <h3>Total Available Courses</h3>
          <p>{courses.length}</p>
        </div>
        <div className="overview-card">
          <h3>Registered Courses</h3>
          <p>{registeredCoursesCount}</p>
        </div>
        <div className="overview-card">
          <h3>Total Instructors</h3>
          <p>{totalInstructors}</p>
        </div>
        <div className="overview-card">
          <h3>Total Students</h3>
          <p>{totalStudents}</p>
        </div>
      </div>
    </div>
  );
};

export default UserDashboard;
