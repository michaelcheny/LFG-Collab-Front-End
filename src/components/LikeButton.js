import React, { Component } from "react";
import { connect } from "react-redux";
import Button from "react-bootstrap/Button";
import Badge from "react-bootstrap/Badge";
import { createReaction } from "../actions/reactionActions";

class LikeButton extends Component {
  constructor(props) {
    super(props);

    console.log(this.props);
  }

  handleProjectReaction = () => {
    const { incrementLike, projectId, token, reactions, user } = this.props;
    console.log(reactions);
    reactions.map(reaction => {
      if (!!reaction && reaction.user_id == user.id) {
        console.log(
          "my userId: " +
            user.id +
            ", reactionId: " +
            reaction.user_id +
            "removing"
        );
        // remove reaction on click
      } else {
        console.log(
          "my userId: " +
            user.id +
            ", reactionId: " +
            reaction.user_id +
            "adding"
        );
        // add reaction
      }
    });
    incrementLike(projectId, token);
  };

  render() {
    const { comments, reactions } = this.props;

    return (
      <>
        {/* <Button className="button" variant="dark" size="sm">
          <span role="img" aria-label="chat-bubble">
            💬
          </span>
          <Badge variant="light">{comments ? comments.length : 0}</Badge>
        </Button>{" "} */}
        <Button
          className="button"
          variant="dark"
          // disabled={!authenticated}
          size="sm"
          onClick={this.handleProjectReaction}
        >
          <span role="img" aria-label="heart">
            ❤️
          </span>{" "}
          <Badge variant="light">{reactions ? reactions.length : 0}</Badge>
        </Button>
      </>
    );
  }
}

const mapStateToProps = ({ token, user, projects }) => ({
  token: token.token,
  user: user.user,
  project: projects.currentProject
});

const mapDispatchToProps = dispatch => ({
  incrementLike: (id, token) => dispatch(createReaction(id, token))
});

export default connect(mapStateToProps, mapDispatchToProps)(LikeButton);
