import { Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Plant from "../../Assets/user.jpg";

const User = (props) => {
    const [user, setUser] = useState({});
    const { id } = useParams();


    useEffect(() => {
        const fetchUser = async () => {
          const response = await axios.get(
            `http://localhost:8000/profile/${id}`
          );
          setUser(response.data);
          console.log('User data:', response.data);
        };
    
        fetchUser();
      }, [id]);





  return (
    <Box
      sx={{
        height: "40vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <h1>My Details</h1>
      
      <Grid sx={{ display: "flex", gap: "20px" }}>
        <Grid item xs={6} sx={{ backgroundColor: "green" }}>
          <Box className="image">
            <img src={Plant} alt="plant pic" className="image" />
          </Box>
        </Grid>
        <Grid item xs={6} sx={{ backgroundColor: "white" }}>
          <Box
            
          >
            <Typography sx={{
              fontSize: "40px",
              backgroundColor: "green",
            }}>Name: {user.name}</Typography>
            <Typography sx={{
              fontSize: "40px",
              backgroundColor: "green",
            }}>Email: {user.email}</Typography>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default User;
