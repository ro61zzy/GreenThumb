import { Box, ImageList, ImageListItem } from "@mui/material";
import React from "react";

import gal1 from "../../Assets/gal1.png";
import gal2 from "../../Assets/gal2.png";
import gal3 from "../../Assets/gal3.png";

const PhotoG = () => {
  return (
    <Box>
      <Box sx={{ backgroundColor: "#e0ebeb" }}>
        <ImageList
          sx={{
            width: { xs: "360px", sm: "700px" },
            height: { xs: "180px", sm: "200px" },
            margin: "auto",
          }}
          cols={3}
          variant="quilted"
          rowHeight={200}
        >
          <ImageListItem cols={1} rows={1}>
            <img src={gal1} alt="images" loading="lazy" />
          </ImageListItem>
          <ImageListItem cols={1} rows={1}>
            <img src={gal2} alt="images" loading="lazy" />
          </ImageListItem>

          <ImageListItem cols={1} rows={1}>
            <img src={gal3} alt="images" loading="lazy" />
          </ImageListItem>
        </ImageList>
      </Box>
    </Box>
  );
};

export default PhotoG;
