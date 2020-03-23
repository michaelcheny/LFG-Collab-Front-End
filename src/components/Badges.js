import React from "react";
import Badge from "react-bootstrap/Badge";

export const CommentBadge = ({ comments }) => {
  return (
    <>
      <span role="img" aria-label="chat-bubble">
        💬
      </span>
      <Badge variant="light">{comments ? comments.length : 0}</Badge>
    </>
  );
};

export const LikeBadge = ({ reactions }) => {
  return (
    <>
      <span role="img" aria-label="heart">
        ❤️
      </span>
      <Badge variant="light">{reactions ? reactions.length : 0}</Badge>
    </>
  );
};

export const HandshakeBadge = ({ collaborators, teamSize }) => {
  return (
    <>
      <span role="img" aria-label="handshake">
        🤝
      </span>
      <Badge variant="light">
        {collaborators ? `${collaborators}/${teamSize}` : 0}
      </Badge>
    </>
  );
};

export const OnlineBadge = ({ project }) => {
  return (
    <>
      <span role="img" aria-label="online">
        💻
      </span>
      <Badge variant="light">
        {project.online ? (
          <span role="img" aria-label="check">
            ✅
          </span>
        ) : (
          <span role="img" aria-label="cross">
            ❌
          </span>
        )}
      </Badge>
    </>
  );
};

export const PartyBadge = ({ project }) => {
  const num = parseInt(project.team_size);
  // console.log(project);
  return (
    <>
      <span role="img" aria-label="party">
        🤜🤛
      </span>
      <Badge variant="light">{num}</Badge>
    </>
  );
};
