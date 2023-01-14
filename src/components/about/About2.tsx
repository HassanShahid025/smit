import { Container, Typography } from "@mui/material";
import AboutCards from "./Card";
import aboutImg from '../images/about3.jpg'
import SchoolIcon from '@mui/icons-material/School';
import CardMembershipIcon from '@mui/icons-material/CardMembership';


const About2 = () => {
    return(
        <Container sx={{marginY:"7rem", backgroundColor:"#f5f5f5"}}>
            <div className='about-conatiner'>
                <div className='about-text'>
                    <h1>WHY YOU SHOULD START LEARING WITH US?</h1>
                    <Typography variant="body1">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </Typography>
                <div>

                    <div className="about-props-container">
                        <div className="about-props-icon">
                            <SchoolIcon sx={{color:'white', fontSize:40}}/>
                        </div>
                        <div>
                            <h2 className="about-props-heading">SKILLED INSTRUCTORS</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum eos nemo officiis similique minus perspiciatis facere fugit laudantium assumenda deleniti!</p>
                        </div>
                    </div>
                    <div className="about-props-container">
                        <div className="about-props-icon">
                            <CardMembershipIcon sx={{color:'white', fontSize:40}}/>
                        </div>
                        <div>
                            <h2 className="about-props-heading">INTERNATIONAL CERTIFICATE</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum eos nemo officiis similique minus perspiciatis facere fugit laudantium assumenda deleniti!</p>
                        </div>
                    </div>
                    <div className="about-props-container">
                        <div className="about-props-icon">
                            <SchoolIcon sx={{color:'white', fontSize:40}}/>
                        </div>
                        <div>
                            <h2 className="about-props-heading">SKILLED INSTRUCTORS</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum eos nemo officiis similique minus perspiciatis facere fugit laudantium assumenda deleniti!</p>
                        </div>
                    </div>
                    
                </div>

                </div>
                <div className='about2-img-container'>
                    <img src={aboutImg} alt="image" className='about-img'/>
                </div >
            </div>
        </Container>
    )
}

export default About2; 


