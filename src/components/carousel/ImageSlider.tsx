import React from 'react';
import Carousel from 'react-material-ui-carousel'
import { Button, Paper } from "@mui/material";
import img from '../images/slider-img.jpg';
import img1 from '../images/slider-img2.jpg';
import img2 from '../images/slider-img3.jpg';
import Box from '@mui/material/Box';


const sxStyles = {
    width:"100%",
    height:"350px",
    overflowY:"hidden"
}

function Example()
{
    return (
        <Carousel animation="slide" duration={500} sx={{
            width:"100wh",
        }}>
            <Paper sx={sxStyles}>
            <img src={img} style={{
                height:"100%",
                width:"100%",
                objectFit:"contain"
            }}/>
        </Paper>
            <Paper sx={sxStyles}>
            <img src={img1} style={{
                height:"100%",
                width:"100%",
                objectFit:"contain"
            }}/>
        </Paper >
            <Paper sx={sxStyles}>
            <img src={img2} style={{
                height:"100%",
                width:"100%",
                objectFit:"contain"
            }}/>
        </Paper>
        
        </Carousel>
    )
}

export default Example