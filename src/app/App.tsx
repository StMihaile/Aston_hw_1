import React, { useState } from 'react';
import MainLayout from '../shared/layouts/MainLayout';
import AppRouter from './providers/router/Router';
const App = () => {
  const [maxLength, setMaxLength] = useState(20);
  return (
    <MainLayout>
      <AppRouter />
    </MainLayout>
  );
};

export default App;