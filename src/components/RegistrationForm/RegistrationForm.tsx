import React, { useState } from 'react';
import { FormControl, InputLabel, Select, MenuItem, TextField, Button, Typography, Container} from '@mui/material';
import './RegistrationForm.css'
import { addForm } from '../../firebase-config';

const RegistrationForm = () => {

  const addFormFirebase = (e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form added")
  }
    

    return(
        <Container sx={{marginY:"2rem"}}>
            <Typography variant='h3' component='h1' textAlign='center' sx={{marginBottom:'1rem'}}>Registration Form</Typography>
            <form onSubmit={(e) => addFormFirebase(e)}>
              <div className='form'>
                <div className='form-element'>  
                  <label >First Name</label>
                  <TextField size='medium' placeholder="First Name" />
                </div>
                <div className='form-element'>  
                  <label >Last Name</label>
                  <TextField size='medium' placeholder="Last Name" />
                </div>


                {/* <label>Select Course</label>
                <select value={formData.course} onChange={handleSelectChange}>
                    <option value="Web & App Development">Web & App Development</option>
                    <option value="Graphic Designing">Graphic Designing</option>
                    <option value="Ai & Chatbot">Ai & Chatbot</option>
                </select> */}
              </div>
            </form>
        </Container>    
    )
}

export default RegistrationForm