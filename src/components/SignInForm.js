import React, { useState } from "react";
import NavBar from "./UI/Navbar/Navbar";

export default function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(`Email: ${email}, Password: ${password}`);
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <NavBar/>
      <form
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          padding: "2rem",
          border: "1px solid black",
          borderRadius: "10px",
        }}
        onSubmit={handleSubmit}
      >
        <h2 style={{ marginBottom: "2rem" }}>Sign In</h2>
        <label htmlFor="email" style={{ marginBottom: "1rem" }}>
          Email:
        </label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={handleEmailChange}
          required
          style={{ marginBottom: "1rem" }}
        />
        <label htmlFor="password" style={{ marginBottom: "1rem" }}>
          Password:
        </label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={handlePasswordChange}
          required
          style={{ marginBottom: "1rem" }}
        />
        <button type="submit" style={{ padding: "0.5rem 1rem" }}>
          Submit
        </button>
      </form>
    </div>
  );
}
