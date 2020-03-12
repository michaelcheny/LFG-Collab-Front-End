import React from "react";

const Comments = ({ comments }) => {
  console.log(comments);

  const renderComments = () => {
    if (comments) {
      return comments.map(comment => {
        return <div>{comment.content}</div>;
      });
    }
  };

  return (
    <div>
      {renderComments()}
      {/* {comments.map(comment => {
        return <div>comment.content</div>;
      })}
      <br /> */}
    </div>
  );
};

export default Comments;
