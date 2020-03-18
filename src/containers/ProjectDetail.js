import React, { Component } from "react";
import { connect } from "react-redux";
import CommentForm from "../components/CommentForm";
import Comments from "../components/Comments";
import ProjectInfo from "../components/ProjectInfo";
import LikeButton from "../components/LikeButton";

import { CommentBadge } from "../components/Badges";
import { createComment } from "../actions/commentActions";
import { fetchProject } from "../actions/projectActions";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";

class ProjectDetail extends Component {
  componentDidMount() {
    this.props.fetchProject(this.props.match.params.id);
  }

  renderCollaborators = () => {
    const { project } = this.props;
    if (project.users) {
      return (
        <Card>
          <Card.Body>
            <Card.Title>Collaborators</Card.Title>
            <Card.Text>
              {project.users.map(user => {
                return <li className="collaborator-list">{user.name}</li>;
              })}
            </Card.Text>
          </Card.Body>
        </Card>
      );
    }
  };

  render() {
    const { project, authenticated, token, addComment } = this.props;

    return (
      <div>
        <Container>
          <Row>
            <Col sm={8}>
              <ProjectInfo project={project} />
              <LikeButton />
            </Col>
            <Col sm={4}>
              <div className="collaborators">{this.renderCollaborators()}</div>
            </Col>
          </Row>
        </Container>

        <hr />
        <CommentForm
          projectId={project.id}
          token={token}
          addComment={addComment}
          authenticated={authenticated}
        />
        <br />
        <h5>
          Comments <CommentBadge comments={project.comments} />:
        </h5>
        <Comments comments={project.comments} />
      </div>
    );
  }
}

const mapStateToProps = ({ projects, token, user }) => {
  return {
    project: projects.currentProject,
    token: token.token,
    authenticated: user.authenticated
  };
};

const mapDispatchToProps = dispatch => {
  return {
    addComment: (id, token, comment) =>
      dispatch(createComment(id, token, comment)),
    fetchProject: id => dispatch(fetchProject(id))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProjectDetail);
