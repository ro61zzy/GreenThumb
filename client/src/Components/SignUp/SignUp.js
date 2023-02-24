import React, { useState } from "react";
import axios from "axios";
import { Box, Button, Grid, Link, TextField, Typography } from "@mui/material";
import { Container } from "@mui/system";
import LockOpenIcon from "@mui/icons-material/LockOpen";
import "./signup.css";

const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);

  const handleName = (e) => {
    setName(e.target.value);
    setSubmitted(false);
  };

  const handleEmail = (e) => {
    setEmail(e.target.value);
    setSubmitted(false);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
    setSubmitted(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name === "" || email === "" || password === "") {
      setError(true);
    } else {
      axios
        .post("http://localhost:8000/api/signup", { name, email, password })
        .then((response) => {
          console.log("response", response);
          if (response.data.token) {
            localStorage.setItem("token", response.data.token);
            setSubmitted(true);
            setError(false);

            setTimeout(() => {
              window.location.href = "/";
            }, 2000);
          }
        })
        .catch((error) => {
          console.error(error);
          setError(true);
        });
    }
  };

  const successMessage = () => {
    return (
      <div
        className="success"
        style={{
          display: submitted ? "" : "none",
        }}
      >
        <p>User {name} successfully registered!!</p>
      </div>
    );
  };

  const errorMessage = () => {
    return (
      <div
        className="error"
        style={{
          display: error ? "" : "none",
        }}
      >
        <p>Please enter all the fields</p>
      </div>
    );
  };

  return (
    <Container maxWidth="xs">
      <Box
        sx={{
          mt: "17px",
          pt: "35px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <LockOpenIcon
          sx={{
            color: "green",
            fontSize: { xs: "38px", sm: "42px" },
            m: { xs: "2px", sm: "6px" },
            p: "9px",
            backgroundColor: "#e0ebeb",
            borderRadius: "30px",
          }}
        />
        <Typography
          sx={{
            m: { xs: "2px", sm: "10px" },
            fontSize: { xs: "25px", sm: "38px" },
            fontWeight: "500",
          }}
        >
          Sign Up
        </Typography>
      </Box>
      <div className="messages">
        {errorMessage()}
        {successMessage()}
      </div>
      <form>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              value={name}
              onChange={handleName}
              variant="outlined"
              required
              fullWidth
              size="small"
              id="Name"
              label="Your Name"
              autoFocus
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              value={email}
              onChange={handleEmail}
              variant="outlined"
              required
              fullWidth
              size="small"
              id="email"
              label="Email Address"
              autoComplete="email"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              value={password}
              onChange={handlePassword}
              variant="outlined"
              required
              fullWidth
              size="small"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
          </Grid>
        </Grid>
        <Button
          onClick={handleSubmit}
          type="submit"
          fullWidth
          size="small"
          variant="contained"
          color="primary"
          sx={{ mt: "17px" }}
        >
          Sign Up
        </Button>
        <Grid container mt="15px">
          <Grid item>
            <Link href="/login" variant="body2">
              Already have an account? Log In
            </Link>
          </Grid>
        </Grid>
      </form>
    </Container>
  );
};

export default SignUp;
