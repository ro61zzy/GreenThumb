import React, { useEffect, useState } from "react";
import Typography from "@mui/material/Typography";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { Container, Stack } from "@mui/material";
import axios from "axios";
import "./card.css";

import jwt from "jwt-decode";

export default function MediaCard(props) {
  const [plants, setPlants] = useState([]);
  const [hasaccount, setHasAccount] = useState("no account");

  function hasAccount(params) {
    const token = localStorage.token;
    if (token === undefined) {
      setHasAccount("no account");
      return;
    } else {
      const decodedToken = jwt(token);
      setHasAccount(decodedToken.name);
    }
  }

  // console.log("user data", decodedToken);

  useEffect(() => {
    // Fetch the data from API endpoint
    axios
      .get("https://green-thumb-xvb2.vercel.app/plants/")
      .then((response) => {
        // console.log()
        setPlants(response.data);
      })
      .catch((error) => {
        console.error("Error fetching plants data: ", error);
      });
  }, []);

  const saveFavorites = async (plant) => {
    try {
      await axios.post("https://green-thumb-xvb2.vercel.app/favorites", plant);
      console.log("Favorite saved successfully.");
      alert("added to favorite");
    } catch (error) {
      console.error("Error saving favorite: ", error);
    }
  };

  function checkLoggedIn() {
    var logged = window.confirm(
      "Seems u are not logged in?, want to create an account?"
    );
    if (logged) {
      window.location.href = "/signup";
    }
  }

  return (
    <Container maxWidth="xl" sx={{ background: "inherit" }}>
      <Box sx={{ display: "flex", gap: "15px", flexGrow: 1 }} mt="30px">
        <Grid container spacing={2}>
          {plants.map((plant, key) => {
            // console.log("hii imeenda ", plant.image);
            let plant_image = plant.image;
            return (
              <Grid item xs={6} md={3} key={key}>
                <Box className="card">
                  <Stack>
                    <a href={`/plants/${plant._id}`}>
                      <img
                        src={plant_image}
                        alt="this is an "
                        className="plant"
                        style={{
                          width: "100%",
                          height: "340px",
                          objectFit: "cover",
                        }}
                      />
                    </a>
                    <Typography
                      className="name"
                      sx={{
                        fontSize: { xs: "12px", sm: "21px" },
                        color: "#2f7828",
                      }}
                    >
                      {plant.name}
                    </Typography>
                    <Typography
                      className="description"
                      sx={{
                        fontSize: {
                          xs: "10px",
                          sm: "17px",
                          height: "100px !important",
                        },
                      }}
                    >
                      {plant.description}
                    </Typography>
                    <Typography
                      className="price"
                      sx={{
                        fontSize: { xs: "13px", sm: "20px" },
                        fontWeight: "500",
                      }}
                    >
                      {plant.price}
                    </Typography>
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
                      {hasaccount === "no account" ? (
                        <>
                          <button className="icon-button">
                            <FavoriteBorderIcon
                              sx={{ fontSize: { xs: "26px", sm: "42px" } }}
                              onClick={checkLoggedIn}
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
                                `https://wa.me/${plant.seller_phone}?text=Hello! I'm interested in your ${plant.name} plant listed on GreenThumb, could I please get more info?.`
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
            );
          })}
        </Grid>
      </Box>
    </Container>
  );
}
