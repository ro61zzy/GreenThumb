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
      .post("https://green-thumb-xvb2.vercel.app/api/login", { email, password })
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
    <Grid container height="69vh">
      <Grid item xs={false} sm={4} md={7} className="image"></Grid>
      <Grid item xs={12} sm={8} md={5}>
        <Box
          sx={{
            mt: "30px",
            pt:"30px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <LockOpenIcon
            sx={{
              color: "green",
              fontSize: { xs: "35px", sm: "42px" },
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
                <Link className="lin" href="/signup" variant="body2">
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

export default LogIn;

{/* <button
                        className="icon-button"
                        onClick={() => {
                          const isLoggedIn = localStorage.getItem("isLoggedIn");
                          if (isLoggedIn) {
                            window.open(
                              `https://wa.me/${plant.seller_phone}?text=Hello! I'm interested in your ${plant.name} plant listed on GreenThumb, could I please get more info?.`
                            );
                          } else {
                            window.location.href = "/login";
                          }
                        }}
                      >
                        <WhatsAppIcon
                          sx={{ fontSize: { xs: "26px", sm: "42px" } }}
                        />
                      </button> */}