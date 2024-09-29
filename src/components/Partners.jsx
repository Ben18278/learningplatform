import React from 'react';
import './Partners.css';

const partnersData = [
  { id: 1, logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-AAD2jIQT0p1MirMajjcczk0yaNbZTFnTwA&s', name: 'Tech Innovators' },
  { id: 2, logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJuuOyIhUsXGS-s9aUixSk_00Gu99fg66I4g&s', name: 'Creative Solutions' },
  { id: 3, logo: 'https://www.giantbomb.com/a/uploads/scale_medium/1/14242/322895-might_guy.jpg', name: 'Might Enterprises' },
  { id: 4, logo: 'https://images.immediate.co.uk/production/volatile/sites/3/2023/03/3e3d2-clickwallpapers-madara-uchiha-img3-scaled-Cropped-a3f2024.jpg?quality=90&resize=980,654', name: 'Uchiha Corp' }
];

const Partners = () => {
  return (
    <section className="partners">
      <h2>Our Trusted Partners</h2>
      <div className="partner-logos">
        {partnersData.map((partner) => (
          <div key={partner.id} className="partner-card">
            <img src={partner.logo} alt={`Partner ${partner.id}`} />
            <p>{partner.name}</p> {/* Display the partner name here */}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Partners;
