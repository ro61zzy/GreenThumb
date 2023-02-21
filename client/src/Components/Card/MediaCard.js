import React from "react";
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
    axios
      .get("http://localhost:8000/plants")
      .then((response) => {
        setPlants(response.data);
      })
      .catch((error) => {
        console.error("Error fetching plants data: ", error);
      });
  }, []);

  const saveFavorites = async (id) => {
    try {
      const response = await axios.post(`http://localhost:8000/favorites/${id}`);
      console.log("Favorite saved successfully.");
    } catch (error) {
      console.error("Error saving favorite: ", error);
    }
  };
  

  // const saveFavorites = (id) => {
  //   axios
  //     .post(`http://localhost:8000/favorites/${id}`)
  //     .then((response) => {
  //       console.log("Favorites saved successfully.");
  //     })
  //     .catch((error) => {
  //       console.error("Error saving favorites: ", error);
  //     });
  // };
  
  const handleAddToFavorites = (id) => {
    if (!props.favorites || !props.favorites.includes(id)) {
      props.setFavorites((favorites) => [...favorites, id]);
      saveFavorites(id);
    }
  };
  
  


  // const saveFavorites = (favorites) => {
  //   axios
  //     .post("http://localhost:8000/favorites/:id", favorites)
  //     .then((response) => {
  //       console.log("Favorites saved successfully.");
  //     })
  //     .catch((error) => {
  //       console.error("Error saving favorites: ", error);
  //     });
  // };

  // const handleAddToFavorites = (id) => {
  //   if (!props.favorites || !props.favorites.includes(id)) {
  //     props.setFavorites((favorites) => [...favorites, id]);
  //     saveFavorites([...props.favorites, id]);
  //   }
  // };

  // const handleAddToFavorites = (id) => {
  //   if (!props.favorites.includes(id)) {
  //     props.setFavorites((favorites) => [...favorites, id]);
  //     saveFavorites([...props.favorites, id]);
  //   }
  // };

  // const handleAddToFavorites = (id) => {
  //   if (!props.favorites.includes(id)) {
  //     props.setFavorites((favorites) => [...favorites, id]);
  //   }
  // };

  const isFavorite = (id) => {
    return props.favorites && props.favorites.includes(id);
  };

  return (
    <Container maxWidth="xl" sx={{ background: "inherit" }}>
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
                        width: "360px",
                        height: "360px",
                        objectFit: "cover",
                      }}
                    />

                    <Typography className="name">{plant.name}</Typography>
                    <Typography className="description">
                      {plant.description}
                    </Typography>
                    <Typography className="price">{plant.price}</Typography>
                    <Box sx={{ gap: "10px", color: "green" }} p="5px" pb="15px">
                      <FavoriteBorderIcon
                        sx={{ fontSize: "32px" }}
                        color={isFavorite(plant.id) ? "error" : "success"}
                        onClick={() => handleAddToFavorites(plant.id)}
                      />
                      <WhatsAppIcon sx={{ fontSize: "32px" }} />
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
