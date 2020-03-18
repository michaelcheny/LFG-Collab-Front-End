import React, { Component } from "react";
import { connect } from "react-redux";
import Button from "react-bootstrap/Button";
import { joinProject } from "../actions/projectActions";

class JoinButton extends Component {
  renderButton = () => {
    const { project, userId, token, authenticated, joinProject } = this.props;

    if (project.users) {
      let pp = project.users.filter(project => project.id === userId);
      console.log(pp);
      if (pp.length > 0) {
        return (
          <Button variant="dark" size="sm" disabled>
            Already Joined
          </Button>
        );
      } else {
        return (
          <Button
            variant="dark"
            size="sm"
            onClick={() => {
              if (window.confirm("Are you sure you want to join this project?"))
                joinProject(token, project.id);
            }}
            disabled={!authenticated}
          >
            Join Project
          </Button>
        );
      }
    }
  };

  render() {
    return <>{this.renderButton()}</>;
  }
}

const mapStateToProps = ({ user, token, projects }) => ({
  userId: user.user.id,
  authenticated: user.authenticated,
  token: token.token,
  project: projects.currentProject
});

const mapDispatchToProps = dispatch => ({
  joinProject: (token, projectId) => dispatch(joinProject(token, projectId))
});

export default connect(mapStateToProps, mapDispatchToProps)(JoinButton);
