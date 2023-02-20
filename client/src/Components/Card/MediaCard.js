import * as React from "react";
import Typography from "@mui/material/Typography";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { Container, Stack } from "@mui/material";
import axios from "axios";
import "./card.css";

export default function MediaCard(props) {
  const [plants, setPlants] = React.useState([]);

  React.useEffect(() => {
    // Fetch the data from API endpoint
    axios.get("/api/v1/plants")
      .then((response) => {
        setPlants(response.data);
      })
      .catch((error) => {
        console.error("Error fetching plants data: ", error);
      });
  }, []);

  const handleAddToFavorites = (id) => {
    if (!props.favorites.includes(id)) {
      props.setFavorites((favorites) => [...favorites, id]);
    }
  };

  const isFavorite = (id) => {
    return props.favorites.includes(id);
  };

  return (
    <Container maxWidth="xl" sx={{ background: "inherit" }}>
      <Box sx={{ display: "flex", gap: "15px", flexGrow: 1 }} mt="50px">
        {plants.map((plant) => (
          <Grid key={plant.id} container spacing={2}>
            <Grid item xs={6} md={3}>
              <Box className="card">
                <Stack>
                  <img src={plant.image} alt={plant.name} className="plant" />
                  <Typography className="Name">{plant.name}</Typography>
                  <Typography className="description">{plant.description}</Typography>
                  <Box sx={{ gap: "10px", color: "green" }} p="20px">
                    <FavoriteBorderIcon
                      sx={{ fontSize: "32px" }}
                      onClick={() => handleAddToFavorites(plant.id)}
                      color={isFavorite(plant.id) ? "error" : "action"}
                    />
                    <WhatsAppIcon sx={{ fontSize: "32px" }} />
                  </Box>
                </Stack>
              </Box>
            </Grid>
          </Grid>
        ))}
      </Box>
    </Container>
  );
}
