import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
// import { CardContent} from "../muiComponents/CardContent";
// import { Card } from "../muiComponents/Card";
import { Button } from "./muiComponents/Button";
import { Typography } from "./muiComponents/Typography";
import { Grid } from "./muiComponents/Grid";
import profil from "./images/profil.jpg";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import ButtonBase from "@mui/material/ButtonBase";
import FileInput from "./FileInput";

import FormControl from "@mui/material/FormControl";
import BorderColorIcon from "@mui/icons-material/BorderColor";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputAdornment from "@mui/material/InputAdornment";
import Box from "@mui/material/Box";
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import Navbar from './views/Navbar';
import axios from "axios";


const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

function FormRow() {
  return (
    <React.Fragment>
      <Grid item xs={4}>
      
      </Grid>
      <Grid item xs={4}>
      
      </Grid>
      <Grid item xs={4}>
        
      </Grid>
    </React.Fragment>
  );
}
const Img = styled("img")({
  margin: "auto",
  display: "block",
  maxWidth: "100%",
  maxHeight: "100%",
});

export default function ComplexGrid() {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
const handleSubmit=async(e)=>{
  e.preventDefault()
  console.log("******")
  try{
 const resp = await axios({
    method: 'post',
    url: 'http://localhost:5000/users/login',
    data: {
     
      email:email,
      password:password
     }
});
  console.log(resp.data);
  window.localStorage.setItem('token', resp.data.token)
  window.location.href=`http://localhost:3000/Home`

}
catch(e){

}
}
  return (
    
    <Paper
      sx={{
        p: 2,
        margin: "40px",
        maxWidth: 1500,
        flexGrow: 1,
        backgroundColor: (theme) =>
          theme.palette.mode === "dark" ? "#1A2027" : "#fff",
      }}
    >
       {/* <Navbar/> */}
      <Grid container spacing={2}>
        <Grid item>
          <ButtonBase sx={{ width: 128, height: 128 }}>
            {/* <Img alt="complex" src="/images/profil.jpg" /> */}
            <Stack direction="row" spacing={2}>
            <FileInput/>
                {/* <Button
                  variant="contained"
                component="label"
              >
                Upload File
                <input
                  type="file"
                  hidden
                />
              </Button> */}
               
            </Stack>
          </ButtonBase>
        </Grid>
       
        <Grid item xs={12} sm container>
         
          <Grid item xs container direction="column" spacing={2}>
            <Grid item xs>
              
              <Typography gutterBottom variant="subtitle1" component="div">
                <strong>Personal Detalis</strong>
              </Typography>
              <Grid container rowSpacing={1} columnSpacing={{ xs: 2, sm: 3, md: 4 }}>
  <Grid item xs={4}>
  <Grid item xs={6}>
  <p>Full Name:</p>
  </Grid>
  <Grid item xs={6}>
  <FormControl
                      sx={{ m: 1, width: "25ch", flexGrow: 1 }}
                      variant="outlined"
                    >
                      <OutlinedInput
                        id="outlined-adornment-weight"
                        endAdornment={
                          <InputAdornment position="end">
                            <BorderColorIcon> </BorderColorIcon>
                          </InputAdornment>
                        }
                       
                      />
                    </FormControl>
                    </Grid>
                  
  </Grid>
  <Grid item xs={4}>
    
  <p>Birth Date:</p>
  <FormControl
                      sx={{ m: 1, width: "25ch", flexGrow: 1 }}
                      variant="outlined"
                    >
                       <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DatePicker />
    </LocalizationProvider>
                     
                      
                    
                    </FormControl>
                    
  </Grid>
  <Grid item xs={4}>

                <p>Birth Time:</p>
                
                <FormControl
                      sx={{ m: 1, width: "25ch", flexGrow: 1 }}
                      variant="outlined"
                    >
                      <OutlinedInput
                        id="outlined-adornment-weight"
                        endAdornment={
                          <InputAdornment position="end">
                            <BorderColorIcon> </BorderColorIcon>
                          </InputAdornment>
                        }
                     
                      />
                    </FormControl>
  
  </Grid>
 
</Grid>

<Grid container rowSpacing={1} columnSpacing={{ xs: 2, sm: 3, md: 4 }}>
  <Grid item xs={4}>
  <p>Birth Place</p>
  <FormControl
                      sx={{ m: 1, width: "25ch", flexGrow: 1 }}
                      variant="outlined"
                    >
                      <OutlinedInput
                        id="outlined-adornment-weight"
                        endAdornment={
                          <InputAdornment position="end">
                            <BorderColorIcon> </BorderColorIcon>
                          </InputAdornment>
                        }
                       
                      />
                    </FormControl>
                  
  </Grid>
  <Grid item xs={4}>
    
  <p>Height</p>
  <FormControl
                      sx={{ m: 1, width: "25ch", flexGrow: 1 }}
                      variant="outlined"
                    >
                      
                      <OutlinedInput
                        id="outlined-adornment-weight"
                        endAdornment={
                          <InputAdornment position="end">
                            <BorderColorIcon> </BorderColorIcon>
                          </InputAdornment>
                        }
                       
                      />
                      
                    
                    </FormControl>
                    
  </Grid>
  <Grid item xs={4}>

                <p>Devak/Gotra:</p>
                
                <FormControl
                      sx={{ m: 1, width: "25ch", flexGrow: 1 }}
                      variant="outlined"
                    >
                      <OutlinedInput
                        id="outlined-adornment-weight"
                        endAdornment={
                          <InputAdornment position="end">
                            <BorderColorIcon> </BorderColorIcon>
                          </InputAdornment>
                        }
                     
                      />
                    </FormControl>
  
  </Grid>
 
</Grid>
             
<Grid container rowSpacing={1} columnSpacing={{ xs: 2, sm: 3, md: 4 }}>
  <Grid item xs={4}>
  <p>Caste:</p>
  <FormControl
                      sx={{ m: 1, width: "25ch", flexGrow: 1 }}
                      variant="outlined"
                    >
                      <OutlinedInput
                        id="outlined-adornment-weight"
                        endAdornment={
                          <InputAdornment position="end">
                            <BorderColorIcon> </BorderColorIcon>
                          </InputAdornment>
                        }
                       
                      />
                    </FormControl>
                  
  </Grid>
  <Grid item xs={4}>
    
  <p>Education:</p>
  <FormControl
                      sx={{ m: 1, width: "25ch", flexGrow: 1 }}
                      variant="outlined"
                    >
                     <OutlinedInput
                        id="outlined-adornment-weight"
                        endAdornment={
                          <InputAdornment position="end">
                            <BorderColorIcon> </BorderColorIcon>
                          </InputAdornment>
                        }
                       
                      /> 
                     
                      
                    
                    </FormControl>
                    
  </Grid>
  <Grid item xs={4}>

                <p>Occupation:</p>
                
                <FormControl
                      sx={{ m: 1, width: "25ch", flexGrow: 1 }}
                      variant="outlined"
                    >
                      <OutlinedInput
                        id="outlined-adornment-weight"
                        endAdornment={
                          <InputAdornment position="end">
                            <BorderColorIcon> </BorderColorIcon>
                          </InputAdornment>
                        }
                     
                      />
                    </FormControl>
  
  </Grid>
 
</Grid>
<br />
<strong>Family Detalis</strong>
<Grid container rowSpacing={1} columnSpacing={{ xs: 2, sm: 3, md: 4 }}>


  <Grid item xs={4}>
    <p>Father's Name:</p>
  <FormControl
                      sx={{ m: 1, width: "25ch", flexGrow: 1 }}
                      variant="outlined"
                    >
                      <OutlinedInput
                        id="outlined-adornment-weight"
                        endAdornment={
                          <InputAdornment position="end">
                            <BorderColorIcon> </BorderColorIcon>
                          </InputAdornment>
                        }
                       
                      />
                    </FormControl>
                  
  </Grid>
  <Grid item xs={4}>
    
  <p>Fateher's Occup:</p>
  <FormControl
                      sx={{ m: 1, width: "25ch", flexGrow: 1 }}
                      variant="outlined"
                    >
                      <OutlinedInput
                        id="outlined-adornment-weight"
                        endAdornment={
                          <InputAdornment position="end">
                            <BorderColorIcon> </BorderColorIcon>
                          </InputAdornment>
                        }
                       
                      />
                     
                      
                    
                    </FormControl>
                    
  </Grid>
  <Grid item xs={4}>

                <p>Parents Contact:</p>
                
                <FormControl
                      sx={{ m: 1, width: "25ch", flexGrow: 1 }}
                      variant="outlined"
                    >
                      <OutlinedInput
                        id="outlined-adornment-weight"
                        endAdornment={
                          <InputAdornment position="end">
                            <BorderColorIcon> </BorderColorIcon>
                          </InputAdornment>
                        }
                     
                      />
                    </FormControl>
  
  </Grid>
 </Grid>
             
              
             
              

             
              <Grid container rowSpacing={1} columnSpacing={{ xs: 2, sm: 3, md: 4 }}>
 
                  
    
  

  
</Grid>
                
               

               
               
               
               
              
                {/* <p>Parents Contact:</p>
                <FormControl
                      sx={{ m: 1, width: "25ch", flexGrow: 1 }}
                      variant="outlined"
                    >
                      <OutlinedInput
                        id="outlined-adornment-weight"
                        endAdornment={
                          <InputAdornment position="end">
                            <BorderColorIcon> </BorderColorIcon>
                          </InputAdornment>
                        }
                       
                      />
                    </FormControl> */}
                {/* <p>Father/ Mother:</p>

                <p>Brothers:</p>
                <p>Sisters:</p> */}
              
            </Grid>
            <Grid item>
              <Typography sx={{ cursor: "pointer" }} variant="body2">
                
                <Button onClick={handleSubmit} variant="contained">Submit</Button>
              </Typography>
            </Grid>
          </Grid>
          <Grid item></Grid>
        </Grid>
      </Grid>
    </Paper>
  );
}

// </header>
// </div>

//   );
// }
