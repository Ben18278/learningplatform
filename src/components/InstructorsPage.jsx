import React from 'react';
import { Link } from 'react-router-dom';
import './InstructorsPage.css';

const InstructorsPage = ({ instructors, deleteInstructor }) => {
  return (
    <div className="instructors-page">
      <h1>Instructors</h1>
      <Link to="/create-instructor" className="add-button">Add New Instructor</Link>
      <div className="instructor-list">
        {instructors.length > 0 ? (
          instructors.map((instructor) => (
            <div key={instructor.id} className="instructor-card">
              <h3>{instructor.name}</h3>
              <p><strong>Bio:</strong> {instructor.bio}</p>
              <p><strong>Email:</strong> {instructor.email}</p> {/* Display email */}
              <div className="actions">
                <Link to={`/edit-instructor/${instructor.id}`} className="edit-link">Edit</Link>
                <button onClick={() => deleteInstructor(instructor.id)} className="delete-button">
                  Delete
                </button>
              </div>
            </div>
          ))
        ) : (
          <p>No instructors found. Please add a new instructor.</p>
        )}
      </div>
    </div>
  );
};

export default InstructorsPage;
