import { createRoot } from 'react-dom/client'
import './index.css'
import App from './app/App'
import { ThemeProvider } from './shared/lib/theme/ThemeContext.tsx';

createRoot(document.getElementById('root')!).render(
   <ThemeProvider>
      <App />
    </ThemeProvider>
)
