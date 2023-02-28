import React, { useState, useEffect } from "react";
import { Box, Button, Container, Grid, Stack, Typography } from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import axios from "axios";
import "./desc.css";
import jwt from "jwt-decode";
import { useParams } from "react-router-dom";

const Description = (props) => {
  const [plant, setPlant] = useState({});
  const { id } = useParams();
  const [hasAccount, setHasAccount] = useState("");

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      setHasAccount("no account");
    } else {
      const decodedToken = jwt(token);
      // 
      if (decodedToken.name) {
        setHasAccount("existing account");
      } else {
        setHasAccount("no account");
      }
    }
  }, []);

  // console.log("user data", decodedToken);
  function checkLoggedIn() {
    var logged = window.confirm(
      "You are not Logged In. Create Account?"
    );
    if (logged) {
      window.location.href = "/signup";
    }
  }

  useEffect(() => {
    const fetchPlant = async () => {
      const response = await axios.get(
        `https://green-thumb-xvb2.vercel.app/plants/${id}`
      );
      setPlant(response.data);
      // console.log('Plant data:', response.data);
    };

    fetchPlant();
  }, [id]);

  const saveFavorites = async (plant) => {
    try {
      await axios.post("https://green-thumb-xvb2.vercel.app/favorites", plant);
      console.log("Favorite saved successfully.");
      alert("added to favorite");
    } catch (error) {
      console.error("Error saving favorite: ", error);
    }
  };

  return (
    <Container maxWidth="xl">
      <Grid
        container
        spacing={1}
        sx={{ p: { xs: "50px 5px", sm: "90px 200px" } }}
      >
        <Grid item xs={6} md={3}>
          <Box>
            <Stack>
              <Box className="image">
                <img src={plant.image} alt={plant.name} className="image" />
              </Box>

              
              {/* <Box sx={{ color: "green", pt: { xs: "12px", sm: "15px" } }}>
                <FavoriteBorderIcon
                  sx={{ fontSize: { xs: "26px", sm: "42px" } }}
                  onClick={() => saveFavorites(plant)}
                />
                <WhatsAppIcon sx={{ fontSize: { xs: "28px", sm: "43px" } }} />
              </Box> */}



                <Box
                      sx={{
                        display: "flex",
                        justifyContent: "space-around",
                        p: "0 30%",
                        gap: "40px",
                        color: "green",
                      }}
                      p="5px"
                      pb="15px"
                    >
                      {hasAccount === "no account" ? (
                        <>
                          <button className="icon-button">
                            <FavoriteBorderIcon
                              sx={{ fontSize: { xs: "26px", sm: "42px" } }}
                              onClick={() => {
                                checkLoggedIn();
                              }}
                            />
                          </button>

                          <button
                            className="icon-button"
                            onClick={checkLoggedIn}
                          >
                            <WhatsAppIcon
                              sx={{ fontSize: { xs: "26px", sm: "42px" } }}
                            />
                          </button>
                        </>
                      ) : (
                        <>
                          <button className="icon-button">
                            <FavoriteBorderIcon
                              sx={{ fontSize: { xs: "26px", sm: "42px" } }}
                              onClick={() => saveFavorites(plant)}
                            />
                          </button>

                          <button
                            className="icon-button"
                            onClick={() =>
                              window.open(
                                `https://wa.me/${plant.seller_phone}?text=Hello! I'm interested in the ${plant.name} plant listed on GreenThumb, could I please get more info?.`
                              )
                            }
                          >
                            <WhatsAppIcon
                              sx={{ fontSize: { xs: "26px", sm: "42px" } }}
                            />
                          </button>
                        </>
                      )}
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
          <Typography sx={{ fontSize: { xs: "12px", sm: "22px" }, width:  { xs: "90%", sm: "80%" }, m:"auto", fontWeight:"500", fontStyle:"italic" }}>
            {plant.description}
          </Typography>



          {plant && plant.details && (
            
            <Typography sx={{ fontSize: { xs: "12px", sm: "22px" },textAlign:"left" }}>
             
              {plant.details}
            </Typography>
          )}


        </Grid>
      </Grid>
    </Container>
  );
};

export default Description;
