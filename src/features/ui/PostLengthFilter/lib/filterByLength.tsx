export const filterByLength = (posts, maxLength) => {
  return posts.filter(post => post.title.length <= maxLength);
};