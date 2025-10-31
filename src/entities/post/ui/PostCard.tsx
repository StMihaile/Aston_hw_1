const PostCard = ({ title, content }) => {
  return (
    <div style={{ border: '1px solid #c9e3eaff', padding: '15px', marginBottom: '15px' }}>
      <h3>{title}</h3>
      <p>{content}</p>
    </div>
  );
};

export default PostCard;