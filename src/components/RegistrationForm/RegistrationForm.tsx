import React, { useState } from 'react';
import { FormControl, InputLabel, Select, MenuItem, TextField, Button, Typography, Container} from '@mui/material';
import './RegistrationForm.css'
import { addForm } from '../../firebase-config';

const RegistrationForm = () => {
  const [name, setName] = useState('');
  const [fatherName, setfatherName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [cnic, setCnic] = useState('');
  const [fcnic, setFcnic] = useState('');
  const [course, setCourse] = useState('Web & App Development');
  const [city, setCity] = useState('Karachi');
  const [gender, setGender] = useState('Male');
  const [dob, setDob] = useState('');
  const [address, setAddress] = useState('');
  const [qualification, setQualification] = useState('Matric');

  const addFormFirebase = (e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    addForm({
      name,
      fatherName,
      email,
      phone,
      cnic,
      fcnic,
      course,
      city,
      gender,
      dob,
      address,
      qualification
    })
    alert("Form added sucessfully")
    function clearField(){
      setName('');
      setfatherName('')
      setEmail('')
      setPhone('')
      setCnic('')
      setFcnic('')
      setCourse('Web & App Development')
      setCity('Karachi')
      setGender('Male')
      setDob('')
      setAddress('')
      setQualification('Matric')
    }
  }

    return(
        <Container sx={{marginY:"2rem"}}>
            <Typography variant='h3' component='h1' textAlign='center' sx={{marginBottom:'1rem'}}>Registration Form</Typography>
            <form onSubmit={(e) => addFormFirebase(e)}>
              <div className='form1'>
                <div className='form-element'>  
                  <label >Full Name</label>
                  <TextField size='medium' placeholder="Full Name" required value={name} onChange={(e)=> setName(e.target.value)}/>
                </div>
                <div className='form-element'>  
                  <label >Father Name</label>
                  <TextField size='medium' placeholder="Father Name" required value={fatherName} onChange={(e)=> setfatherName(e.target.value)}/>
                </div>
                <div className='form-element'>  
                  <label >Email</label>
                  <TextField type={email} size='medium' placeholder="Email"required value={email} onChange={(e)=> setEmail(e.target.value)} />
                </div>
                <div className='form-element'>  
                  <label >Phone</label>
                  <TextField size='medium' placeholder="Phone" required value={phone} onChange={(e)=> setPhone(e.target.value)}/>
                </div>
                <div className='form-element'>  
                  <label >CNIC</label>
                  <TextField size='medium' placeholder="CNIC" required value={cnic} onChange={(e)=> setCnic(e.target.value)}/>
                </div>
                <div className='form-element'>  
                  <label >Father's CNIC(optional)</label>
                  <TextField size='medium' placeholder="Father's CNIC(optional)" value={fcnic} onChange={(e)=> setFcnic(e.target.value)}/>
                </div>

                <div className="form-element">
                  <label>Select Course</label>
                  <select required value={course} onChange={(e)=> setCourse(e.target.value)}>
                      <option value="Web & App Development">Web & App Development</option>
                      <option value="Graphic Designing">Graphic Designing</option>
                      <option value="Ai & Chatbot">Ai & Chatbot</option>
                  </select>
                </div>
                <div className="form-element">
                  <label>Select City</label>
                  <select required value={city} onChange={(e)=> setCity(e.target.value)}>
                      <option value="Karachi">Karachi</option>
                      <option value="Hyderabd">Hyderabd</option>
                      <option value="Faislabad">Faislabad</option>
                  </select>
                </div>
                <div className="form-element">
                  <label>Select Gender</label>
                  <select required value={gender} onChange={(e)=> setGender(e.target.value)}>
                      <option value="Male">Male</option>
                      <option value="Female">Female</option>
                  </select>
                </div>
                <div className="form-element">
                <label>Date of Birth:</label>
                <input type="date" id="birthday" name="birthday" required value={dob} onChange={(e)=> setDob(e.target.value)}/>
                </div>
                
              </div>
              <div className='form2'>
                <div className="form-element" >
                  <label >Address</label>
                  <TextField size='medium' placeholder="Address" required value={address} onChange={(e)=> setAddress(e.target.value)}/>
                </div>
                <div className="form-element" >
                  <label>Last Qualification</label>
                  <select required value={qualification} onChange={(e)=> setQualification(e.target.value)}>
                      <option value="Matric">Matric</option>
                      <option value="Intermediate">Intermediate</option>
                  </select>
                </div>
                <button type='submit'>Submit</button>
              </div>
            </form>
        </Container>    
    )
}

export default RegistrationForm