import Box from '@mui/material/Box';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/home/home';

import About from './components/about/About';
import Carousel from './components/carousel/ImageSlider'
import Contact from './components/contact/Contact';
import { FbCourses } from './components/courses/FirebaseCourses';
import ResponsiveAppBar from './components/navBar/Navbar';
import RegistrationForm from './components/RegistrationForm/RegistrationForm';
import Footer from './components/footer/Footer';



function App() {
  return (
    <div className="App">
      <ResponsiveAppBar/>
      {/* <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='forms' element={<RegistrationForm/>}/>
      </Routes> */}
      <Footer/>
    </div>
  );
}

export default App;
