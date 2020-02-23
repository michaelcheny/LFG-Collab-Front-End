import React, { useState } from "react";

const LogInForm = () => {
  const [input, setInput] = useState("");

  const handleSubmit = event => {
    event.preventDefault();
    // send the inputs to the login thing
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Email" />
      <input type="password" placeholder="Password" />
      <input type="submit" />
    </form>
  );
};

export default LogInForm;
