import React, { useState, useEffect } from "react";
import {
  Box,
  Button,
  Container,
  Grid,
  Stack,
  Typography,
} from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import axios from "axios";
import "./desc.css";
import { useParams } from 'react-router-dom';


// const myFunction = () => {
//   var dots = document.getElementById("dots");
//   var moreText = document.getElementById("more");
//   var btnText = document.getElementById("myBtn");

//   if (dots.style.display === "none") {
//     dots.style.display = "inline";
//     btnText.innerHTML = "Read more";
//     moreText.style.display = "none";
//   } else {
//     dots.style.display = "none";
//     btnText.innerHTML = "Read less";
//     moreText.style.display = "inline";
//   }
// };

const Description = (props) => {
  const [plant, setPlant] = useState({});
  const { id } = useParams();
 

  useEffect(() => {
    const fetchPlant = async () => {
        
      const response = await axios.get(`https://green-thumb-xvb2.vercel.app/plants/${id}`);
      setPlant(response.data);
    };

    fetchPlant();
  }, [id]);

  return (
    <Container maxWidth="xl">
      <Grid
        container
        spacing={1}
        sx={{ p: { xs: "50px 5px", sm: "50px 200px" } }}
      >
        <Grid item xs={6} md={3}>
          <Box>
            <Stack>
              <img src={plant.image} alt={plant.name} />
              <Box
                sx={{ color: "green", pt: { xs: "12px", sm: "15px" } }}
              >
                <FavoriteBorderIcon
                  sx={{ fontSize: { xs: "28px", sm: "43px" } }}
                />
                <WhatsAppIcon sx={{ fontSize: { xs: "28px", sm: "43px" } }} />
              </Box>
            </Stack>
          </Box>
        </Grid>
        <Grid item xs={6} md={9}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-around",
            }}
          >
            <Typography
              sx={{ fontSize: { xs: "13px", sm: "23px" }, fontWeight: "600" }}
            >
              {plant.name}
            </Typography>
            <Typography sx={{ fontSize: { xs: "13px", sm: "23px" } }}>
              {plant.price}
            </Typography>
          </Box>
          <Typography
            sx={{ backgroundColor: "green", fontSize: "30px", p: "3px" }}
          ></Typography>
          <Typography sx={{ fontSize: { xs: "12px", sm: "22px" } }}>
            {plant.description}
          </Typography>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Description;
