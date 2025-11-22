import React, { PropsWithChildren } from 'react';

const Body: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <div style={{ marginBottom: '10px' }}>
      {children}
    </div>
  );
};

export default Body;