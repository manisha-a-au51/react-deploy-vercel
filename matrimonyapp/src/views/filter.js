import React, { useState } from 'react'
import {TextField} from "../muiComponents/TextField";
import { Button } from "../muiComponents/Button";
import {Grid} from "../muiComponents/Grid";
import axios from 'axios';

const App = () => {
const [caste, setCaste] = useState("");
const [age, setAge] = useState("");

const handleSubmit=async(e)=>{
    e.preventDefault()
    console.log("******")
    try{
   const resp = await axios({
      method: 'get',
      url: 'http://localhost:5000/users/',
      data: {
       
       },
       params: {
         caste: caste,
         age:age
       }
  });
    console.log(resp.data);
    
  }
  catch(e){

  }
}
const handleChange = (event) => {
    console.log(event)
    switch (event.target.name) {
      case "caste":
        setCaste(event.target.value);
        break;
      case "age":
        setAge(event.target.value);
        break;
      default:
        break;
    }
  };
return (
	<div style={{ marginLeft: '40%', marginTop: '60px' }}>
	
	<Grid container spacing={8} justifyContent={"center"}>
	<Grid xs={4} item>
                <TextField
                 name="caste"
                 type="text"
                 value={caste}
                  label="Caste"
                  placeholder="Enter Caste"
                  variant="outlined"
                  fullWidth
                  required
                  onChange={handleChange}
                />
    </Grid>
	<Grid xs={4} item>
                <TextField
                   name="age"
                   value={age}
                     type="text"
                  label="Age"
                  placeholder="Enter Age"
                  variant="outlined"
                  fullWidth
                  required
                  onChange={handleChange}
                />
    </Grid>
	
	<Grid xs={4} item>
	<Button
                  type="submit"
                  variant="contained"
                  // color="primary"
                  backgroundColor="orange"
                //   fullWidth
                  onClick={handleSubmit}
                >
                  SEARCH
    </Button>
	</Grid>
	</Grid>
	</div>
	
	
	
);
		}


export default App

