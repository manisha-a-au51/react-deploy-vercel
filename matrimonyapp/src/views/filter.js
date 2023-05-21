import React, { useState } from 'react'
import {TextField} from '../muiComponents/TextField';
import Autocomplete, { createFilterOptions } from '@material-ui/lab/Autocomplete';
import IconButton from "@material-ui/core/IconButton";
import InputAdornment from "@material-ui/core/InputAdornment";
import SearchIcon from "@material-ui/icons/Search";
import { Button } from "../muiComponents/Button";
import {Grid} from "../muiComponents/Grid";
import axios from 'axios';
// import "./App.css"
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
        // email:email,
        // password:password
       },
       params: {
         caste: caste,
         age:age
       }
  });
    console.log(resp.data);
    // window.location.href=`http://localhost:3000/Home`
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
	{/* <h3>Greetings from GeeksforGeeks!</h3> */}
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
// const rootElement=document.getElementById('root')
// ReactDOM.render()
