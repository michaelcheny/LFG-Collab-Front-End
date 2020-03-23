import React, { Component } from "react";
import { connect } from "react-redux";
import ProjectCard from "../components/project/ProjectCard";
import {
  fetchProjects,
  fetchPersonalProjects
} from "../actions/projectActions";
import { CategorySelector } from "../components/CategorySelector";
import { LoadingSpinner } from "../components/LoadingSpinner";

class ProjectPage extends Component {
  state = {
    categoryId: null
  };

  componentDidMount() {
    const { url } = this.props.match;
    if (url === "/projects") {
      this.props.fetchProjects();
    } else {
      this.props.fetchMyProjects();
    }
  }

  // to allow switching from projects to myprojects since they share same component
  componentDidUpdate(prevProps) {
    const { pathname } = this.props.location;
    if (
      pathname === "/projects" &&
      prevProps.location.pathname === "/myprojects"
    ) {
      this.props.fetchProjects();
    } else if (
      pathname === "/myprojects" &&
      prevProps.location.pathname === "/projects"
    ) {
      this.props.fetchMyProjects();
    }
  }

  renderProjects = () => {
    const {
      allProjects,
      myProjects,
      loading,
      match,
      authenticated
    } = this.props;
    let projects;

    if (match.url === "/projects") {
      this.state.categoryId === null || this.state.categoryId === "all"
        ? (projects = allProjects)
        : (projects = allProjects.filter(
            project => project.category_id == this.state.categoryId
          ));
    } else {
      this.state.categoryId === null || this.state.categoryId === "all"
        ? (projects = myProjects)
        : (projects = myProjects.filter(
            project => project.category_id == this.state.categoryId
          ));
    }

    if (!loading) {
      return projects.map(project => {
        return (
          <ProjectCard
            key={project.id}
            project={project}
            authenticated={authenticated}
          />
        );
      });
    } else {
      return <LoadingSpinner />;
    }
  };

  render() {
    return (
      <div>
        <h1>Available Projects</h1>
        <CategorySelector
          changeCategory={id => this.setState({ categoryId: id })}
        />
        <br />
        {this.renderProjects()}
      </div>
    );
  }
}

const mapStateToProps = ({ projects, user }) => {
  return {
    allProjects: projects.projects,
    myProjects: projects.personalProjects,
    loading: projects.loading,
    authenticated: user.authenticated
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchProjects: () => dispatch(fetchProjects()),
    fetchMyProjects: () => dispatch(fetchPersonalProjects())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProjectPage);
