import React, { Component } from "react";
import { connect } from "react-redux";
import Button from "react-bootstrap/Button";
import { joinProject } from "../actions/projectActions";
let joined = false;
class JoinButton extends Component {
  state = {
    joined: false
  };

  renderButtonText = () => {
    const { project, userId } = this.props;
    if (project.users) {
      let pp = project.users.filter(project => project.id === userId);
      console.log(pp);
      if (pp.length > 0) {
        // this.setState({ joined: true });
        joined = true;
        return "Already Joined";
      } else {
        return "Join Project";
      }
    }
  };

  render() {
    const { project, token, authenticated, joinProject, userId } = this.props;

    return (
      <Button
        variant="dark"
        size="sm"
        onClick={() => {
          if (window.confirm("Are you sure you want to join this project?"))
            joinProject(token, project.id);
        }}
        disabled={!authenticated || !joined}
      >
        {/* Join Project */}
        {this.renderButtonText()}
      </Button>
    );
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
