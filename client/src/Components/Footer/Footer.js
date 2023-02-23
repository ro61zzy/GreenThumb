import React from 'react'
import { Box, Typography } from '@mui/material'
import './footer.css'
import GT from "../../Assets/sprout.png";


function Footer() {
  return (
    <Box className='footer'>
        <Typography className='text' sx={{pt: { xs: "5px", sm: "20px" }}} >The Green Thumb</Typography>
        
        <Typography sx={{mt: { xs: "2px", sm: "20px" }}} ><img src={GT} alt="gt" className='footimg'  /></Typography>
        <Typography sx={{display:'flex', alignItems:'center', justifyContent:"center", fontSize: { xs: "10px", sm: "18px" } }}>Copyright © {new Date().getFullYear()}<span style={{fontWeight:"600"}}>&nbsp;Rose Wachuka</span></Typography>
    </Box>
  )
}

export default Footer