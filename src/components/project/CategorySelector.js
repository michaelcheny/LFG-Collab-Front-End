import React from "react";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";

export const CategorySelector = ({ changeCategory }) => {
  return (
    <Dropdown onSelect={eventKey => changeCategory(eventKey)}>
      <Dropdown.Toggle variant="dark" id="dropdown-basic" size="sm">
        Category
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item eventKey="all">All</Dropdown.Item>
        <Dropdown.Item eventKey="1">Automotive</Dropdown.Item>
        <Dropdown.Item eventKey="2">Charity</Dropdown.Item>
        <Dropdown.Item eventKey="3">Educational</Dropdown.Item>
        <Dropdown.Item eventKey="4">Fashion</Dropdown.Item>
        <Dropdown.Item eventKey="5">Food and Drink</Dropdown.Item>
        <Dropdown.Item eventKey="6">Health and Fitness</Dropdown.Item>
        <Dropdown.Item eventKey="7">Makers and Crafting</Dropdown.Item>
        <Dropdown.Item eventKey="8">Programming</Dropdown.Item>
        <Dropdown.Item eventKey="9">Social Media</Dropdown.Item>
        <Dropdown.Item eventKey="10">Others</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
};
