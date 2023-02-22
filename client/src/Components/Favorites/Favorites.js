import React, {useState} from "react";
import Typography from "@mui/material/Typography";
import FavoriteIcon from '@mui/icons-material/Favorite';
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { Container, Stack } from "@mui/material";
import axios from "axios";
import Plant from "../../Assets/rename.png";
import "./favorite.css";

export default function Favorites() {
  const [favorites, setFavorites] = useState([]);

  React.useEffect(() => {
    // Fetch the data from API endpoint
    axios.get("http://localhost:8000/favorites")
      .then((response) => {
        setFavorites(response.data);
      })
      .catch((error) => {
        console.error("Error fetching favorites data: ", error);
      });
  }, []);

  // const handleAddToFavorites = (id) => {
  //   if (!favorites.includes(id)) {
  //     axios.post("http://localhost:8000/favorites", { id })
  //       .then((response) => {
  //         setFavorites((favorites) => [...favorites, response.data.id]);
  //       })
  //       .catch((error) => {
  //         console.error("Error adding plant to favorites: ", error);
  //       });
  //   }
  // };

  const isFavorite = (id) => {
    return favorites.includes(id);
  };

  return (
    <Container maxWidth="xl" sx={{ background: "inherit" }} id="favorites">
      <Box sx={{ display: "flex", gap: "15px", flexGrow: 1 }} mt="50px">
        <Grid container spacing={2}>
         
          {favorites.map((favorite, key) => (
          
            <Grid item xs={6} md={3} key={key}>
              <Box className="card">
                <Stack>
                  <img src={Plant} alt="plant" className="plant" />
                  <Typography className="Name">{favorite.name}</Typography>
                  <Typography className="description">{favorite.description}</Typography>
                  <Box sx={{ gap: "10px", color: "green" }} p="20px">
                    <FavoriteIcon
                      sx={{ fontSize: "32px" }}
                      color="error"
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
