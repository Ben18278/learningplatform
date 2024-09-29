import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const CreateInstructor = ({ addInstructor }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [bio, setBio] = useState(''); // Add bio state
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const newInstructor = {
      id: Date.now(), // Unique ID
      name,
      email,
      bio, // Include bio
    };
    addInstructor(newInstructor); // Add instructor
    navigate('/instructors'); // Redirect
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add Instructor</h2>
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
      <button type="submit">Add Instructor</button>
    </form>
  );
};

export default CreateInstructor;
