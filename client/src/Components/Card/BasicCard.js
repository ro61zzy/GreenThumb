import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";

export default function MediaCard() {
  return (
    <Box sx={{ display: "flex", gap: "15px", flexGrow: 1 }}>
      {/* Card 1 */}
      <Grid container spacing={2}>
        <Grid item xs={6} md={3}>
          <Card >
            <CardMedia
              sx={{ height: 140 }}
              image="/static/images/cards/contemplative-reptile.jpg"
              title="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                PlantName
              </Typography>
              <Typography variant="body2" color="text.secondary">
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
              </Typography>
            </CardContent>
            <CardActions
              sx={{ color: "green", justifyContent: "center", gap: "20px" }}
            >
              <FavoriteBorderIcon sx={{ fontSize: "42px" }} />
              <WhatsAppIcon sx={{ fontSize: "42px" }} />
            </CardActions>
          </Card>
        </Grid>
        {/* Card 2 */}
        <Grid item xs={6} md={3}>
          <Card >
            <CardMedia
              sx={{ height: 140 }}
              image="/static/images/cards/contemplative-reptile.jpg"
              title="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                PlantName
              </Typography>
              <Typography variant="body2" color="text.secondary">
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
              </Typography>
            </CardContent>
            <CardActions
              sx={{ color: "green", justifyContent: "center", gap: "20px" }}
            >
              <FavoriteBorderIcon sx={{ fontSize: "42px" }} />
              <WhatsAppIcon sx={{ fontSize: "42px" }} />
            </CardActions>
          </Card>
        </Grid>
        {/* Card 3*/}
        <Grid item xs={6} md={3}>
          <Card >
            <CardMedia
              sx={{ height: 140 }}
              image="/static/images/cards/contemplative-reptile.jpg"
              title="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                PlantName
              </Typography>
              <Typography variant="body2" color="text.secondary">
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
              </Typography>
            </CardContent>
            <CardActions
              sx={{ color: "green", justifyContent: "center", gap: "20px" }}
            >
              <FavoriteBorderIcon sx={{ fontSize: "42px" }} />
              <WhatsAppIcon sx={{ fontSize: "42px" }} />
            </CardActions>
          </Card>
        </Grid>
        {/* Card 4 */}
        <Grid item xs={6} md={3}>
          <Card >
            <CardMedia
              sx={{ height: 140 }}
              image="/static/images/cards/contemplative-reptile.jpg"
              title="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                PlantName
              </Typography>
              <Typography variant="body2" color="text.secondary">
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
              </Typography>
            </CardContent>
            <CardActions
              sx={{ color: "green", justifyContent: "center", gap: "20px" }}
            >
              <FavoriteBorderIcon sx={{ fontSize: "42px" }} />
              <WhatsAppIcon sx={{ fontSize: "42px" }} />
            </CardActions>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
}
