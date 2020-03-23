import React, { useState, useEffect } from "react";
import Table from "react-bootstrap/Table";
import ProjectCard from "../components/ProjectCard";
import { Link } from "react-router-dom";
import moment from "moment";

const NewestProjects = () => {
  const [projects, setProjects] = useState([]);

  const fetchNewestProjects = async () => {
    try {
      const res = await fetch("http://localhost:3001/api/v1/newest-projects");
      const data = await res.json();
      setProjects(data);
      console.log(projects);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchNewestProjects();
  }, []);

  return (
    <div>
      <h5>Check out the newest projects:</h5>
      {projects.map(project => {
        return (
          <li>
            <Link to={`projects/${project.id}`}>{project.name}</Link>
            <span style={{ "font-size": "12px" }}>
              {" "}
              added{" "}
              {moment(project.updated_at)
                .startOf("hour")
                .fromNow()}
            </span>
          </li>
        );
      })}
    </div>
  );
};

export default NewestProjects;
