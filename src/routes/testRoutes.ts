import { Router } from "express";
import logger from '../logs'
import  dynamodb from "../dynamodb"
const test = Router();

test.get("/", (req,res)=>{
    res.send("<h1>Welcome to the DB portal BITCH!!!!!</h1>");
})

// this will display all the records
// This uses scan, DONOT use it zyada, this bish is costly AF
test.get("/viewall",async (req,res)=>{
    // use dynamodb.getData() here
    const data = await dynamodb.getData();
    res.json(data.Items);
})

// this uses query its thora fine
test.get("/getby/:id",async (req,res)=>{
// use dynamodb.getDataById(req.params.id)    
const data = await dynamodb.getDataById(req.params.id);
res.json(data)
})

// this will add a new object
test.put("/addorupdate", async (req,res)=>{
//  use dynamodb.addOrUpdateData(req.body)  //isme abhi theek karna hai kuch cheeze
const body  = req.body;
await dynamodb.addOrUpdateData(body)
res.json({message : "Success"})
})

// this deletes by id
test.delete("/deleteobject", async (req,res)=>{
    // use dynamodb.deleteData(req.body.id)
    await dynamodb.deleteData(req.body.id);
    res.json({mssg:"succesfully deleted"})
})

export  {test}