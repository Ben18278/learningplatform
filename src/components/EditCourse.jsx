import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const EditCourse = ({ courses, editCourse }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const course = courses.find(course => course.id === Number(id));

  const [title, setTitle] = useState(course.title);
  const [description, setDescription] = useState(course.description);
  const [instructor, setInstructor] = useState(course.instructor);

  const handleSubmit = (e) => {
    e.preventDefault();
    editCourse({ ...course, title, description, instructor });
    navigate('/courses'); // Navigate back to CoursesPage after editing
  };

  if (!course) return <div>Course not found!</div>;

  return (
    <div>
      <h2>Edit Course</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Title</label>
          <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
        </div>
        <div>
          <label>Description</label>
          <textarea value={description} onChange={(e) => setDescription(e.target.value)} />
        </div>
        <div>
          <label>Instructor</label>
          <input type="text" value={instructor} onChange={(e) => setInstructor(e.target.value)} />
        </div>
        <button type="submit">Update Course</button>
      </form>
    </div>
  );
};

export default EditCourse;
