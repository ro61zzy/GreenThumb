//To make the add to favorites icon work, you need to add state to your MediaCard component to keep track of which plants have been favorited,
// and update the state when the user clicks on the add to favorites icon.

//Here is an example implementation that adds the necessary state to MediaCard









import * as React from "react";
import Typography from "@mui/material/Typography";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Plant from "../../Assets/rename.png";
import { Container, Stack } from "@mui/material";
import "./card.css";

export default function MediaCard() {
  const [favorites, setFavorites] = React.useState([]);

  const handleAddToFavorites = (name) => {
    setFavorites((favorites) => [...favorites, name]);
  };

  const isFavorite = (name) => {
    return favorites.includes(name);
  };

  return (
    <Container maxWidth="xl" sx={{ background: "inherit" }}>
      <Box sx={{ display: "flex", gap: "15px", flexGrow: 1 }} mt="50px">
        {/* Card 1 */}
        <Grid container spacing={2}>
          <Grid item xs={6} md={3}>
            <Box className="card">
              <Stack>
                <img src={Plant} alt="plant" className="plant" />
                <Typography className="Name">Rose flower</Typography>
                <Typography className="description">
                  A rose is a plant that is a member of the genus Rosa, which
                  consists of some 100 species of perennial shrubs in the rose
                  family. Many roses are cultivated for their beautiful flowers
                </Typography>
                <Box sx={{ gap: "10px", color: "green" }} p="20px">
                  <FavoriteBorderIcon
                    sx={{ fontSize: "32px" }}
                    onClick={() => handleAddToFavorites("Rose flower")}
                    color={isFavorite("Rose flower") ? "error" : "action"}
                  />
                  <WhatsAppIcon sx={{ fontSize: "32px" }} />
                </Box>
              </Stack>
            </Box>
          </Grid>
          {/* Card 2 */}
          <Grid item xs={6} md={3}>
            <Box className="card">
              <Stack>
                <img src={Plant} alt="plant" className="plant" />
                <Typography className="Name">Rose flower</Typography>
                <Typography className="description">
                  A rose is a plant that is a member of the genus Rosa, which
                  consists of some 100 species of perennial shrubs in the rose
                  family. Many roses are cultivated for their beautiful flowers
                </Typography>
                <Box sx={{ gap: "10px", color: "green" }} p="20px 0" gap="20px">
                  <FavoriteBorderIcon
                    sx={{ fontSize: "32px" }}
                    onClick={() => handleAddToFavorites("Rose flower")}
                    color={isFavorite("Rose flower") ? "error" : "action"}
                  />
                  <WhatsAppIcon sx={{ fontSize: "32px" }} />
                </Box>
              </Stack>
            </Box>
          </Grid>
          {/* Card 3*/}
          <Grid item xs={6} md={3}>
            <Box className="card">
              <Stack>
                <img src={Plant} alt="plant" className="plant" />
                <Typography className="Name">Rose flower</Typography>
                <Typography className="description">
                  A rose is a plant that is a member of the
