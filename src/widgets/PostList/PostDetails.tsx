import React from 'react';

import CommentList from '../../widgets/CommentList/ui/CommentList';

const PostDetails = () => {
    const postData = {
        id: 1,
        title: 'Новый интересный пост',
        content: 'Детализированное содержание моего поста.'
    };

    const comments = [
        { id: 1, text: 'Комментарий 1', author: 'Пользователь 1' },
        { id: 2, text: 'Комментарий 2', author: 'Пользователь 2' },
        { id: 3, text: 'Ещё один комментарий', author: 'Пользователь 3' },
    ];

    return (
        <div>
            <h1>Детали поста</h1>
            <h2>Комментарии:</h2>
            <CommentList comments={comments} />
        </div>
    );
};

export default PostDetails;