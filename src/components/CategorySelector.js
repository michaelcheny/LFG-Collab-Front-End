import React from "react";
import Dropdown from "react-bootstrap/Dropdown";

export const CategorySelector = ({ changeCategory }) => {
  return (
    <Dropdown onSelect={eventKey => changeCategory(eventKey)}>
      <Dropdown.Toggle variant="dark" id="dropdown-basic" size="sm">
        Category
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item eventKey="all">All</Dropdown.Item>
        <Dropdown.Item eventKey="1">Advertisement</Dropdown.Item>
        <Dropdown.Item eventKey="2">Automotive</Dropdown.Item>
        <Dropdown.Item eventKey="3">Charity</Dropdown.Item>
        <Dropdown.Item eventKey="4">Educational</Dropdown.Item>
        <Dropdown.Item eventKey="5">Farming and Gardening</Dropdown.Item>
        <Dropdown.Item eventKey="6">Fashion</Dropdown.Item>
        <Dropdown.Item eventKey="7">Food and Drink</Dropdown.Item>
        <Dropdown.Item eventKey="8">Gaming</Dropdown.Item>
        <Dropdown.Item eventKey="9">Health and Fitness</Dropdown.Item>
        <Dropdown.Item eventKey="10">Home Improvement</Dropdown.Item>
        <Dropdown.Item eventKey="11">Makers and Crafting</Dropdown.Item>
        <Dropdown.Item eventKey="12">Politics</Dropdown.Item>
        <Dropdown.Item eventKey="13">Programming</Dropdown.Item>
        <Dropdown.Item eventKey="14">Social Media</Dropdown.Item>
        <Dropdown.Item eventKey="15">Others</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
};
