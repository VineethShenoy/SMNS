import React from 'react';

const About = () => {
  return (
    <section id="about" className="about">
      <div className="container">
        <h2 data-aos="fade-up">About Us</h2>
        <div className="about-content" data-aos="fade-up" data-aos-delay="100">
          <div className="about-text">
            <p>Here at <strong>S M N S And Associates</strong> we’re dedicated to
                transforming the way businesses and individuals approach financial management,
                taxation, and compliance. We offer a wide array of professional services to
                businesses, individuals, and organizations, covering areas like auditing, taxation,
                financial planning, compliance, and consultancy.</p>
          </div>
          <div className="about-stats">
            <div className="stat-item" data-aos="fade-up" data-aos-delay="200">
              <h3>90%</h3>
              <p>Processes Optimized for Efficiency</p>
            </div>
            <div className="stat-item" data-aos="fade-up" data-aos-delay="300">
              <h3>500+</h3>
              <p>Ideas Ready for Development</p>
            </div>
            <div className="stat-item" data-aos="fade-up" data-aos-delay="400">
              <h3>1000+</h3>
              <p>Hours Invested in Research & Planning</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
