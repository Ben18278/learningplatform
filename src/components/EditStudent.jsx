import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const EditStudent = ({ students, editStudent }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const student = students.find((student) => student.id === parseInt(id));
  
  const [name, setName] = useState(student?.name || '');
  const [email, setEmail] = useState(student?.email || '');
  const [bio, setBio] = useState(student?.bio || '');

  useEffect(() => {
    if (student) {
      setName(student.name);
      setEmail(student.email);
      setBio(student.bio);
    }
  }, [student]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedStudent = { id: student.id, name, email, bio };
    editStudent(updatedStudent);
    navigate('/students'); // Redirect to students page after editing
  };

  if (!student) return <p>Student not found</p>;

  return (
    <form onSubmit={handleSubmit}>
      <h2>Edit Student</h2>
      <div>
        <label>Name:</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Email:</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Bio:</label>
        <textarea
          value={bio}
          onChange={(e) => setBio(e.target.value)}
          required
        />
      </div>
      <button type="submit">Update Student</button>
    </form>
  );
};

export default EditStudent;
