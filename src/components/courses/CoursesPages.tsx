import { Typography, useColorScheme } from '@mui/material';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import { useEffect, useState } from 'react';
import course1 from '../images/course1.png'
import course2 from '../images/course2.jpg'
import course3 from '../images/course3.jpg'
import Bottom from './Bottom'
import { db } from "../../firebase-config";
import { collection, doc, getDocs } from "firebase/firestore";

const paperHover = {
    transition: 'transform 0.5s',
    '&:hover': {transform: 'scale(1.1)'}
}


const CoursesPages = () => {


    const [courses, setCourses] = useState<{}[]>([]);
    const coursesRef = collection(db,"courses");    
    
    useEffect(() =>{
        const getCourses = async () =>{
            const data = await getDocs(coursesRef);
            setCourses(data.docs.map((doc) => ({...doc.data(), id:doc.id})));
        };
        getCourses();

    }, [])

    {courses.map((course) => {
        console.log(course.name)
    })}

    return (
      <Container sx={{marginY:"2rem"}}>
            
        <Typography variant='h3' component='h1' textAlign='center' sx={{marginBottom:'1rem'}}>Courses</Typography>
        <Grid container spacing={8}>
            <Grid item xs={4}>
                <Paper elevation={3} sx={paperHover}> 
                <   img className='course-img' src={course1} alt="" />  
                <Typography variant="h5" component="h2"  sx={{
                   marginY:'1rem',
                   fontWeight:'500',
                   transform:'translateX(35%)'

                }}>CCNP</Typography>
                <Bottom/>
                </Paper>
            </Grid>
            <Grid item xs={4}>
                <Paper elevation={3} sx={paperHover}> 
                <   img className='course-img' src={course2} alt="" />  
                <Typography variant="h5" component="h2"  sx={{
                   marginY:'1rem',
                   fontWeight:'500',
                   transform:'translateX(35%)'

                }}>CCNP</Typography>
                <Bottom/>
                </Paper>
            </Grid>
            <Grid item xs={4}>
                <Paper elevation={3} sx={paperHover}> 
                <   img className='course-img' src={course3} alt="" />  
                <Typography variant="h5" component="h2"  sx={{
                   marginY:'1rem',
                   fontWeight:'500',
                   transform:'translateX(35%)'

                }}>CCNP</Typography>
                <Bottom/>
                </Paper>
            </Grid>
            <Grid item xs={4}>
                <Paper elevation={3} sx={paperHover}> 
                <   img className='course-img' src={course1} alt="" />  
                <Typography variant="h5" component="h2"  sx={{
                   marginY:'1rem',
                   fontWeight:'500',
                   transform:'translateX(35%)'

                }}>CCNP</Typography>
                <Bottom/>
                </Paper>
            </Grid>
            

        </Grid>
      </Container>
    );
  }

export default CoursesPages
