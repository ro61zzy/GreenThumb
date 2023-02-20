import * as React from "react";
import Typography from "@mui/material/Typography";
import FavoriteIcon from '@mui/icons-material/Favorite';
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { Container, Stack } from "@mui/material";
import Plant from "../../Assets/rename.png";
import "./favorite.css";

export default function Favorites({ plants }) {
  const [favorites, setFavorites] = React.useState([]);

  const handleAddToFavorites = (id) => {
    if (!favorites.includes(id)) {
      setFavorites((favorites) => [...favorites, id]);
    }
  };

  const isFavorite = (id) => {
    return favorites.includes(id);
  };

  return (
    <Container maxWidth="xl" sx={{ background: "inherit" }} id="favorites">
      <Box sx={{ display: "flex", gap: "15px", flexGrow: 1 }} mt="50px">
        <Grid container spacing={2}>
          {plants.map((plant) => (
            <Grid item xs={6} md={3} key={plant.id}>
              <Box className="card">
                <Stack>
                  <img src={Plant} alt="plant" className="plant" />
                  <Typography className="Name">{plant.name}</Typography>
                  <Typography className="description">{plant.description}</Typography>
                  <Box sx={{ gap: "10px", color: "green" }} p="20px">
                    <FavoriteIcon
                      sx={{ fontSize: "32px" }}
                      color={isFavorite(plant.id) ? "error" : "action"}
                      onClick={() => handleAddToFavorites(plant.id)}
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
