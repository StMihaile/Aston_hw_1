import React, { PropsWithChildren } from 'react';

const Footer: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <div style={{ marginTop: '10px', textAlign: 'right' }}>
      {children}
    </div>
  );
};

export default Footer;