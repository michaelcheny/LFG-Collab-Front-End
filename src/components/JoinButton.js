import React, { Component } from "react";
import { connect } from "react-redux";
import Button from "react-bootstrap/Button";
import { joinProject } from "../actions/projectActions";

class JoinButton extends Component {
  render() {
    const { projectId, token, authenticated, joinProject } = this.props;

    return (
      <Button
        variant="dark"
        size="sm"
        onClick={() => {
          if (window.confirm("Are you sure you want to join this project?"))
            joinProject(token, projectId);
        }}
        disabled={!authenticated}
      >
        Join Project
      </Button>
    );
  }
}

const mapStateToProps = ({ user, token }) => ({
  authenticated: user.authenticated,
  token: token.token
});

const mapDispatchToProps = dispatch => ({
  joinProject: (token, projectId) => dispatch(joinProject(token, projectId))
});

export default connect(mapStateToProps, mapDispatchToProps)(JoinButton);
