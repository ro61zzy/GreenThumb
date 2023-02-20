import * as React from "react";
import Typography from "@mui/material/Typography";
import FavoriteIcon from '@mui/icons-material/Favorite';
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Plant from "../../Assets/rename.png"
import { Container, Stack } from "@mui/material";
import './favorite.css'

export default function Favourites() {
  const [favorites, setFavorites] = React.useState([]);
  
  return (
    <Container maxWidth='xl' sx={{background:"inherit"}} id="favorites" >
      <Box sx={{ display: "flex", gap: "15px", flexGrow: 1}} mt='50px'>
        {favorites.length > 0 ? (
          favorites.map((card) => (
            <Grid container spacing={2} key={card.id}>
              <Grid item xs={6} md={3}>
                <Box className="card">
                  <Stack>
                    <img src={card.image} alt={card.name} className="plant"/>
                    <Typography className='Name'>{card.name}</Typography>
                    <Typography className="description">{card.description}</Typography>
                    <Box sx={{gap:'10px', color:'green'}} p='20px 0'>
                      <FavoriteIcon sx={{ fontSize: "32px" }} />
                      <WhatsAppIcon sx={{ fontSize: "32px" }} />
                    </Box>
                  </Stack>
                </Box>
              </Grid>
            </Grid>
          ))
        ) : (
          <Typography variant="h6">No favorites yet!</Typography>
        )}
      </Box>
    </Container>
  );
}
