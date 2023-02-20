import * as React from "react";
import Typography from "@mui/material/Typography";
import FavoriteIcon from '@mui/icons-material/Favorite';
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
//import Plant from "../../Assets/rename.png"
import { Container, Stack } from "@mui/material";
import './favorite.css'

export default function Favourites(props) {
  const { favorites } = props;

  return (
    <Container maxWidth='xl' sx={{background:"inherit"}} id="favorites" >
      <Box sx={{ display: "flex", gap: "15px", flexGrow: 1}} mt='50px'>
        {favorites.map((favorite) => (
          <Grid container spacing={2} key={favorite.id}>
            <Grid item xs={6} md={3}>
              <Box className="card">
                <Stack>
                  <img src={favorite.image} alt={favorite.name} className="plant" />
                  <Typography className='Name'>{favorite.name}</Typography>
                  <Typography className="description">{favorite.description}</Typography>
                  <Box sx={{gap:'10px', color:'green'}} p='20px 0'>
                    <FavoriteIcon sx={{ fontSize: "32px" }} />
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
