import { Box, ImageList, ImageListItem } from "@mui/material";

import React from "react";
import photo from "../../Assets/pot.jpg";

const PhotoG = () => {
  return (
    <Box>
      <ImageList
        sx={{ width: 500, height: 250 }}
        cols={4}
        variant="quilted"
        rowHeight={121}
      >
        <ImageListItem cols={1} rows={1}>
          <img src={photo} alt="gallery" loading="lazy" />
        </ImageListItem>
        <ImageListItem cols={1} rows={1}>
          <img src={photo} alt="gallery" loading="lazy" />
        </ImageListItem>
        <ImageListItem cols={1} rows={1}>
          <img src={photo} alt="gallery" loading="lazy" />
        </ImageListItem>
        <ImageListItem cols={1} rows={1}>
          <img src={photo} alt="gallery" loading="lazy" />
        </ImageListItem>
      </ImageList>
    </Box>
  );
};

export default PhotoG;
