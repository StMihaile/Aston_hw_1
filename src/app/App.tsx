import React, { useState } from 'react';
import MainLayout from '../shared/layouts/MainLayout';
import PostList from '../widgets/PostList/PostList';
import PostLengthFilter from '../features/ui/PostLengthFilter/ui/PostLengthFilter';
const App = () => {
    const [maxLength, setMaxLength] = useState(20);
    return (
        <MainLayout>
            <h1>Список Постов</h1>
            <PostLengthFilter setMaxLength={setMaxLength} />
            <hr />
            <PostList maxLength={maxLength} />
        </MainLayout>
    );
};

export default App;