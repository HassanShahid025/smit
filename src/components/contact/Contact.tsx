import { Grid, Paper, Typography } from "@mui/material";
import { Container } from "@mui/system";
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import './contact.css'


const Contact = () =>{
    return(
        <Container sx={{marginY:"2rem"}}>
            <Typography variant='h3' component='h1' textAlign='center' sx={{marginBottom:'1rem'}}>Contact US</Typography>
            <Grid container spacing={6} sx={{paddingX:"2rem"}}>
                <Grid item>
                    <div className="contact-info">
                       <div className="paper-item">
                            <div className="icon">
                                <LocationOnIcon sx={{color:'white' , fontSize:40}} />
                            </div>
                            <div className="paper-text">
                                <h4>Our Location</h4>
                                <p>C 7, Block 2 Gulshan-e-Iqbal, Karachi</p>
                            </div>
                        </div> 
                       <div className="paper-item">
                            <div className="icon">
                                <PhoneIcon sx={{color:'white' , fontSize:40}}/>
                            </div>
                            <div className="paper-text">
                                <h4>Call Us</h4>
                                <p>+92321 2958627</p>
                            </div>
                        </div> 
                       <div className="paper-item">
                            <div className="icon">
                                <EmailIcon sx={{color:'white' , fontSize:40}} />
                            </div>
                            <div className="paper-text">
                                <h4>Email Us</h4>
                                <p>smit@google.com</p>
                            </div>
                        </div> 
                    </div>
                </Grid>
                <Grid item>
                    
                </Grid>
            </Grid>
        </Container>
    )
}

export default Contact;