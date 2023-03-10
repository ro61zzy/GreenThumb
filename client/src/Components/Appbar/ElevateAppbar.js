import React, {useEffect, useState} from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
// import ListItem from "@mui/material/ListItem";
// import ListItemButton from "@mui/material/ListItemButton";
// import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Container } from "@mui/material";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

import GT from "../../Assets/sprout.png";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

const drawerWidth = 240;
//const navItems = ["Home", "Favourites"];

function ElevationScroll(props) {
  const { children, window } = props;
  

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: window ? window() : undefined,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}

ElevationScroll.propTypes = {
  children: PropTypes.element.isRequired,

  window: PropTypes.func,
};

function DrawerAppBar(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [user, setUser] =useState({});
  const { id } = useParams();


  useEffect(() => {
      const fetchUser = async () => {
        const response = await axios.get(
          `http://localhost:8000/profile/${id}`
        );
        setUser(response.data);
        // console.log('Plant data:', response.data);
      };
  
      fetchUser();
    }, [id]);


  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography variant="h6" sx={{ my: 2, color:"green", fontWeight:"600" }}>
        GT
      </Typography>
      <Divider />
      <Box
        sx={{ display: "flex", flexDirection: "column", textAlign: "center" }}
      >
        <Link to="/home" variant="body2" style={{ textDecoration: "none" }}>
          <Button 
            sx={{
              color: "#000",
              fontFamily: "Lexend",
              fontWeight: 400,
              fontSize: "15px",
              textTransform: "capitalize",
            }}
          >
            Home
          </Button>
        </Link>
        <Link to="/favorites" variant="body2" style={{ textDecoration: "none" }}>
          <Button sx={{
              color: "#000",
              fontFamily: "Lexend",
              fontWeight: 400,
              fontSize: "15px",
              textTransform: "capitalize",
            }}>Favorites</Button>
        </Link>
      </Box>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex", height: "6vh" }}>
      <CssBaseline />
      <ElevationScroll {...props}>
        <AppBar
          elevation={0}
          component="nav"
          sx={{ backgroundColor: "#e0ebeb", color: "#000", pt: "27px" }}
        >
          <Container maxWidth="xl">
            {" "}
            <Toolbar>
              <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="start"
                onClick={handleDrawerToggle}
                sx={{ mr: 2, display: { sm: "none" } }}
              >
                <MenuIcon />
              </IconButton>

              <Box sx={{ flex: 0.2 }}>
                <Typography
                  variant="h3"
                  component="div"
                  sx={{
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <img src={GT} alt="gt" style={{ height: "36px" }} />
                  <Typography
                    sx={{
                      color: "#4A9C80",
                      fontWeight: 900,
                      fontSize: { xs: "30px", sm: "36px" },
                    }}
                  >
                    GreenThumb
                  </Typography>
                </Typography>
              </Box>

              <Box
                sx={{
                  justifyContent: "space-evenly",
                  flex: 0.6,
                  display: { xs: "none", sm: "flex" },
                }}
              >
                <Link
                  to="/home"
                  variant="body2"
                  style={{ textDecoration: "none" }}
                >
                  <Button
                    sx={{
                      display: "flex",
                      color: "#000",
                      fontFamily: "Lexend",
                      fontWeight: 400,
                      fontSize: "20px",
                      textTransform: "capitalize",
                      textDecoration: "none",
                    }}
                  >
                    Home
                  </Button>
                </Link>

                <Link
                  to="/favorites"
                  variant="body2"
                  style={{ textDecoration: "none" }}
                >
                  <Button
                    sx={{
                      display: "flex",
                      color: "#000",
                      fontFamily: "Lexend",
                      fontWeight: 400,
                      fontSize: "20px",
                      textTransform: "capitalize",
                      textDecoration: "none",
                    }}
                  >
                    Favorites
                  </Button>
                </Link>
               
              </Box>
              <a href={`/profile/${user._id}`}>
              <Box>
                <AccountCircleIcon
                  sx={{
                    fontSize: { xs: "30px", sm: "40px" },
                    ml: "35px",
                    mt: "5px",
                  }}
                />
              </Box>
              </a>
            </Toolbar>
          </Container>
        </AppBar>
      </ElevationScroll>
      <Box component="nav">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
      <Box component="main" sx={{ p: 3 }}>
        <Toolbar />
      </Box>
    </Box>
  );
}

DrawerAppBar.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default DrawerAppBar;
