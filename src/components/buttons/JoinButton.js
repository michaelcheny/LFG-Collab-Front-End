import React, { Component } from "react";
import { connect } from "react-redux";
import Button from "react-bootstrap/Button";
import { joinProject } from "../../actions/projectActions";

class JoinButton extends Component {
  renderButton = () => {
    const { project, userId, token, authenticated, joinProject } = this.props;

    if (project.users && project.users.length < project.team_size) {
      let userProject = project.users.find(project => project.id === userId);
      if (userProject) {
        return (
          <Button variant="dark" size="sm" disabled>
            Already Joined
          </Button>
        );
      } else if (project.completed) {
        return (
          <Button variant="dark" size="sm" disabled>
            Completed
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
    } else {
      return (
        <Button variant="dark" size="sm" disabled>
          Team Full
        </Button>
      );
    }
  };

  render() {
    const { userId, project } = this.props;
    return <>{userId === project.owner_id ? null : this.renderButton()}</>;
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
