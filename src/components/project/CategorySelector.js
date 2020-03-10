import React from "react";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";

export const CategorySelector = () => {
  return (
    <Dropdown onSelect={eventKey => console.log(eventKey)}>
      <Dropdown.Toggle variant="dark" id="dropdown-basic">
        Dropdown Button
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item eventKey="1">Action</Dropdown.Item>
        <Dropdown.Item eventKey="2">Another action</Dropdown.Item>
        <Dropdown.Item eventKey="3">Something else</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
};
