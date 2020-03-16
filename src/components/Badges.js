import React from "react";
import Badge from "react-bootstrap/Badge";

export const CommentBadge = ({ comments }) => {
  return (
    <>
      <span role="img" aria-label="chat-bubble">
        💬
      </span>
      <Badge variant="light">{comments ? comments.length : 0}</Badge>
    </>
  );
};

export const LikeBadge = ({ reactions }) => {
  return (
    <>
      <span role="img" aria-label="heart">
        ❤️
      </span>
      <Badge variant="light">{reactions ? reactions.length : 0}</Badge>
    </>
  );
};
