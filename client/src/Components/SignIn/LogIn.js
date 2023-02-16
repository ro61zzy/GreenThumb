import React from 'react'
import { Box, Button, Grid, Link, TextField, Typography } from '@mui/material'
import LockOpenIcon from '@mui/icons-material/LockOpen';
import "./login.css"




const LogIn = () => {
  return (
   
    <Grid container height="100vh">
        <Grid item xs={false} sm={4} md={7} className="image" >
        </Grid>
      <Grid item xs={12} sm={8} md={5}  >        
        <Box sx={{ mt: "100px", display:"flex", flexDirection:"column",alignItems:"center"}}>
        <LockOpenIcon sx={{ color:"green", fontSize: { xs: "25px", sm: "42px" }, m: { xs: "2px", sm: "6px" }, p:"9px", backgroundColor:"#e0ebeb", borderRadius:"30px" }} />
        <Typography sx={{  fontSize:{ xs: "18px", sm: "38px" }, fontWeight:"500" }} >
          Log In
        </Typography>
      </Box>
      <Box sx={{p:"0 100px"}} >
      <form>
      <TextField
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
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              sx={{ mt: "17px", height:"40px" }}
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
  )
}

export default LogIn