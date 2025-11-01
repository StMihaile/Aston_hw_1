import ThemeSwitcher from '../../features/ui/ThemeSwitcher/ThemeSwitcher';
import AboutProjectModal from '../../features/ui/ThemeSwitcher/AboutProjectModal'
const Header = () => {
    return (
        <header>
            <h2>Приложение для отображения постов</h2>
            <ThemeSwitcher />
            <AboutProjectModal />
        </header>
    );
};

export default Header;