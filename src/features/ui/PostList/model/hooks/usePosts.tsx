import { useState, useEffect } from 'react';

const usePosts = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    try {
      const fetchedPosts = [
        { id: 1, title: 'Первый пост', content: 'Контент первого поста' },
        { id: 2, title: 'Второй пост тест', content: 'Контент второго поста' },
        { id: 3, title: 'Третий пост', content: 'Контент третьего поста' },
      ];
      setPosts(fetchedPosts);
      setLoading(false);
    } catch (e) {
      setError(e);
      setLoading(false);
    }
  }, []);

  return { posts, loading, error };
};

export default usePosts;