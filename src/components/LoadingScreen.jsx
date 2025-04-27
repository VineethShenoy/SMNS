import React from 'react';

const LoadingScreen = ({ loading }) => {
  return (
    <div className={`loading-screen ${!loading ? 'fade-out' : ''}`}>
      <div className="loader"></div>
    </div>
  );
};

export default LoadingScreen; 