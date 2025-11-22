import React, { useState, useCallback } from 'react';

export interface IComment {
  id: string | number;
  text: string;
  author: string;
}

interface Props {
  comments: IComment[];
}

const CommentList: React.FC<Props> = ({ comments }) => {
  const [expandedComments, setExpandedComments] = useState<Record<string, boolean>>({});

  const toggleExpand = useCallback(
    (commentId: string | number) => {
      setExpandedComments(prevState => ({
        ...prevState,
        [commentId]: !prevState[commentId]
      }));
    },
    []
  );

  return (
    <div>
      {comments.map(comment => (
        <div key={comment.id}>
          <button onClick={() => toggleExpand(comment.id)}>{expandedComments[comment.id] ? 'Скрыть' : 'Показать'}</button>
          {expandedComments[comment.id] && (
            <div>
              <strong>{comment.author}:</strong> {comment.text}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default CommentList;