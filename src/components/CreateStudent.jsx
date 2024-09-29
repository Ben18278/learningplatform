import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const CreateStudent = ({ addStudent }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [bio, setBio] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const newStudent = {
      id: Date.now(),
      name,
      email,
      bio,
    };
    addStudent(newStudent);
    navigate('/students'); // Redirect to students page after adding
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add Student</h2>
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
      <button type="submit">Add Student</button>
    </form>
  );
};

export default CreateStudent;
