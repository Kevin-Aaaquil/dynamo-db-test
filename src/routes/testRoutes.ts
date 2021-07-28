import { Router } from "express";
import logger from '../logs'
const test = Router();

test.get("/", (req,res)=>{
    res.send("This is Test Bish");
})

test.post('/add',(req,res)=>{
   try {
    const data = req.body;
    res.json(data);
    //res.status(203).json({status:"ok", message:"data uploaded"})
   } catch (error) {
       logger.error(new Error(error))
       res.status(404).json({status:"error",message:error.message})
   }
})

test.get('/view',(req,res)=>{
    const id = req.query.ID;
    res.json(req.query);
    // let data = id;
    // res.status(203).json({status:"ok", message:"data by ID success", data:data});

})

export  {test}