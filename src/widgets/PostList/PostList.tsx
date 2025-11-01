import PostCard from '../../entities/post/ui/PostCard';

const posts = [
    { id: 1, title: 'Первый пост', content: 'Контент первого поста' },
    { id: 2, title: 'Второй пост', content: 'Контент второго поста' },
    { id: 3, title: 'Третий пост', content: 'Контент третьего поста' },
];

const PostList = () => {
    return (
        <div>
            {posts.map(post => (
                <PostCard key={post.id} title={post.title} content={post.content} />
            ))}
        </div>
    );
};

export default PostList;