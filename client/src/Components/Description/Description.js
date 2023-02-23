import React, { useState, useEffect } from "react";
import { Box, Button, Container, Grid, Stack, Typography } from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import axios from "axios";
import "./desc.css";
import { useParams } from "react-router-dom";

const Description = (props) => {
  const [plant, setPlant] = useState({});
  const { id } = useParams();

  useEffect(() => {
    const fetchPlant = async () => {
      const response = await axios.get(
        `https://green-thumb-xvb2.vercel.app/plants/${id}`
      );
      setPlant(response.data);
      // console.log('Plant data:', response.data);
    };

    fetchPlant();
  }, [id]);

  const saveFavorites = async (plant) => {
    try {
      await axios.post("https://green-thumb-xvb2.vercel.app/favorites", plant);
      console.log("Favorite saved successfully.");
      alert("added to favorite");
    } catch (error) {
      console.error("Error saving favorite: ", error);
    }
  };

  return (
    <Container maxWidth="xl">
      <Grid
        container
        spacing={1}
        sx={{ p: { xs: "50px 5px", sm: "90px 200px" } }}
      >
        <Grid item xs={6} md={3}>
          <Box>
            <Stack>
              <Box className="image">
                <img src={plant.image} alt={plant.name} className="image" />
              </Box>
              <Box sx={{ color: "green", pt: { xs: "12px", sm: "15px" } }}>
                <FavoriteBorderIcon
                  sx={{ fontSize: { xs: "26px", sm: "42px" } }}
                  onClick={() => saveFavorites(plant)}
                />
                <WhatsAppIcon sx={{ fontSize: { xs: "28px", sm: "43px" } }} />
              </Box>
            </Stack>
          </Box>
        </Grid>
        <Grid item xs={6} md={9}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-around",
            }}
          >
            <Typography
              sx={{ fontSize: { xs: "13px", sm: "23px" }, fontWeight: "600" }}
            >
              {plant.name}
            </Typography>
            <Typography sx={{ fontSize: { xs: "13px", sm: "23px" } }}>
              {plant.price}
            </Typography>
          </Box>
          <Typography
            sx={{ backgroundColor: "green", fontSize: "30px", p: "3px" }}
          ></Typography>
          <Typography sx={{ fontSize: { xs: "12px", sm: "22px" }, width:  { xs: "90%", sm: "80%" }, m:"auto", fontWeight:"500", fontStyle:"italic" }}>
            {plant.description}
          </Typography>



          {plant && plant.details && (
            
            <Typography sx={{ fontSize: { xs: "12px", sm: "22px" },textAlign:"left" }}>
              {/* {console.log(plant.details)} */}
              {plant.details}
            </Typography>
          )}


        </Grid>
      </Grid>
    </Container>
  );
};

export default Description;
