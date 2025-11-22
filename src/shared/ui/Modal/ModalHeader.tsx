import React, { PropsWithChildren } from 'react';

const Header: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <div style={{ marginBottom: '10px', fontSize: '18px', fontWeight: 'bold' }}>
      {children}
    </div>
  );
};

export default Header;