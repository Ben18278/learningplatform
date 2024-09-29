import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './StudentsPage.css';

const StudentsPage = ({ students, deleteStudent }) => {
  return (
    <div className="students-page">
      <h1>Students</h1>
      <Link to="/create-student" className="add-button">Add New Student</Link>
      <div className="student-list">
        {students.length > 0 ? (
          students.map((student) => (
            <div key={student.id} className="student-card">
              <h3>{student.name}</h3>
              <p><strong>Email:</strong> {student.email}</p>
              <p><strong>Bio:</strong> {student.bio}</p>
              <div className="actions">
                <Link to={`/edit-student/${student.id}`} className="edit-link">Edit</Link>
                <button
                  onClick={() => deleteStudent(student.id)}
                  className="delete-button"
                >
                  Delete
                </button>
              </div>
            </div>
          ))
        ) : (
          <p>No students found. Please add a new student.</p>
        )}
      </div>
    </div>
  );
};

export default StudentsPage;
