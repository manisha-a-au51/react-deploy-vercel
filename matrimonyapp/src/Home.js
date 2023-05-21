import * as React from 'react';



import { Typography } from "./muiComponents/Typography";
import { Grid } from "./muiComponents/Grid";

import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';

import {  Card, CardContent,CardMedia} from '@mui/material';

import Navbar from './views/Navbar';
import axios from 'axios';
import  { useState } from "react";
const Img = styled('img')({
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
    
  });
        
  // const cardsData = [
  //   { title: 'Virat Kohli', description: '34',occupation:'Crickter', imageUrl: '/images/img1.jpeg' },
  //   { title: 'Suresh Raina', description: '36' ,occupation:'Crickter', imageUrl: '/images/image2.jpeg' },
  //    { title: 'Ishan Kishan', description: '24',occupation:'Crickter', imageUrl: '/images/image3.jpeg '},
  //    { title: 'Surya Kumar Yadav', description:'32' ,occupation:'Crickter', imageUrl: '/images/image4.jpeg ' },
  //    { title: 'Rohit', description: '36',occupation:'Crickter', imageUrl: '/images/img5.jpeg '},
  //    { title: 'Smiriti', description: '26',occupation:'Crickter', imageUrl: '/images/img6.jpeg '},
  //    { title: 'Mithali', description: '40',occupation:'Crickter', imageUrl: '/images/img7.jpeg '},
    
  //    { title: 'Harleen deol', description: '24',occupation:'Crickter', imageUrl: '/images/img10.jpeg '},
  //    { title: 'Sanju Samson', description: '28',occupation:'Crickter', imageUrl: '/images/img11.jpg '},
  //    { title: 'Jaiswal', description: '24',occupation:'Crickter', imageUrl: '/images/img12.jpg '},
  //    { title: 'Hardik Pandya', description: '29',occupation:'Crickter', imageUrl: '/images/img13.jpeg '},
  //    { title: 'Radha', description: '23',occupation:'Crickter', imageUrl: '/images/img14.jpeg '},
    
  //   // Add more cards as needed
  // ];
 

export default function ComplexGrid() {
  const [cardsData,setCardsData]= useState([]);
  const handleSubmit=async(caste, age)=>{
      // e.preventDefault()
      console.log("******")
      try{
     const resp = await axios({
        method: 'get',
        url: 'http://localhost:5000/users/',
        data: {
          // email:email,
          // password:password
         },
         params: {
           caste: caste,
           age:age,
         }
    });
    setCardsData(resp.data);
      // window.location.href=`http://localhost:3000/Home`
    }
    catch(e){
  
    }
  }
 React.useEffect(()=>{
  handleSubmit()
 },[])
   
  return (
    <Paper
      sx={{
        p: 2,
        margin: '40px',
        maxWidth: '100%',
        flexGrow: 1,
        backgroundColor: (theme) =>
          theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
      }}
    >
       <Navbar handleSearch={handleSubmit} />
     
      <Grid container spacing={2}>
      {cardsData.map((card, index) => (
        <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
          <Card>
            <CardContent>
            <CardMedia
              component="img"
              height="250"
              image={process.env.PUBLIC_URL + card.imageUrl}
              alt={card.title}
            />
             <Typography variant="h5" component="div">
                Name:{card.name} 
              </Typography>
                <Typography variant="body2" color="text.secondary">
                Age:{card.age} 
              </Typography>
              <Typography variant="body2" color="text.secondary">
               Caste: {card.caste}
              
              </Typography>
              <Typography variant="body2" color="text.secondary">
               Occupation: {card.occupation}
              
              </Typography>
            </CardContent>
            {/* <Card.Link href={`/profile1/${id}`} >View Details</Card.Link> */}
          </Card>
         
        </Grid>
      ))}
    </Grid>
      
   
      
     
    </Paper>
  );
}

      
    
    // </header>
    // </div>
    
//   );
// }