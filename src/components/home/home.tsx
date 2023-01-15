import About from '../about/About';
import Carousel from '../carousel/ImageSlider'
import Contact from '../contact/Contact';
import { FbCourses } from '../courses/FirebaseCourses';
import ResponsiveAppBar from '../navBar/Navbar';
import News from '../news/News';
import RegistrationForm from '../RegistrationForm/RegistrationForm';



function Home() {
  return (
    <div>
      <Carousel/>
      <News/>
      <FbCourses/>
      <About/> 
      <Contact/>   
    </div>
  );
}

export default Home;