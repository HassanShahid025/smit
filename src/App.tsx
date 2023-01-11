import Box from '@mui/material/Box';
import React from 'react';
import './App.css';
import About from './components/about/About';
import Carousel from './components/carousel/ImageSlider'
import CoursesPages from './components/courses/CoursesPages';
import { FbCourses } from './components/courses/FirebaseCourses';
import ResponsiveAppBar from './components/navBar/Navbar';
import RegistrationForm from './components/RegistrationForm/RegistrationForm';


function App() {
  return (
    <div className="App">
      <ResponsiveAppBar/>
      <Box>
      <Carousel/>
      </Box>
      <Box>
        <FbCourses/>
      </Box>
      <Box>
        <About/>
      </Box>
      <Box>
        <RegistrationForm/>
      </Box>
    </div>
  );
}

export default App;
