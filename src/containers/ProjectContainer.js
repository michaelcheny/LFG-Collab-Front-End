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

export class ProjectContainer extends Component {
  state = {
    projects: []
  };

  fetchProjects = async () => {
    const res = await fetch("http://localhost:3001/api/v1/projects/");
    const data = await res.json();
    console.log(data);
    this.setState({
      projects: data
    });
  };

  componentDidMount() {
    this.fetchProjects();
  }

  render() {
    const { projects } = this.state;
    return (
      <div>
        {projects.map((project, index) => {
          return (
            <Project
              key={index}
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

const mapStateToProps = state => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(ProjectContainer);
