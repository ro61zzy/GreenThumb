import { Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import "./herocss.css"

const HeroSection = () => {
  return (
    <Box className="Box" id="/">
       <Typography sx={{fontSize:{ xs: "35px", sm: "70px" }}} className="herotext"><span style={{color:'green', textShadow:'0 3px black'}}> Green</span> thumbing for the modern Gardener</Typography>
    </Box>
  )
}

export default HeroSection