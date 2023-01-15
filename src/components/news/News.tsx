import './news.css'
import React from 'react';
import Carousel from 'react-material-ui-carousel'
import { Button, Paper } from "@mui/material";
import img from '../images/slider-img.jpg';
import img1 from '../images/slider-img2.jpg';
import img6 from '../images/slider-img6.png';
import img3 from '../images/slider-img-3.png';
import img5 from '../images/slider-img5.jpg';
import Box from '@mui/material/Box';
import { borderBottom } from '@mui/system';


const sxStyles = {
    width:"100%",
    height:"350px",
    overflowY:"hidden",
    paddingX:"9rem",
    display:"flex",
    alignItems:"center",
    backgroundColor:"linear-gradient(#E7E6E6,#FBFBFB)",
}

function News()
{
    return (
        <Carousel animation="slide" duration={500} navButtonsAlwaysVisible={true} indicators={false} sx={{
            width:"100wh",
            height:"15rem",
            marginTop:'2rem',
            borderTop:"2px solid #e1e1e1",
            borderBottom:"2px solid #e1e1e1"
        }}>
            <Paper sx={sxStyles}>
                <div className='news-element'>
                    <h5>January 13, 2023</h5>
                    <a href="">hello world</a>
                </div>
                <div className='news-element'>
                    <h5>January 10, 2023</h5>
                    <a href="">hhhhhhhhh</a>
                </div>
                <div className='news-element'>
                    <h5>January 6, 2023</h5>
                    <a href="">aaaaaaaa</a>
                </div>
                <div className='news-element'>
                    <h5>January 6, 2023</h5>
                    <a href="">aaaaaaaa</a>
                </div>
               
               
                
        </Paper>
        
        </Carousel>
    )
}

export default News