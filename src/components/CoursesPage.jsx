import React from 'react';
import { Link } from 'react-router-dom';
import './CoursesPage.css';

const CoursesPage = ({ 
  courses, 
  deleteCourse, 
  addToSchedule, 
  studentSchedule, 
  removeFromSchedule 
}) => {
  return (
    <div className="courses-page">
      <h1>Courses</h1>

      {/* Student Schedule Section at the Top */}
      <div className="student-schedule">
        <h2>Student Schedule</h2>
        {studentSchedule.length === 0 ? (
          <p>No courses added to schedule.</p>
        ) : (
          <table>
            <thead>
              <tr>
                <th>Course Title</th>
                <th>Instructor</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {studentSchedule.map(course => (
                <tr key={course.id}>
                  <td>{course.title}</td>
                  <td>{course.instructor}</td>
                  <td>
                    <button onClick={() => removeFromSchedule(course.id)} className="remove">Remove</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>

      <div className="courses-list">
        {courses.map(course => (
          <div className="course-card" key={course.id}>
            <h3>{course.title}</h3>
            <p>{course.description}</p>
            <Link to={`/course-detail/${course.id}`}>View Detail</Link>
            <button onClick={() => deleteCourse(course.id)} className="delete">Delete</button>
            <button onClick={() => addToSchedule(course.id)}>Add to Schedule</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CoursesPage;
