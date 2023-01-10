import { DocumentData, QuerySnapshot } from "firebase/firestore";
import { collection, doc, getDocs, onSnapshot, onSnapshotsInSync} from "firebase/firestore";

import { db } from "../../firebase-config";
import { useEffect, useState } from 'react';
import CoursesPages from "./CoursesPages";
import { CourseType } from '../../types/CourseType';
import { Container } from "@mui/system";
import { Grid, Typography } from "@mui/material";



export const FbCourses = () => {
    const [courses, setCourses] = useState<CourseType[]>([]);
    const coursesRef = collection(db,"courses");    

    useEffect(() => onSnapshot(coursesRef, (snapshot : QuerySnapshot<DocumentData>) => {
    setCourses(snapshot.docs.map((doc) => {
        return {
            id: doc.id,
            ...doc.data()
        }
    }))

    }), [])
    console.log(courses)

    return(
        <Container sx={{marginY:"2rem"}}>
            <Typography variant='h3' component='h1' textAlign='center' sx={{marginBottom:'1rem'}}>Courses</Typography>
            <Grid container spacing={2}>
                <Grid item xs={4}>
                    {
                        courses && courses.length ? (
                            <div>
                            {courses.map((course)=>(
                                <CoursesPages key={course.id} course={course}/>
                            ))} 
                            </div>
                        ) : (
                            <div>Hello World</div>
                        )
                    }
                </Grid>
            </Grid>
        </Container>
    );
}; 
