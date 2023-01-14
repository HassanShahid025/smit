import * as React from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import './navbar.css'
import logo from '../images/logo.png';
import Home from '../home/home';
import RegistrationForm from '../RegistrationForm/RegistrationForm';
import About from '../about/About';
import Contact from '../contact/Contact';
import { FbCourses } from '../courses/FirebaseCourses';

function ResponsiveAppBar() {
  return(
  <>
    <nav>
      <div className="logo">
        <img src={logo} alt="logo"/>
      </div>
      <ul>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='courses'>Courses</Link>
          </li>
        <li>
          <Link to='about'>About</Link>
          </li>
        <li>
          <Link to='contact'>Contact</Link>
          </li>
        <li>
          <Link to='forms'>Forms</Link>
          </li>
      </ul>
      </nav>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='courses' element={<FbCourses/>}/>
        <Route path='about' element={<About/>}/>
        <Route path='contact' element={<Contact/>}/>
        <Route path='forms' element={<RegistrationForm/>}/>
        
      </Routes>
    </>
  );
}
export default ResponsiveAppBar;