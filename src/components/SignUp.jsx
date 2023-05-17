import React, { useState } from "react";
import { Link } from "react-router-dom";
import NavBar from "./UI/Navbar/Navbar";
import { Button, Box } from '@mui/material';
import { useHistory } from "react-router-dom";

export default function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };


  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(`Email: ${email}, Password: ${password}`);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div>
        <h2>Thank you for signing up!</h2>
        <p>
          <Link to="/">Go to Home Page</Link>
        </p>
      </div>
    );
  }

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
        <h2 style={{ marginBottom: "2rem" }}>Sign Up</h2>
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
         <Link to="/BookingHistory">
          <Button variant="contained" color="primary">Sign Up</Button>
        </Link>
        <p style={{ marginTop: "1rem" }}>
          Already a Customer?{" "}
          <Link to="/SignIn" style={{ color: "blue" }}>
            Login Here
          </Link>
        </p>
      </form>
    </div>
  );
}
