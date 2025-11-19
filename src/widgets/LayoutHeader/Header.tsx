import ThemeSwitcher from '../../features/ui/ThemeSwitcher/ThemeSwitcher';
import AboutProjectModal from '../../features/ui/ThemeSwitcher/AboutProjectModal';
import styles from './Header.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>MiniPosts</div>
      <div className={styles.right}>
        <ThemeSwitcher />
        <AboutProjectModal />
      </div>
    </header>
  );
};
export default Header;