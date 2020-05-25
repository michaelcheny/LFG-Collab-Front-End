import React, { Component } from "react";
import { connect } from "react-redux";
import ProjectInfo from "../components/project/ProjectInfo";
import { fetchProject } from "../actions/projectActions";
import CommentContainer from "../components/comments/CommentContainer";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import EditProjectForm from "../components/project/EditProjectForm";
import ChatBox from "../components/messaging/ChatBox";

class ProjectDetail extends Component {
  state = {
    showUpdateForm: false,
  };

  componentDidMount() {
    this.props.fetchProject(this.props.match.params.id);
  }

  editButtonforOwner = () => {
    const { user, project } = this.props;
    if (project.owner_id === user.id) {
      return (
        <span>
          <hr />
          <Button variant="dark" size="sm" onClick={() => this.setState({ showUpdateForm: true })}>
            Edit Project
          </Button>
        </span>
      );
    }
  };

  renderCollaborators = () => {
    const { project } = this.props;

    if (project.users) {
      const owner = project.users.find((user) => user.id === project.owner_id);
      const collaborators = project.users.filter((user) => user.id !== project.owner_id);

      return (
        <Card>
          <Card.Body>
            <Card.Title className="user-title">
              {project.online ? "Online Project" : `Project location: ${owner.city}, ${owner.state}`}
            </Card.Title>
            <Card.Title className="user-title">
              Desired team size: ({project.users ? project.users.length : 0}/{project.team_size})
            </Card.Title>
            <hr />

            <Card.Title className="user-title">Owner</Card.Title>
            <Card.Text>
              <li className="collaborator-list">
                <img src={owner.image} alt="user-pic" className="small-image" />
                {owner.name}
              </li>
            </Card.Text>
            <Card.Title className="user-title">Collaborators</Card.Title>
            <Card.Text>
              {collaborators.map((user) => {
                return (
                  <>
                    <li key={user.id} className="collaborator-list">
                      <img src={user.image} alt="user-pic" className="small-image" />
                      {user.name}
                    </li>
                    <br />
                  </>
                );
              })}
              {this.editButtonforOwner()}
            </Card.Text>
          </Card.Body>
        </Card>
      );
    }
  };

  render() {
    const { project } = this.props;

    return (
      <div>
        <Container className="project-detail">
          <Row>
            <Col sm={8}>
              <ProjectInfo project={project} />
            </Col>
            <Col sm={4}>
              <div className="collaborators">{this.renderCollaborators()}</div>
            </Col>
          </Row>
        </Container>

        <EditProjectForm
          show={this.state.showUpdateForm}
          onHide={() => this.setState({ showUpdateForm: false })}
        />

        <ChatBox room={this.props.match.params.id} />

        <hr />

        <CommentContainer id={project.id} />
      </div>
    );
  }
}

const mapStateToProps = ({ projects, user }) => ({
  project: projects.currentProject,
  user: user.user,
});

const mapDispatchToProps = (dispatch) => {
  return {
    fetchProject: (id) => dispatch(fetchProject(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProjectDetail);
