import { useTheme } from '../../../shared/lib/theme/ThemeContext';

const ThemeSwitcher = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button onClick={toggleTheme} style={{ padding: '8px', cursor: 'pointer' }}>
      {theme === 'light' ? 'Тёмная тема' : 'Светлая тема'}
    </button>
  );
};

export default ThemeSwitcher;