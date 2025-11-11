import React from 'react';

const Footer = ({ children }) => {
  return (
    <div style={{ marginTop: '10px', textAlign: 'right' }}>
      {children}
    </div>
  );
};

export default Footer;