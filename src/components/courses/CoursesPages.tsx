import { Typography, useColorScheme } from '@mui/material';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import { useEffect, useState } from 'react';
import course1 from '../images/course1.png'
import course2 from '../images/course2.jpg'
import course3 from '../images/course3.jpg'
import { CourseType } from '../../types/CourseType';
import PersonIcon from '@mui/icons-material/Person';
import StarIcon from '@mui/icons-material/Star';
import './Bottom.css'



const paperHover = {
    transition: 'transform 0.5s',
    '&:hover': {transform: 'scale(1.1)'}
}
interface IProps {
    course:CourseType
}


const CoursesPages = ({course}:IProps) => {

    return (
      <div>
            
                <Paper elevation={3} sx={paperHover}> 
                    <   img className='course-img' src={course1} alt="" />  
                    <Typography variant="h5" component="h2"  sx={{
                    marginY:'1rem',
                    fontWeight:'500',
                    transform:'translateX(35%)'

                    }}>{course.name}</Typography>
                    <div className='bottom'>
                        <div className='flex'>
                        <PersonIcon className='.bottomIcon'/>
                        <p className='bottomText'>{course.teacher}</p>
                        </div>
                        <div className='flex'>
                            <StarIcon className='.bottomIcon'/>
                            <p className='bottomText'>{`${course.rating} (${course.reviews})`}</p>
                        </div>
                    </div>
                </Paper>





            {/* <Grid item xs={4}>
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
            </Grid> */}
      </div>
    );
  }

export default CoursesPages
