import React, { Component } from "react";
import { connect } from "react-redux";
import Project from "../components/project/Project";
import { fetchProjects } from "../actions/fetchProjects";
import Spinner from "react-bootstrap/Spinner";

class ProjectPage extends Component {
  componentDidMount() {
    this.props.fetchProjects();
  }

  render() {
    const { projects, loading } = this.props;
    return (
      <div>
        <h1>Available Projects</h1>
        {!loading ? (
          projects.map((project, index) => {
            return (
              <Project
                key={index}
                name={project.name}
                description={project.description}
                users={project.users}
                addedOn={project.created_at}
              />
            );
          })
        ) : (
          <Spinner animation="border" role="status">
            <span className="sr-only">Loading...</span>
          </Spinner>
        )}
      </div>
    );
  }
}

const mapStateToProps = ({ projects }) => {
  return { projects: projects.projects, loading: projects.loading };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchProjects: () => dispatch(fetchProjects())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProjectPage);
