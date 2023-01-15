import './news.css'
import { useEffect, useState } from 'react';
import Carousel from 'react-material-ui-carousel'
import {  Paper } from "@mui/material";
import { NewsType } from '../../types/CourseType';
import { onSnapshot } from 'firebase/firestore';
import { newsRef } from '../../firebase-config';
import { DocumentData, QuerySnapshot } from "firebase/firestore";
import NewsSection from './news2';


const sxStyles = {
    width:"100%",
    height:"350px",
    overflowY:"hidden",
    paddingX:"9rem",
    display:"flex",
    alignItems:"center",
    backgroundColor:"linear-gradient(#E7E6E6,#FBFBFB)",
}

function News()
{
    const [news, setNews] = useState<NewsType[]>([]);
    
    useEffect(() => onSnapshot(newsRef, (snapshot : QuerySnapshot<DocumentData>) => {
        setNews(snapshot.docs.map((doc) => {
        return {
            id: doc.id,
            ...doc.data()
        }
    }))

    }), [])
    
    const firstFour = news.slice(0, 4);

    return (
        <Carousel autoPlay={false} animation="slide" duration={500} navButtonsAlwaysVisible={true} indicators={false} sx={{
            width:"100wh",
            height:"15rem",
            marginTop:'2rem',
            borderTop:"2px solid #e1e1e1",
            borderBottom:"2px solid #e1e1e1"
        }}>
            <Paper sx={sxStyles}>
            {
                firstFour && firstFour.length ? (
                    
                    firstFour.map((n) => (
                    <NewsSection news={n}/>
                ))
                ) : (
                <div>Loading...</div>
                )
            }
            </Paper>
            {/* <Paper sx={sxStyles}>
                <div className='news-element'>
                    <h5>January 13, 2023</h5>
                    <a href="">hello world</a>
                </div>
                <div className='news-element'>
                    <h5>January 10, 2023</h5>
                    <a href="">hhhhhhhhh</a>
                </div>
                <div className='news-element'>
                    <h5>January 6, 2023</h5>
                    <a href="">aaaaaaaa</a>
                </div>
                <div className='news-element'>
                    <h5>January 6, 2023</h5>
                    <a href="">aaaaaaaa</a>
                </div>
               
               
                
        </Paper>
            <Paper sx={sxStyles}>
                <div className='news-element'>
                    <h5>January 13, 2023</h5>
                    <a href="">hello world</a>
                </div>
                <div className='news-element'>
                    <h5>January 10, 2023</h5>
                    <a href="">hhhhhhhhh</a>
                </div>
                <div className='news-element'>
                    <h5>January 6, 2023</h5>
                    <a href="">aaaaaaaa</a>
                </div>
                <div className='news-element'>
                    <h5>January 6, 2023</h5>
                    <a href="">aaaaaaaa</a>
                </div>
               
               
                
        </Paper> */}
        
        </Carousel>
    )
}

export default News