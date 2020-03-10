import React from "react";

const Footer = () => {
  return (
    <div
      style={{
        backgroundColor: "#222",
        position: "absolute",
        left: "0",
        bottom: "0",
        right: "0"
      }}
    >
      {/* <hr /> */}
      <h6
        style={{
          textAlign: "center",
          padding: "15px",
          color: "white"
        }}
      >
        ©2020 Michael Chen
      </h6>
    </div>
  );
};

export default Footer;
