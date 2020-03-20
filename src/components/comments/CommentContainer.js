import React, { Component } from "react";
import { connect } from "react-redux";
import CommentForm from "../comments/CommentForm";
import Comments from "../comments/Comments";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { CommentBadge } from "../Badges";
import { getComments, createComment } from "../../actions/commentActions";

class CommentContainer extends Component {
  // constructor(props) {
  //   super(props);
  //   // console.log(this.props);
  // }

  // componentDidMount() {
  //   console.log(this.props);
  //   const { fetchComments, comments, id } = this.props;
  //   if (comments.length === 0) {
  //     fetchComments(id);
  //   }
  // }

  render() {
    const { project, token, authenticated, addComment, comments } = this.props;
    console.log(comments);
    return (
      <Container className="comment-container">
        <Row>
          <Col></Col>
          <Col xs={10}>
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
            <Comments comments={comments} />
          </Col>
          <Col></Col>
        </Row>
      </Container>
    );
  }
}

const mapStateToProps = ({ projects, token, user, comments }) => ({
  project: projects.currentProject,
  comments,
  token: token.token,
  authenticated: user.authenticated
});

const mapDispatchToProps = dispatch => {
  return {
    fetchComments: id => dispatch(getComments(id)),
    addComment: (id, token, comment) =>
      dispatch(createComment(id, token, comment))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CommentContainer);
