import React, { useEffect, useState } from "react";
import Typography from "@mui/material/Typography";
import FavoriteIcon from "@mui/icons-material/Favorite";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { Container, Stack } from "@mui/material";
import axios from "axios";
import "./favorite.css";

export default function Favorites() {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    // Fetch the data from API endpoint
    axios
      .get("http://localhost:8000/favorites")
      .then((response) => {
        setFavorites(response.data);
      })
      .catch((error) => {
        console.error("Error fetching favorites data: ", error);
      });
  }, []);

  const handleDeleteFavorites = async (id) => {
    try {
      await axios.delete(`http://localhost:8000/favorites/${id}`);
      console.log("Favorite deleted successfully.");
      alert("one item deleted");

      // Remove the deleted favorite from the local state
      setFavorites(favorites.filter((favorite) => favorite._id !== id));
    } catch (error) {
      console.error("Error deleting favorite: ", error);
    }
  };

  return (
    <Container maxWidth="xl" sx={{ background: "inherit" }} id="favorites">
      <Box sx={{ display: "flex", gap: "15px", flexGrow: 1 }} mt="50px">
        <Grid container spacing={2}>
          {favorites.map((favorite, key) => (
            <Grid item xs={6} md={3} key={key}>
              <Box className="card">
                <Stack>
                  <img
                    src={favorite.image}
                    alt="plant"
                    className="plant"
                    style={{
                      height: "360px",
                      objectFit: "cover",
                    }}
                  />
                  <Typography className="Name">{favorite.name}</Typography>
                  <Typography className="description">
                    {favorite.description}
                  </Typography>
                  <Box sx={{ gap: "10px", color: "green" }} p="20px">
                    <FavoriteIcon
                      sx={{ fontSize: "32px" }}
                      color="success"
                      onClick={() => handleDeleteFavorites(favorite._id)}
                    />

                    <WhatsAppIcon sx={{ fontSize: "32px" }} />
                  </Box>
                </Stack>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  );
}
