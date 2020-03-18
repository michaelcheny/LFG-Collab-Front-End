import React, { Component } from "react";
import { connect } from "react-redux";
import ProjectInfo from "../components/ProjectInfo";
import LikeButton from "../components/LikeButton";
import Joinbutton from "../components/JoinButton";
import { fetchProject } from "../actions/projectActions";
import CommentContainer from "../components/comments/CommentContainer";
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
      const [owner, ...collaborators] = project.users;
      return (
        <Card>
          <Card.Body>
            <Card.Title className="user-title">Owner</Card.Title>
            <Card.Text>
              <li className="collaborator-list">{owner.name}</li>
            </Card.Text>
            <Card.Title className="user-title">Collaborators</Card.Title>
            <Card.Text>
              {collaborators.map(user => {
                return <li className="collaborator-list">{user.name}</li>;
              })}
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
        <Container>
          <Row>
            <Col sm={8}>
              <ProjectInfo project={project} />
              <Joinbutton />
              {"  "}
              <LikeButton />
            </Col>
            <Col sm={4}>
              <div className="collaborators">{this.renderCollaborators()}</div>
            </Col>
          </Row>
        </Container>

        <hr />

        <CommentContainer />
      </div>
    );
  }
}

const mapStateToProps = ({ projects }) => {
  return {
    project: projects.currentProject
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchProject: id => dispatch(fetchProject(id))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProjectDetail);
