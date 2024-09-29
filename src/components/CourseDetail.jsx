import React from 'react';
import { useParams, Link } from 'react-router-dom';
import './CourseDetail.css';

const CourseDetail = ({ courses }) => {
  const { id } = useParams();
  const course = courses.find((course) => course.id === parseInt(id));

  if (!course) {
    return <p>Course not found.</p>;
  }

  return (
    <div className="course-detail">
      <h1>{course.title}</h1>
      <p><strong>Description:</strong> {course.description}</p>
      <p><strong>Instructor:</strong> {course.instructor}</p>
      <Link to="/courses" className="back-button">Back to Courses</Link>
      <Link to={`/edit-course/${course.id}`} className="edit-button">Edit Course</Link>
    </div>
  );
};

export default CourseDetail;
