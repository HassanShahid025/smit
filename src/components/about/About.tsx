import { Card, CardContent, CardMedia, Container, Grid, Typography } from '@mui/material';
import * as React from 'react';
import './About.css'
import aboutImg from '../images/about3.jpg'


const About = () => {
    return(
        <Container sx={{marginY:"2rem"}}>
            <Typography variant='h3' component='h1' textAlign='center' sx={{marginBottom:'1rem'}}>About</Typography>
            <div className='about-conatiner'>
                <div className='about-img-container'>
                    <img src={aboutImg} alt="image" className='about-img'/>
                </div >
                <div className='about-text'>
                    <h1>PROVIDING QUALITY EDUCATION</h1>
                    <Typography variant="body1">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </Typography>
                    <div className='card-container'>
                        <Card sx={{ maxWidth: 250,backgroundColor:'red' }}>
                            <CardContent>
                                <Typography variant="h4" color="white" textAlign='center'>
                                10+
                                </Typography>
                                <Typography variant="h4" color="white">
                                Courses
                                </Typography>
                            </CardContent>
                        </Card>
                        <Card sx={{ maxWidth: 150,backgroundColor:'green' }}>
                            <CardContent>
                                <Typography variant="h4" color="white" textAlign='center'>
                                10+
                                </Typography>
                                <Typography variant="h4" color="white">
                                Courses
                                </Typography>
                            </CardContent>
                        </Card>
                        <Card sx={{ maxWidth: 150,backgroundColor:'green' }}>
                            <CardContent>
                                <Typography variant="h4" color="white" textAlign='center'>
                                10+
                                </Typography>
                                <Typography variant="h4" color="white">
                                Courses
                                </Typography>
                            </CardContent>
                        </Card>
                        <Card sx={{ maxWidth: 250,backgroundColor:'green' }}>
                            <CardContent>
                                <Typography variant="h4" color="white" textAlign='center'>
                                10+
                                </Typography>
                                <Typography variant="h4" color="white">
                                Courses
                                </Typography>
                            </CardContent>
                        </Card>
                   </div>
                </div>
            </div>
        </Container>
    )}

  export default About;  

