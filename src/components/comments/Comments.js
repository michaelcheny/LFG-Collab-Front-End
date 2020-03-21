import React from "react";
import Card from "react-bootstrap/Card";
import moment from "moment";
import CommentButtons from "./CommentButtons";

const Comments = ({ comments }) => {
  const renderComments = () => {
    if (comments) {
      return comments.map(comment => {
        const addDate = moment(comment.created_at).format(
          "MMM DD, YYYY, h:mma"
        );
        // const updatedDate = moment(comment.updated_at).format(
        //   "MMM DD, YYYY, h:mma"
        // );
        const updatedDate = moment(comment.updated_at)
          .startOf("hour")
          .fromNow();

        const renderDate = () => {
          return comment.created_at !== comment.updated_at
            ? addDate + " edited " + updatedDate
            : addDate;
        };

        return (
          <Card key={comment.id} className="comment-card">
            <Card.Body className="comment">
              <blockquote className="blockquote mb-0">
                <p> {comment.content} </p>
                <footer className="blockquote-footer">
                  <cite title="Source Title">
                    {comment.user.name} @ {renderDate()}
                    <span className="comment-buttons">
                      <CommentButtons
                        commentId={comment.id}
                        userId={comment.user_id}
                      />
                    </span>
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
