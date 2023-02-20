import React from 'react'
import { Box, Typography } from '@mui/material'
import './footer.css'
import GT from "../../Assets/sprout.png";


function Footer() {
  return (
    <Box className='footer'>
        <Typography className='text'  pt="20px">The Green Thumb</Typography>
        
        <Typography mt='20px' ><img src={GT} alt="gt" style={{ height: "50px" }} /></Typography>
        <Typography sx={{display:'flex', alignItems:'center', justifyContent:"center"}}>Copyright © {new Date().getFullYear()}<span style={{fontWeight:"600"}}>&nbsp;Rose Wachuka</span></Typography>
    </Box>
  )
}

export default Footer