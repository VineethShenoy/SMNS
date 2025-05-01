import React from 'react';

const isMobileDevice = () => {
  return /Mobi|Android|iPhone|iPad/i.test(navigator.userAgent);
};

const handleCall = (phoneNumber) => (e) => {
  e.preventDefault();

  if (isMobileDevice()) {
    const confirmDial = window.confirm('You are about to be redirected to your dialer. Proceed?');
    if (confirmDial) {
      window.location.href = `tel:${phoneNumber}`;
    }
  } else {
    alert('Dialing is only supported on mobile devices.');
  }
};

const Team = () => {
  return (
    <section id="team" className="team">
      <div className="container">
        <h2 data-aos="fade-up">Team</h2>
        <div className="team-grid">
        <div
            className="team-advisor"
            data-aos="fade-up"
            data-aos-delay="400"
            onClick={handleCall('+919731019948')}
            style={{ cursor: 'pointer' }}
          >
            <h3>CA Srinidhi M M</h3>
            <p>+91-9731019948</p>
          </div>
          <div
              className="team-member"
              data-aos="fade-up"
              data-aos-delay="300"
              onClick={handleCall('+917204430790')}
              style={{ cursor: 'pointer' }}
              >
              <h3>CA Neelesh Shenoy K</h3>
              <p>+91-7204430790</p>
          </div>
       </div>
      </div>
    </section>
  );
};

export default Team;


