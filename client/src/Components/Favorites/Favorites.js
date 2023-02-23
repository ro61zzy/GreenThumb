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
      .get("https://green-thumb-xvb2.vercel.app/favorites")
      .then((response) => {
        setFavorites(response.data);
      })
      .catch((error) => {
        console.error("Error fetching favorites data: ", error);
      });
  }, []);

  const handleDeleteFavorites = async (id) => {
    try {
      await axios.delete(`https://green-thumb-xvb2.vercel.app/favorites/${id}`);
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
      <Box sx={{ display: "flex", gap: "15px", flexGrow: 1 }} mt="50px"  >
        <Grid container spacing={2}>
          {favorites.map((favorite, key) => (
            <Grid item xs={6} md={3} key={key}>
              <Box className="card">
                <Stack>
                <a href={`/favorites/${favorites._id}`}>
                  {console.log(favorite._id)}
                  <img
                    src={favorite.image}
                    alt="plant"
                    className="plant"
                    style={{
                      width:"100%",
                      height: "340px",
                      objectFit: "cover",
                    }}
                  />
                  </a>
                  <Typography className="Name" sx={{ fontSize: { xs: "12px", sm: "21px" }, color:"#20401e" }}>{favorite.name}</Typography>
                  <Typography className="description" sx={{ fontSize: { xs: "10px", sm: "17px" }, height:"100px !important" }}>
                    {favorite.description}
                  </Typography>
                  <Typography className="price" sx={{ fontSize: { xs: "13px", sm: "20px" }, fontWeight:"500" }}>{favorite.price}</Typography>
                  <Box sx={{ display:"flex", justifyContent:"space-around", p:"0 30%", gap: "40px", color: "green" }} p="5px" pb="15px">
                    <FavoriteIcon
                     sx={{ fontSize: { xs: "26px", sm: "42px" } }}
                      color="success"
                      onClick={() => handleDeleteFavorites(favorite._id)}
                    />
                    <WhatsAppIcon sx={{ fontSize: { xs: "26px", sm: "42px" } }} />
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
