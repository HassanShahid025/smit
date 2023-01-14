import About from '../about/About';
import Carousel from '../carousel/ImageSlider'
import Contact from '../contact/Contact';
import { FbCourses } from '../courses/FirebaseCourses';
import ResponsiveAppBar from '../navBar/Navbar';
import RegistrationForm from '../RegistrationForm/RegistrationForm';



function Home() {
  return (
    <div>
      <Carousel/>
      <FbCourses/>
      <About/> 
      <Contact/>   
    </div>
  );
}

export default Home;