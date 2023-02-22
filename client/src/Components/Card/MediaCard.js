import React, {useEffect, useState} from "react";
import Typography from "@mui/material/Typography";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { Container, Stack } from "@mui/material";
import axios from "axios";
import "./card.css";

export default function MediaCard(props) {
  const [plants, setPlants] = useState([]);

  useEffect(() => {
    // Fetch the data from API endpoint
    axios.get("http://localhost:8000/plants")
      .then((response) => {
        setPlants(response.data);        
      })
      .catch((error) => {
        console.error("Error fetching plants data: ", error);
      });
  }, []);



 const saveFavorites = async (plant) => {
    try {
    await axios.post("http://localhost:8000/favorites", plant);
      console.log("Favorite saved successfully.");
      alert("added to favorite")
    } catch (error) {
      console.error("Error saving favorite: ", error);
    }
  };
  

  return (
    <Container  maxWidth="xl" sx={{ background: "inherit" }}>
      <Box sx={{ display: "flex", gap: "15px", flexGrow: 1 }} mt="50px">
        <Grid container spacing={2}>
          {plants.map((plant, key) => {
            // console.log("hii imeenda ", plant.image);
            let plant_image = plant.image;
            return (
              <Grid item xs={6} md={3} key={key}>
                <Box className="card">
                  <Stack>
                    <img
                      src={plant_image}
                      alt="this is an "
                      className="plant"
                      style={{                        
                        height: "360px",
                        objectFit: "cover",
                      }}
                    />

                    <Typography className="name">{plant.name}</Typography>
                    <Typography className="description">
                      {plant.description}
                    </Typography>
                    <Typography className="price">{plant.price}</Typography>
                    <Box sx={{ display:"flex", justifyContent:"space-around", p:"0 30%", gap: "40px", color: "green" }} p="5px" pb="15px">
                    <FavoriteBorderIcon
                        sx={{ fontSize: "42px" }}
                        onClick={() => saveFavorites(plant)}
                      />
                      <WhatsAppIcon sx={{ fontSize: "42px" }} />
                    </Box>
                  </Stack>
                </Box>
              </Grid>
            );
          })}
        </Grid>
      </Box>
    </Container>
  );
}
