import React, { Component } from "react";
import { connect } from "react-redux";
import Button from "react-bootstrap/Button";
import Badge from "react-bootstrap/Badge";
import { createReaction, deleteReaction } from "../actions/reactionActions";

class LikeButton extends Component {
  // constructor(props) {
  //   super(props);

  //   // console.log(this.props);
  // }

  handleProjectReaction = () => {
    const { incrementLike, unLike, project, token, user } = this.props;
    // console.log(project.reactions);
    let myReaction = project.reactions.filter(reaction => {
      console.log(reaction);
      console.log(user.id);
      return reaction.user_id == user.id;
    });
    // console.log(myReaction);

    if (myReaction.length > 0) {
      myReaction.forEach(r => {
        unLike(token, r.id);
      });
    } else {
      console.log("here");
      incrementLike(project.id, token);
    }
    // project.reactions.map(reaction => {
    //   if (reaction.user_id == user.id) {
    //     console.log(
    //       "my userId: " +
    //         user.id +
    //         ", reactionId: " +
    //         reaction.user_id +
    //         "removing"
    //     );
    //     // remove reaction on click
    //   }
    // });
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
