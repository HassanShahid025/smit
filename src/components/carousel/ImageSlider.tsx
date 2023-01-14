import React from 'react';
import Carousel from 'react-material-ui-carousel'
import { Button, Paper } from "@mui/material";
import img from '../images/slider-img.jpg';
import img1 from '../images/slider-img2.jpg';
import img6 from '../images/slider-img6.png';
import img3 from '../images/slider-img-3.png';
import img5 from '../images/slider-img5.jpg';
import Box from '@mui/material/Box';


const sxStyles = {
    width:"100vw",
    height:"350px",
    overflowY:"hidden",
}

function Example()
{
    return (
        <Carousel animation="slide" duration={500} navButtonsAlwaysVisible={true} indicators={false} sx={{
            width:"100wh",
        }}>
            <Paper sx={sxStyles}>
            <img src={img3} style={{
                height:"100%",
                width:"100%",
                objectFit:"contain"
            }}/>
        </Paper>
            <Paper sx={sxStyles}>
            <img src={img6} style={{
                height:"100%",
                width:"100%",
                objectFit:"contain"
            }}/>
        </Paper >
            <Paper sx={sxStyles}>
            <img src={img5} style={{
                height:"100%",
                width:"100%",
                objectFit:"contain"
            }}/>
        </Paper>
        
        </Carousel>
    )
}

export default Example