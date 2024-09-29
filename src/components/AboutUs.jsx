import React from 'react';
import './AboutUs.css'; // Ensure you create a matching CSS file

const AboutUs = () => {
  return (
    <div className="about-us-container">
      {/* Hero Section */}
      <div className="about-us-hero">
        <h1>About Us</h1>
        <p>Empowering learners worldwide with the future of online education.</p>
      </div>

      {/* Our Mission Section */}
      <section className="our-mission">
        <h2>Our Mission</h2>
        <p>
          Our mission is to democratize education by providing high-quality courses that help learners worldwide achieve their personal and professional goals. We believe in the power of knowledge and aim to make learning accessible to all.
        </p>
      </section>

      {/* Our Team Section */}
      <section className="our-team">
        <h2>Meet the Team</h2>
        <div className="team-grid">
          <div className="team-member">
            <img src="https://dragonball.guru/wp-content/uploads/2021/03/goku-profile-e1616173641804-400x400.png" alt="John Doe" />
            <h3>John Doe</h3>
            <p>Lead Instructor</p>
          </div>
          <div className="team-member">
            <img src="https://dragonball.guru/wp-content/uploads/2021/03/toppng.com-mystic-gohan-dragon-ball-z-gohan-1021x2859-1-e1617011806816-400x400.png" alt="Jane Smith" />
            <h3>Jane Smith</h3>
            <p>Course Developer</p>
          </div>
          <div className="team-member">
            <img src="https://dragonball.guru/wp-content/uploads/2021/03/vegeta-profile-400x400.png" alt="Emily White" />
            <h3>Emily White</h3>
            <p>UX/UI Designer</p>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="our-story">
        <h2>Our Story</h2>
        <p>
          We started as a small group of educators and developers passionate about technology and education. Over the years, we've grown into a platform trusted by thousands of learners around the world, offering courses that are relevant, engaging, and accessible.
        </p>
      </section>
    </div>
  );
};

export default AboutUs;
