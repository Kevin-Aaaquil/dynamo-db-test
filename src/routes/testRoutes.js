import { Router } from "express";
const test = Router();

test.get("/", (req,res)=>{
    res.send("This is Test Bish");
})


export  {test}