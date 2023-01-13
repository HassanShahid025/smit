import React, { useState } from 'react';
import { Grid, Paper, Typography } from "@mui/material";
import { Container } from "@mui/system";
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import './contact.css'
import { addMessage } from '../../firebase-config';


  



const Contact = () =>{

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const sendMessage = (e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    addMessage({
        name,
        email,
        subject,
        message
    })

    alert("Message send successfully")
    setName('')
    setEmail('')
    setSubject('')
    setMessage('')
  }

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
                    <div className="heading">
                        <h1>Send Us a Message</h1>
                    </div>
                    <form onSubmit={(e) => sendMessage(e)}>
                        <div className="input-fields">
                            <div className="name-email">
                                <input className="name-input" type="text" placeholder="Your Name" value={name} onChange={(e)=> setName(e.target.value)}/>
                                <input type="text" placeholder="Your Email" value={email} onChange={(e)=> setEmail(e.target.value)}/>
                            </div>
                            <input className="full-length" type="text" placeholder="Subject" style={{display:"block"}} value={subject} onChange={(e)=> setSubject(e.target.value)}/>
                            <textarea className="full-length" placeholder="Message" value={message} onChange={(e)=> setMessage(e.target.value)} rows={5}></textarea>
                            <button typeof='submit'>Send Message</button>
                        </div>
                    </form>
                </Grid>
            </Grid>
        </Container>
    )
}

export default Contact;