import React from 'react';

const NotFound = () => {
  return (
    <div style={{ textAlign: 'center', marginTop: '100px' }}>
      <h1 style={{ fontSize: '72px', color: 'red' }}>Oops!</h1>
      <p style={{ fontSize: '24px' }}>The page you're looking for doesn't exist.</p>
      <a href="/" style={{ fontSize: '18px', color: 'blue' }}>Go back to the homepage</a>
    </div>
  );
};

export default NotFound;