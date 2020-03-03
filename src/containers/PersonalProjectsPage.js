import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchPersonalProjects } from "../actions/fetchProjects";
import Project from "../components/project/Project";

class PersonalProjectsPage extends Component {
  componentDidMount() {
    this.props.fetchMyProjects();
  }

  render() {
    console.log(this.props.projects);
    const { projects } = this.props;
    return (
      <div>
        <h1>My Projects</h1>

        {projects.map(project => {
          console.log(project);
          return (
            <Project
              key={project.id}
              id={project.id}
              name={project.name}
              description={project.description}
              users={project.users}
              addedOn={project.created_at}
            />
          );
        })}
      </div>
    );
  }
}

const mapStateToProps = ({ projects }) => {
  return { projects: projects.personalProjects, loading: projects.loading };
};

const mapDispatchToProps = dispatch => ({
  fetchMyProjects: () => dispatch(fetchPersonalProjects())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PersonalProjectsPage);
