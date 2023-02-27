import { Box, ImageList, ImageListItem } from "@mui/material";
import React from "react";

import gal1 from "../../Assets/gal1.png";
import gal2 from "../../Assets/gal2.png";
import gal3 from "../../Assets/gal3.png";

const PhotoG = () => {
  return (
    <Box>
      <Box sx={{  m:"30px" }}>
        <ImageList
          sx={{
            width: { xs: "260px", sm: "950px" },
            height: { xs: "80px", sm: "400px" },
            margin: "auto",
          }}
          cols={3}
          variant="quilted"
          // rowHeight={400}
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
      <Box sx={{position:"relative", height:{ xs: "20px", sm: "210px" }}} ></Box>
    </Box>
  );
};

export default PhotoG;
//sx={{  width: { xs: "100px", sm: "210px" }}