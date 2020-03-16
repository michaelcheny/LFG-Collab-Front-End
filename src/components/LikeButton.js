import React, { Component } from "react";
import { connect } from "react-redux";
import Button from "react-bootstrap/Button";
import Badge from "react-bootstrap/Badge";
import { createReaction, deleteReaction } from "../actions/reactionActions";

class LikeButton extends Component {
  handleProjectReaction = () => {
    const { incrementLike, unLike, project, token, user } = this.props;

    // Grabs all the current user's reactions
    let myReaction = project.reactions.filter(reaction => {
      // let myReaction = project.reactions.filter(reaction => {
      return reaction.user_id === user.id;
    });
    // if user already liked, then it will unlike
    if (myReaction.length > 0) {
      myReaction.forEach(r => {
        unLike(token, r.id);
      });
    } else {
      incrementLike(project.id, token);
    }
  };

  render() {
    const { project, authenticated } = this.props;

    return (
      <>
        <Button
          className="button"
          variant="dark"
          disabled={!authenticated}
          size="sm"
          onClick={this.handleProjectReaction}
        >
          <span role="img" aria-label="heart">
            ❤️
          </span>{" "}
          <Badge variant="light">
            {/* {project.reactions ? project.reactions.length : 0} */}
            {project.reactions ? project.reactions.length : 0}
          </Badge>
        </Button>
      </>
    );
  }
}

const mapStateToProps = ({ token, user, projects }) => ({
  token: token.token,
  user: user.user,
  authenticated: user.authenticated,
  project: projects.currentProject
});

const mapDispatchToProps = dispatch => ({
  incrementLike: (id, token) => dispatch(createReaction(id, token)),
  unLike: (token, reactionId) => dispatch(deleteReaction(token, reactionId))
});

export default connect(mapStateToProps, mapDispatchToProps)(LikeButton);
