import { Post } from '../../../../entities/post/model/types';

export const filterByLength = (posts: Post[], maxLength: number): Post[] => {
  return posts.filter(post => post.title.length <= maxLength);
};