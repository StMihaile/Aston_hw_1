import MainLayout from '../shared/layouts/MainLayout';
import PostList from '../widgets/PostList/PostList';

const App = () => {
    return (
        <MainLayout>
            <h1>Список Постов</h1>
            <PostList />
        </MainLayout>
    );
};

export default App;