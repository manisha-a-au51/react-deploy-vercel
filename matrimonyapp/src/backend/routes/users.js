import  express  from "express";
import {getUsers,createUser,updateUser,loginUser} from "../controllers/users.js";

const router = express.Router();

 router.get("/",getUsers);

 

router.post("/",createUser);

// router.get("/:id",getUser);
router.post("/login",loginUser);

 

router.patch("/:id",updateUser);


  
  



export default router;