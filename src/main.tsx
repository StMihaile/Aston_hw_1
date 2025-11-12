import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './app/App';
import { ThemeProvider } from './shared/lib/theme/ThemeContext.tsx';

createRoot(document.getElementById('root')!).render(
   <BrowserRouter>
      <ThemeProvider>
         <App />
      </ThemeProvider>
   </BrowserRouter>
)