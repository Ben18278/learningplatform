import React from 'react';
import './Testimonials.css';

const testimonialsData = [
  {
    id: 1,
    name: 'Alice Johnson',
    feedback: 'This platform completely transformed my career!',
    course: 'Web Development'
  },
  {
    id: 2,
    name: 'Bob Smith',
    feedback: 'Excellent instructors and easy-to-follow lessons.',
    course: 'Data Science'
  },
  {
    id: 3,
    name: 'Clara Lee',
    feedback: 'I loved the flexibility and depth of courses.',
    course: 'UX Design'
  }
];

const Testimonials = () => {
  return (
    <section className="testimonials">
      <h2>What Our Students Say</h2>
      <div className="testimonial-cards">
        {testimonialsData.map((testimonial) => (
          <div key={testimonial.id} className="testimonial-card">
            <p>"{testimonial.feedback}"</p>
            <h4>- {testimonial.name}, {testimonial.course}</h4>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
