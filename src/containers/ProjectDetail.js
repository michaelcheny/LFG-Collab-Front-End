import React, { Component } from "react";
import { connect } from "react-redux";
import CommentForm from "../components/CommentForm";
import Comments from "../components/Comments";

class ProjectDetail extends Component {
  state = {
    project: []
  };

  componentDidMount() {
    this.fetchProject();
  }

  fetchProject = async () => {
    const { id } = this.props.match.params;
    // console.log(this.props.match);
    // console.log(id);
    const res = await fetch(`http://localhost:3001/api/v1/projects/${id}`);
    const data = await res.json();
    console.log(data);
    this.setState({
      project: data
    });
    // shove this data into the state and make a show detail page YEEEEEET
  };

  render() {
    console.log(this.state.project);
    const { project } = this.state;

    return (
      <div>
        {project.name}

        {project.description}

        <CommentForm />
        <Comments comments={project.comments} />
      </div>
    );
  }
}

const mapStateToProps = ({ projects }) => {
  return {
    projects
  };
};

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(ProjectDetail);
