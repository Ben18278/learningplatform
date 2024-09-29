import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const EditInstructor = ({ instructors, editInstructor }) => {
  const { id } = useParams();
  const [instructor, setInstructor] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const foundInstructor = instructors.find((inst) => inst.id === parseInt(id));
    if (foundInstructor) {
      setInstructor(foundInstructor);
    }
  }, [id, instructors]);

  const handleUpdate = (e) => {
    e.preventDefault();
    editInstructor(instructor); // Update instructor
    navigate('/instructors'); // Redirect
  };

  if (!instructor) return <div>Loading...</div>;

  return (
    <form onSubmit={handleUpdate}>
      <h2>Edit Instructor</h2>
      <div>
        <label>Name:</label>
        <input
          type="text"
          value={instructor.name}
          onChange={(e) => setInstructor({ ...instructor, name: e.target.value })}
          required
        />
      </div>
      <div>
        <label>Email:</label>
        <input
          type="email"
          value={instructor.email}
          onChange={(e) => setInstructor({ ...instructor, email: e.target.value })}
          required
        />
      </div>
      <div>
        <label>Bio:</label>
        <textarea
          value={instructor.bio}
          onChange={(e) => setInstructor({ ...instructor, bio: e.target.value })}
          required
        />
      </div>
      <button type="submit">Update Instructor</button>
    </form>
  );
};

export default EditInstructor;
