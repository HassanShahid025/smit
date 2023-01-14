import { Card, CardContent, CardMedia, Container, Grid, Typography } from '@mui/material';
import AboutCards from './Card';
import * as React from 'react';
import './About.css'
import aboutImg from '../images/about3.jpg'
import About2 from './About2';


const About = () => {
    return(
        <Container sx={{marginY:"2rem"}}>
            <Container sx={{marginY:"2rem"}}>
                <Typography variant='h3' component='h1' textAlign='center' sx={{marginY:'3rem', fontSize:'5rem',fontWeight:'700'}}>About</Typography>
                <div className='about-conatiner'>
                    <div className='about-img-container'>
                        <img src={aboutImg} alt="image" className='about-img'/>
                    </div >
                    <div className='about-text'>
                        <h1>PROVIDING QUALITY  FREE EDUCATION TO EVERYONE </h1>
                        <Typography variant="body1">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        </Typography>
                        <AboutCards/>
                    </div>
                </div>
            </Container>
            <About2/>
        </Container>
    )}

  export default About;  

