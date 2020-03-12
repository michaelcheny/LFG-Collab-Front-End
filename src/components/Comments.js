import React from "react";
import Card from "react-bootstrap/Card";

const Comments = ({ comments }) => {
  console.log(comments);

  const renderComments = () => {
    if (comments) {
      return comments.map(comment => (
        <Card key={comment.id}>
          <Card.Body>
            <blockquote className="blockquote mb-0">
              <p> {comment.content} </p>
              <footer className="blockquote-footer">
                <cite title="Source Title">{comment.user.name}</cite>
              </footer>
            </blockquote>
          </Card.Body>
        </Card>
      ));
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
