import React, { useState } from "react";

const LogInForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = event => {
    event.preventDefault();
    // send the inputs to the login thing
    console.log(email, password);
    setEmail("");
    setPassword("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        className="mr-sm-2"
        type="text"
        placeholder="Email"
        onChange={e => setEmail(e.target.value)}
        value={email}
      />
      <input
        className="mr-sm-2"
        type="password"
        placeholder="Password"
        onChange={e => setPassword(e.target.value)}
        value={password}
      />
      <input type="submit" />
    </form>
  );
};

export default LogInForm;
