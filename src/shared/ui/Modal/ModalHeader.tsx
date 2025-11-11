import React from 'react';

const Header = ({ children }) => {
  return (
    <div style={{ marginBottom: '10px', fontSize: '18px', fontWeight: 'bold' }}>
      {children}
    </div>
  );
};

export default Header;