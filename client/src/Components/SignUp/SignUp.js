import React from "react";
import { Box, Button, Grid, Link, TextField, Typography } from "@mui/material";
import { Container } from "@mui/system";
import LockOpenIcon from '@mui/icons-material/LockOpen';

const SignUp = () => {
  return (
    <Container maxWidth="xs" sx={{}}>
      <Box sx={{ mt: "17px", display:"flex", flexDirection:"column",alignItems:"center"}}>
        <LockOpenIcon sx={{ color:"green", fontSize: { xs: "25px", sm: "42px" }, m: { xs: "2px", sm: "6px" }, p:"9px", backgroundColor:"#e0ebeb", borderRadius:"30px" }} />
        <Typography sx={{ m: { xs: "2px", sm: "10px" }, fontSize:{ xs: "25px", sm: "38px" }, fontWeight:"500" }} >
          Sign Up
        </Typography>
      </Box>
      <form >
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <TextField
              name="firstName"
              variant="outlined"
              required
              fullWidth
              size="small"
              id="firstName"
              label="First Name"
              autoFocus
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              variant="outlined"
              required
              fullWidth
              size="small"
              id="lastName"
              label="Last Name"
              name="lastName"
              autoComplete="lname"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              variant="outlined"
              required
              fullWidth
              size="small"
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              variant="outlined"
              required
              fullWidth
              size="small"
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
          </Grid>
        </Grid>
        <Button
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
              <Link href="/" variant="body2" >
                Already have an account? Log In
              </Link>
            </Grid>
          </Grid>
      </form>
    </Container>
  );
};

export default SignUp;
