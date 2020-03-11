import React, { Component } from "react";
import { connect } from "react-redux";
import Project from "../components/project/Project";
import {
  fetchProjects,
  fetchPersonalProjects
} from "../actions/projectActions";
import Spinner from "react-bootstrap/Spinner";
import { CategorySelector } from "../components/project/CategorySelector";

class ProjectPage extends Component {
  state = {
    categoryId: null
  };

  componentDidMount() {
    // console.log(this.props.match);
    // console.log(this.props.match.url);
    const { url } = this.props.match;
    if (url === "/projects") {
      this.props.fetchProjects();
    } else {
      this.props.fetchMyProjects();
    }
  }

  // to allow switching from projects to myprojects since they share same component
  componentDidUpdate(prevProps) {
    // console.log(this.props.location.pathname);
    const { pathname } = this.props.location;
    if (
      pathname === "/projects" &&
      prevProps.location.pathname === "/myprojects"
    ) {
      console.log("the previous path was " + prevProps.location.pathname);
      this.props.fetchProjects();
    } else if (
      pathname === "/myprojects" &&
      prevProps.location.pathname === "/projects"
    ) {
      console.log("the previous path was " + prevProps.location.pathname);

      this.props.fetchMyProjects();
    }
  }

  // filterProjects = projects => {
  //   return projects.filter(
  //     project => project.category_id == this.state.categoryId
  //   );
  // };

  renderProjects = () => {
    const { allProjects, myProjects, loading, match } = this.props;
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

    console.log(projects);

    if (!loading) {
      return projects.map(project => {
        return (
          <Project
            key={project.id}
            id={project.id}
            name={project.name}
            description={project.description}
            users={project.users}
            addedOn={project.created_at}
            category={project.category.name}
          />
        );
      });
    } else {
      return (
        <Spinner animation="border" role="status">
          <span className="sr-only">Loading...</span>
        </Spinner>
      );
    }
  };

  render() {
    return (
      <div>
        <h1>Available Projects</h1>
        <CategorySelector
          changeCategory={id => this.setState({ categoryId: id })}
        />
        {console.log(this.state.categoryId)}
        <br />
        {this.renderProjects()}
      </div>
    );
  }
}

const mapStateToProps = ({ projects }) => {
  return {
    allProjects: projects.projects,
    myProjects: projects.personalProjects,
    loading: projects.loading
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchProjects: () => dispatch(fetchProjects()),
    fetchMyProjects: () => dispatch(fetchPersonalProjects())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProjectPage);
