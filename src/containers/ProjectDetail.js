import React, { Component } from "react";
import { connect } from "react-redux";
import CommentForm from "../components/CommentForm";
import Comments from "../components/Comments";
import { createComment } from "../actions/commentActions";
import { fetchProject } from "../actions/projectActions";

class ProjectDetail extends Component {
  // state = {
  //   project: []
  // };

  componentDidMount() {
    this.props.fetchProject(this.props.match.params.id);
  }

  // fetchProject = async () => {
  //   const { id } = this.props.match.params;
  //   const res = await fetch(`http://localhost:3001/api/v1/projects/${id}`);
  //   const data = await res.json();
  //   console.log(data);
  //   this.setState({
  //     project: data
  //   });
  //   // shove this data into the state and make a show detail page YEEEEEET
  // };

  render() {
    // console.log(this.state.project);
    const { project, authenticated } = this.props;

    return (
      <div>
        {project.name}
        {project.description}
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
  console.log(projects);
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
