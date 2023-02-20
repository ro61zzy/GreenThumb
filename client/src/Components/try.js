import React, { useState } from "react";
import { Box, Button, Grid, Link, TextField, Typography } from "@mui/material";
import LockOpenIcon from "@mui/icons-material/LockOpen";
import "./login.css";
import axios from "axios";

const LogIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post("/login", { email, password })
      .then((response) => {
        if (response.data.success) {
          // Login successful, redirect to dashboard or homepage
          console.log("Login successful");
        } else {
          // Login unsuccessful, display error message
          setError("Invalid email or password");
        }
      })
      .catch((error) => {
        console.error(error);
        setError("An error occurred during login. Please try again later.");
      });
  };
  return (
    <Grid container height="100vh">
      <Grid item xs={false} sm={4} md={7} className="image"></Grid>
      <Grid item xs={12} sm={8} md={5}>
        <Box
          sx={{
            mt: "100px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <LockOpenIcon
            sx={{
              color: "green",
              fontSize: { xs: "25px", sm: "42px" },
              m: { xs: "2px", sm: "6px" },
              p: "9px",
              backgroundColor: "#e0ebeb",
              borderRadius: "30px",
            }}
          />
          <Typography
            sx={{ fontSize: { xs: "18px", sm: "38px" }, fontWeight: "500" }}
          >
            Log In
          </Typography>
        </Box>
        <Box sx={{ p: "0 100px" }}>
          <form>
            <TextField
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />

            {error && (
              <Typography color="error" variant="subtitle1">
                {error}
              </Typography>
            )}

            <Button
            onClick={handleSubmit}
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              sx={{ mt: "17px", height: "40px" }}
            >
              Log In
            </Button>
            <Grid container mt="15px">
              <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link href="/signup" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </form>
        </Box>
      </Grid>
    </Grid>
  );
};


