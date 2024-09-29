import React, { useState } from 'react';
import './CreateCourse.css';

const CreateCourse = () => {
  const [courseName, setCourseName] = useState('');
  const [courseDescription, setCourseDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Submit the form or perform API call
    console.log('Course created:', courseName, courseDescription);
  };

  return (
    <div className="create-course-page">
      <h2>Create New Course</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="courseName">Course Name:</label>
        <input
          type="text"
          id="courseName"
          value={courseName}
          onChange={(e) => setCourseName(e.target.value)}
          required
        />

        <label htmlFor="courseDescription">Course Description:</label>
        <textarea
          id="courseDescription"
          value={courseDescription}
          onChange={(e) => setCourseDescription(e.target.value)}
          rows="5"
          required
        ></textarea>

        <button type="submit">Create Course</button>
      </form>
    </div>
  );
};

export default CreateCourse;
