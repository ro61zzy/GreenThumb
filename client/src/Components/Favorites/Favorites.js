import * as React from "react";
import Typography from "@mui/material/Typography";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Plant from "../../Assets/rename.png"
import { Container, Stack } from "@mui/material";
import './favorite.css'

export default function Favourites() {
  return (
    <Container maxWidth='xl' sx={{background:"inherit"}} id="favorites" >
    <Box sx={{ display: "flex", gap: "15px", flexGrow: 1}} mt='50px'>
      {/* Card 1 */}
      <Grid container spacing={2}>
        <Grid item xs={6} md={3}>
          <Box className="card">
            <Stack>
              <img src={Plant} alt='plant'className="plant"/>
              <Typography className='Name'>PlantName</Typography>
              <Typography className="description">Description</Typography>
              <Box sx={{gap:'10px', color:'green'}} p='20px 0'>
              <FavoriteBorderIcon sx={{ fontSize: "32px" }} />
              <WhatsAppIcon sx={{ fontSize: "32px" }} />
              </Box>
            </Stack>
          </Box>
        </Grid>
        {/* Card 2 */}
        <Grid item xs={6} md={3}>
        <Box className="card">
            <Stack>
              <img src={Plant} alt='plant'className="plant"/>
              <Typography className='Name'>PlantName</Typography>
              <Typography className="description">Description</Typography>
              <Box sx={{gap:'10px' , color:'green'}}p='20px 0' gap='20px'>
              <FavoriteBorderIcon sx={{ fontSize: "32px" }} />
              <WhatsAppIcon sx={{ fontSize: "32px" }} />
              </Box>
            </Stack>
          </Box>
        </Grid>
        {/* Card 3*/}
        <Grid item xs={6} md={3}>
        <Box className="card">
            <Stack>
              <img src={Plant} alt='plant'className="plant"/>
              <Typography className='Name'>PlantName</Typography>
              <Typography className="description">Description</Typography>
              <Box sx={{gap:'10px',  color:'green'}}p='20px 0'>
              <FavoriteBorderIcon sx={{ fontSize: "32px" }} />
              <WhatsAppIcon sx={{ fontSize: "32px" }} />
              </Box>
            </Stack>
          </Box>
        </Grid>
        {/* Card 4 */}
        <Grid item xs={6} md={3}>
        <Box className="card">
            <Stack>
              <img src={Plant} alt='plant'className="plant"/>
              <Typography className='Name'>PlantName</Typography>
              <Typography className="description">Description</Typography>
              <Box sx={{gap:'10px', color:'green'}}p='20px 0'>
              <FavoriteBorderIcon sx={{ fontSize: "32px" }} />
              <WhatsAppIcon sx={{ fontSize: "32px" }} />
              </Box>
            </Stack>
          </Box>
        </Grid>
      </Grid>
    </Box>
    </Container>
  );
}
