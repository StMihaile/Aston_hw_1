import React from 'react';
import { NavLink } from 'react-router-dom';

const PostCard = ({ id, title, content }) => (
  <div style={{ border: '1px solid #c9e3eaff', padding: '15px', marginBottom: '15px' }}>
    <NavLink to={`/posts/${id}`}>
      <h3>{title}</h3>
    </NavLink>
    <p>{content}</p>
  </div>
);

export default PostCard;