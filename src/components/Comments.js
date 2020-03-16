import React from "react";
import Card from "react-bootstrap/Card";
import moment from "moment";

const Comments = ({ comments, currentUser }) => {
  // console.log(comments);

  const renderButtons = comment => {
    if (comment.user_id === currentUser.id) {
      return (
        <>
          <span> update </span>
          <span>delete</span>
        </>
      );
    }
  };

  const renderComments = () => {
    if (comments) {
      return comments.map(comment => {
        const addDate = moment(comment.created_at).format(
          "MMM DD, YYYY, H:mma"
        );
        console.log(comment);
        return (
          <Card key={comment.id} className="comment-card">
            <Card.Body className="comment">
              <blockquote className="blockquote mb-0">
                <p> {comment.content} </p>
                <footer className="blockquote-footer">
                  <cite title="Source Title">
                    {comment.user.name} @ {addDate}
                    <span class="">{renderButtons(comment)}</span>
                  </cite>
                </footer>
              </blockquote>
            </Card.Body>
          </Card>
        );
      });
    }
  };

  return <div>{renderComments()}</div>;
};

export default Comments;
