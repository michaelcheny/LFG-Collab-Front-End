// import React, { useState, useEffect } from "react";
// import Project from "../components/project/Project";

// const Projects = () => {
//   const [projects, setProjects] = useState([]);

//   useEffect(() => {
//     fetchProjects();

//     return () => {};
//   }, []);

//   const fetchProjects = async () => {
//     const res = await fetch("http://localhost:3001/api/v1/projects/");
//     const data = await res.json();
//     console.log(data);
//     setProjects(data);
//     //
//   };
//   return (
//     <div>
//       {projects.map((project, index) => {
//         return (
//           <Project
//             key={index}
//             name={project.name}
//             description={project.description}
//             users={project.users}
//             addedOn={project.created_at}
//           />
//         );
//       })}
//     </div>
//   );
// };

// export default Projects;

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
    // console.log(this.props);
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

const mapStateToProps = state => {
  const { projects } = state;
  return { projects: projects.projects, loading: projects.loading };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchProjects: () => dispatch(fetchProjects())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProjectPage);
