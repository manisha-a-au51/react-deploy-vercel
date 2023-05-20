import { useState, useEffect } from "react";

import Box from "@mui/material/Box";
import Button from '@mui/material/Button';
import { makeStyles } from '@mui/styles';


const useStyles = makeStyles({
  container: {
    position: 'relative',
    display: 'inline-block',
  },
  photo: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  },
  uploadButton: {
    position: 'absolute',
    top: '120%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    zIndex: 1,
  },
});

const FileInput = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [imageUrl, setImageUrl] = useState(null);

  useEffect(() => {
    if (selectedImage) {
      setImageUrl(URL.createObjectURL(selectedImage));
    }
  }, [selectedImage]);
 

  const classes = useStyles();

  return (
    <>
      <input
        accept="image/*"
        type="file"
        id="select-image"
        style={{ display: "none" }}
        onChange={(e) => setSelectedImage(e.target.files[0])}
      />
       <div className={classes.container}>
      <label htmlFor="select-image">
        <Button  className={classes.uploadButton} variant="contained" color="primary" component="span">   Upload Photo
        </Button>
      </label>
      {imageUrl && selectedImage && (
        <Box mt={2} textAlign="center">
          {/* <div>Image Preview:</div> */}
          <img  className={classes.photo} src={imageUrl} alt={selectedImage.name} height="100px"  />
        </Box>
      )}
{/*      
      <Button className={classes.uploadButton} variant="contained" color="primary">
        Upload Photo
      </Button> */}
   
      
       </div>
    </>
  );
};

export default FileInput;