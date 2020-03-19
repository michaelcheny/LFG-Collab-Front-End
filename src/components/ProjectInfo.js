import React from "react";
import LikeButton from "./LikeButton";
import Joinbutton from "../components/JoinButton";
import { OnlineBadge, PartyBadge } from "../components/Badges";

import Card from "react-bootstrap/Card";

const ProjectInfo = ({ project }) => {
  console.log(project);

  // const renderCollaborators = () => {
  //   if (project.users) {
  //     // return <li className="collaborator-list">{user.name}</li>;

  //     return (
  //       <Card style={{ width: "18rem" }}>
  //         <Card.Body>
  //           <Card.Title>Card Title</Card.Title>
  //           {project.users.map(user => {
  //             return (
  //               <Card.Text>
  //                 <li className="collaborator-list">{user.name}</li>
  //               </Card.Text>
  //             );
  //           })}
  //         </Card.Body>
  //       </Card>
  //     );
  //   }
  // };

  return (
    <div>
      {/* <h2>{project.name}</h2>
      <hr />
      {project.description} */}

      <Card>
        <Card.Body>
          <Card.Title>{project.name}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">
            {project.category ? project.category.name : null}
          </Card.Subtitle>
          <Card.Text>{project.description}</Card.Text>
          <Card.Text>
            <Joinbutton /> {"  "}
            <LikeButton />
            <span className="like-comment-badges">
              <OnlineBadge project={project} />
              {/* <PartyBadge project={project} />
              Desired team size: ({project.users ? project.users.length : 0}/
              {project.team_size}) */}
            </span>
          </Card.Text>
        </Card.Body>
      </Card>
      <br />
      <br />
      <br />
      {/* {renderCollaborators()} */}
      {/* <LikeButton /> */}
    </div>
  );
};

export default ProjectInfo;
