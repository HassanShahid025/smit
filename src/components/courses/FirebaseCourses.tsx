import { DocumentData, QuerySnapshot } from "firebase/firestore";
import { collection, doc, getDocs, onSnapshot, onSnapshotsInSync} from "firebase/firestore";

import { coursesRef, db } from "../../firebase-config";
import { useEffect, useState } from 'react';
import CoursesPages from "./CoursesPages";
import { CourseType } from '../../types/CourseType';
import { Container } from "@mui/system";
import { Grid, Typography } from "@mui/material";



export const FbCourses = () => {
    const [courses, setCourses] = useState<CourseType[]>([]);
    
    useEffect(() => onSnapshot(coursesRef, (snapshot : QuerySnapshot<DocumentData>) => {
    setCourses(snapshot.docs.map((doc) => {
        return {
            id: doc.id,
            ...doc.data()
        }
    }))

    }), [])
    
    return(
        <Container sx={{marginY:"2rem"}}>
            <Typography variant='h3' component='h1' textAlign='center' sx={{marginBottom:'1rem'}}>Courses</Typography>
            <Grid container spacing={6} sx={{paddingX:"2rem"}}>  
                {
                    courses && courses.length ? (
                    courses.map((course) => (
                        <Grid item xs={4} key={course.id}>
                        <CoursesPages course={course} />
                        </Grid>
                    ))
                    ) : (
                    <div>Hello World</div>
                    )
                }
            </Grid>
        </Container>
    );
}; 
