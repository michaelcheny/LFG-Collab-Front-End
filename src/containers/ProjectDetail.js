import React, { Component } from "react";
import { connect } from "react-redux";
import CommentForm from "../components/CommentForm";
import Comments from "../components/Comments";
import ProjectInfo from "../components/ProjectInfo";
import { createComment } from "../actions/commentActions";
import { fetchProject } from "../actions/projectActions";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

class ProjectDetail extends Component {
  // state = {
  //   project: []
  // };

  componentDidMount() {
    this.props.fetchProject(this.props.match.params.id);
  }

  render() {
    const { project, authenticated } = this.props;

    return (
      <div>
        <Container>
          <Row>
            <Col sm={8}>
              <ProjectInfo project={project} />
            </Col>
            <Col sm={4}>sm=4</Col>
          </Row>
        </Container>

        <hr />
        <CommentForm
          projectId={project.id}
          token={this.props.token}
          addComment={this.props.addComment}
          authenticated={authenticated}
        />
        <br />
        <h5>Comments:</h5>
        <Comments comments={project.comments} />
      </div>
    );
  }
}

const mapStateToProps = ({ projects, token, user }) => {
  // console.log(projects);
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