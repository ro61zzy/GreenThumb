import React from "react";
import { Box, Button, Container, Grid, Stack, Typography } from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import Plant1 from "../../Assets/des1.jpg";
import "./desc.css"

const myFunction = () => {
    var dots = document.getElementById("dots");
    var moreText = document.getElementById("more");
    var btnText = document.getElementById("myBtn");
  
    if (dots.style.display === "none") {
      dots.style.display = "inline";
      btnText.innerHTML = "Read more";
      moreText.style.display = "none";
    } else {
      dots.style.display = "none";
      btnText.innerHTML = "Read less";
      moreText.style.display = "inline";
    }
  }

const Description = () => {

  


  return (
    <Container maxWidth="xl">
      <Grid container spacing={1} sx={{ p: "20px 5px" }}>
        <Grid item xs={6} md={3}>
          <Box>
            <Stack>
              <img src={Plant1} alt="gt" />
              <Box sx={{ color: "green" , pt:"15px"}}>
                <FavoriteBorderIcon sx={{ fontSize: "42px" }} />
                <WhatsAppIcon sx={{ fontSize: "42px" }} />
              </Box>
            </Stack>
          </Box>
        </Grid>
        <Grid item xs={6} md={9}>
          <Box sx={{ display: "flex", justifyContent: "space-around" }}>
            <Typography
              sx={{ fontSize: { xs: "13px", sm: "23px", fontWeight: "600" } }}
            >
              Red Roses
            </Typography>
            <Typography sx={{ fontSize: { xs: "13px", sm: "23px" } }}>
              $5
            </Typography>
          </Box>
          <Typography
            sx={{ backgroundColor: "green", fontSize: "30px", p: "3px" }}
          ></Typography>
          <Typography sx={{ fontSize: { xs: "13px", sm: "22px" } }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim <span id="dots">...</span>
            <span id="more"> veniam, quis nostrud exercitation ullamco
            laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
            dolor in reprehenderit in voluptate velit esse cillum dolore eu
            fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
            proident, sunt in culpa qui officia deserunt mollit anim id est
            laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</span>
            <Button onClick={myFunction} id="myBtn">read more</Button>
          </Typography>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Description;
