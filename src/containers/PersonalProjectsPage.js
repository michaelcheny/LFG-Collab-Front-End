import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchPersonalProjects } from "../actions/fetchProjects";
import Project from "../components/project/Project";

class PersonalProjectsPage extends Component {
  componentDidMount() {
    this.props.fetchMyProjects();
  }

  render() {
    console.log(this.props.projects); // MAP OVER THIS MOFO AND RENDER THAT SHIT YDIDADADA
    const { projects } = this.props;
    return (
      <div>
        {projects.map(project => {
          return <Project key={project.id} id={project.id} project={project} />;
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
