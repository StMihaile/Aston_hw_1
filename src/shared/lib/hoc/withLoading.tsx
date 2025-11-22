import React from 'react';

const withLoading = <P extends object>(Component: React.ComponentType<P>) => {
  const Wrapper: React.FC<P & { isLoading?: boolean }> = ({ isLoading, ...props }) => {
    if (isLoading) {
      return <div>Загрузка...</div>;
    }
    return <Component {...(props as P)} />;
  };
  return Wrapper;
};

export default withLoading;