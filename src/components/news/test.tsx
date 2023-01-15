import './news.css'
import { useEffect, useState } from 'react';
import Carousel from 'react-material-ui-carousel'
import { NewsType } from '../../types/CourseType';
import { onSnapshot } from 'firebase/firestore';
import { newsRef } from '../../firebase-config';
import { DocumentData, QuerySnapshot } from "firebase/firestore";
import NewsSection from './news2';
import {  Paper } from "@mui/material";


const sxStyles = {
    width:"100%",
    height:"350px",
    overflowY:"hidden",
    paddingX:"9rem",
    display:"flex",
    alignItems:"center",
    backgroundColor:"linear-gradient(#E7E6E6,#FBFBFB)",
}


    
  
  const MyComponent = () => {
    
    const [news, setNews] = useState<NewsType[]>([]);
    
    useEffect(() => onSnapshot(newsRef, (snapshot : QuerySnapshot<DocumentData>) => {
        setNews(snapshot.docs.map((doc) => {
        return {
            id: doc.id,
            ...doc.data()
        }
    }))

    }), [])
    
    const chunkSize = 4; // number of elements in each "chunk"
    const chunks = Math.ceil(news.length / chunkSize); // number of chunks
    
    return (
      <>
        <Carousel autoPlay={false} animation="slide" duration={500} navButtonsAlwaysVisible={true} indicators={false} sx={{
            width:"100wh",
            height:"15rem",
            marginTop:'2rem',
            borderTop:"2px solid #e1e1e1",
            borderBottom:"2px solid #e1e1e1"
        }}>
        {Array.from({ length: chunks }, (_, i) => {
          const start = i * chunkSize;
          const end = start + chunkSize;
          const chunk = news.slice(start, end);
  
          return (
            <>
            <Paper sx={sxStyles}>
              {chunk.map((n) => (
                  <NewsSection news={n}/>
              ))}
              </Paper>
            </>
          );
        })}
        </Carousel>
      </>
    );
  };
  export default MyComponent;