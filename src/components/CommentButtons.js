import React, { Component } from "react";
import { connect } from "react-redux";
import { deleteComment } from "../actions/commentActions";

class CommentButtons extends Component {
  constructor(props) {
    super(props);
    console.log(this.props);
  }

  renderButtons = () => {
    const { commentId, userId, user, deleteComment, token } = this.props;
    // only original commenter can edit or delete
    if (userId === user.id) {
      return (
        <>
          {" "}
          <span>edit</span> |{" "}
          <span
            onClick={() => {
              if (
                window.confirm("Are you sure you want to delete this comment?")
              )
                deleteComment(token, commentId);
            }}
          >
            delete
          </span>
        </>
      );
    }
  };

  render() {
    return <>{this.renderButtons()}</>;
  }
}

const mapStateToProps = ({ user, token }) => ({
  user: user.user,
  token: token.token
});

const mapDispatchToProps = dispatch => ({
  deleteComment: (token, commentId) => dispatch(deleteComment(token, commentId))
});

export default connect(mapStateToProps, mapDispatchToProps)(CommentButtons);
