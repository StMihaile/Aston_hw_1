import React from 'react';

const withLoading = (Component) => {
  const Wrapper = ({ isLoading, ...props }) => {
    if (isLoading) {
      return <div>Загрузка...</div>;
    }
    return <Component {...(props)} />;
  };
  return Wrapper;
};

export default withLoading;