import React from "react";
import Badge from "react-bootstrap/Badge";

const CommentBadge = ({ comments }) => {
  return (
    <>
      <span role="img" aria-label="chat-bubble">
        💬
      </span>
      <Badge variant="light">{comments ? comments.length : 0}</Badge>
    </>
  );
};

export default CommentBadge;
